import { useId, type ReactNode } from 'react'

interface JourneyScenarioGraphicProps { activeStep: number }

const scenes = [
  { title: '출발 준비', description: '복지관을 선택하고 접근 가능한 입구, 경로와 배터리를 확인한 뒤 출발합니다.' },
  { title: '공사 사전 우회', description: '앞 구간의 공사 정보를 확인하고 공사 지점에 닿기 전에 대체 보도로 경로를 바꿉니다.' },
  { title: '보행자 감속·회피', description: '앞의 보행자를 확인하고 감속한 뒤 안전거리를 확보해 낮은 속도로 피해 지나갑니다.' },
  { title: '재탐색·안전 대기', description: '대체 경로와 배터리를 다시 확인합니다. 가능한 경로가 없으면 정지 상태에서 이동 취소, 수동 전환 또는 도움 요청을 선택하고 차도나 계단으로 강제 우회하지 않습니다.' },
  { title: '경사로 접근', description: '통과할 수 없는 정문 계단 대신 확인된 측면 경사로를 선택하고 현장 상태를 다시 확인합니다.' },
  { title: '입구 앞 도착', description: '접근 가능한 입구 앞 지정 정차 지점에 완전히 멈추고 도착과 하차 대기를 안내합니다.' },
] as const

function Wheelchair({ x, y }: { x: number; y: number }) {
  return <g className="journey-scene__wheelchair" transform={`translate(${x} ${y})`}><circle cx="-14" cy="-31" r="11" /><path d="M-14-20v24h27l13 20M-14-4h-16M-30-4v23" /><circle cx="-5" cy="20" r="25" /><circle cx="30" cy="25" r="8" /></g>
}

function Pill({ x, y, width, tone = 'ok', children }: { x: number; y: number; width: number; tone?: 'ok' | 'warn' | 'stop' | 'info'; children: ReactNode }) {
  return <g className={`journey-scene__pill journey-scene__pill--${tone}`} transform={`translate(${x} ${y})`}><rect width={width} height="38" rx="19" /><text x={width / 2} y="25">{children}</text></g>
}

function SceneHeader({ number, title }: { number: string; title: string }) {
  return <g className="journey-scene__header"><text x="52" y="68">STEP {number} · {title}</text><text className="journey-scene__example-label" x="668" y="68" textAnchor="end">고정 예시 · 실시간 데이터 아님</text></g>
}

function StartScene() {
  return <><SceneHeader number="01" title="출발 준비" /><Wheelchair x={132} y={282} /><path className="journey-scene__route" d="M178 306C250 306 270 260 326 260" /><g className="journey-scene__screen" transform="translate(326 112)"><rect width="318" height="210" rx="22" /><text className="journey-scene__kicker" x="28" y="42">목적지 선택</text><text className="journey-scene__title" x="28" y="82">복지관</text><path d="M38 111h242" /><text x="56" y="145">✓ 접근 가능한 입구 확인</text><text x="56" y="181">✓ 계단 없는 경로 확인</text></g><Pill x={78} y={354} width={162}>배터리 여유 확인</Pill><Pill x={252} y={354} width={170}>정차 지점 확인</Pill></>
}

function DetourScene() {
  return <><SceneHeader number="02" title="공사 사전 우회" /><path className="journey-scene__road journey-scene__road--original" d="M74 292H646" /><path className="journey-scene__road journey-scene__road--detour" d="M190 292C232 292 232 132 302 132H520C574 132 580 236 646 236" /><text className="journey-scene__road-label" x="410" y="111" textAnchor="middle">확인된 대체 보도</text><path className="journey-scene__old-route" d="M74 292H646" /><path className="journey-scene__route" d="M74 292H190C232 292 232 132 302 132H520C574 132 580 236 646 236" /><Wheelchair x={105} y={262} /><g className="journey-scene__barrier" transform="translate(384 276)"><path d="M-48 17h96l-14-58h-68zM-28-21h56M-21-2h42" /><text y="48">기존 보도 공사</text></g><Pill x={82} y={92} width={170} tone="warn">공사 정보 수신</Pill><Pill x={492} y={92} width={140}>대체 보도 이동</Pill><g className="journey-scene__meta" transform="translate(432 350)"><text x="0">관측 10:20</text><text x="98">신뢰도 높음</text><text x="218">유효 30분</text></g></>
}

function ObstacleScene() {
  return <><SceneHeader number="03" title="보행자 감속·회피" /><rect className="journey-scene__sidewalk" x="66" y="116" width="588" height="218" rx="18" /><path className="journey-scene__lane-edge" d="M88 154H632M88 298H632" /><path className="journey-scene__avoid-route" d="M112 244C248 244 266 154 392 154S520 238 620 238" /><text className="journey-scene__sequence" x="126" y="210">① 감속</text><Wheelchair x={145} y={244} /><g className="journey-scene__person" transform="translate(386 224)"><circle cy="-43" r="15" /><path d="M0-28v58M-28-7h56M0 30l-25 39M0 30l25 39" /><text x="0" y="86" textAnchor="middle">이동 중인 보행자</text></g><circle className="journey-scene__safety-zone" cx="386" cy="221" r="76" /><path className="journey-scene__measure" d="M312 132h148m-148-10v20m148-20v20" /><text className="journey-scene__measure-label" x="386" y="108" textAnchor="middle">② 안전거리·통과 폭 확인</text><text className="journey-scene__sequence" x="522" y="201">③ 저속 우회</text><g className="journey-scene__result-banner" transform="translate(180 354)"><rect width="360" height="40" rx="20" /><text x="180" y="26" textAnchor="middle">여유가 있으면 회피 · 부족하거나 불확실하면 정지</text></g></>
}

function ReplanScene() {
  return <><SceneHeader number="04" title="재탐색·안전 대기" /><g className="journey-scene__decision" transform="translate(62 108)"><rect width="198" height="198" rx="22" /><text className="journey-scene__kicker" x="99" y="42" textAnchor="middle">다시 확인</text><text x="28" y="86">✓ 대체 경로</text><text x="28" y="124">✓ 배터리 여유</text><text x="28" y="162">✓ 안전 대기 공간</text></g><path className="journey-scene__branch" d="M260 205H320M320 205V139H360M320 205v88h40" /><g className="journey-scene__result journey-scene__result--go" transform="translate(360 96)"><rect width="300" height="88" rx="18" /><text className="journey-scene__kicker" x="24" y="33">경로 있음</text><text x="24" y="63">변경 이유 안내 후 주행 재개 →</text></g><g className="journey-scene__result journey-scene__result--wait" transform="translate(360 220)"><rect width="300" height="132" rx="18" /><text className="journey-scene__kicker" x="24" y="31">경로 없음 · 정지 유지</text><rect className="journey-scene__option-strip" x="16" y="51" width="268" height="38" rx="10" /><text className="journey-scene__option-text" x="150" y="76" textAnchor="middle">이동 취소 · 수동 전환 · 도움 요청</text><text className="journey-scene__safe-note" x="150" y="113" textAnchor="middle">막힌 길 반복·차도·계단 강제 우회 없음</text></g><Pill x={87} y={342} width={150} tone="info">경로 다시 계산</Pill></>
}

function RampScene() {
  return <><SceneHeader number="05" title="경사로 접근" /><g className="journey-scene__choice-panel journey-scene__choice-panel--blocked" transform="translate(70 108)"><rect width="240" height="178" rx="18" /><text className="journey-scene__choice-title" x="120" y="34" textAnchor="middle">정문 계단</text><path className="journey-scene__stairs" d="M43 142h154v-24H67V94h106V70H91" /><g className="journey-scene__stop" transform="translate(194 45)"><circle r="22" /><path d="M-9-9l18 18M9-9l-18 18" /></g><text className="journey-scene__choice-caption" x="120" y="166" textAnchor="middle">휠체어 통과 불가</text></g><g className="journey-scene__choice-panel journey-scene__choice-panel--ramp" transform="translate(410 108)"><rect width="240" height="178" rx="18" /><text className="journey-scene__choice-title" x="120" y="34" textAnchor="middle">측면 경사로</text><path className="journey-scene__ramp-surface" d="M32 142h176M32 142L190 72M48 122l142-63" /><path className="journey-scene__handrail" d="M58 112l126-55v-18" /><text className="journey-scene__check" x="197" y="69">✓</text><text className="journey-scene__choice-caption" x="120" y="166" textAnchor="middle">노면 양호 · 장애물 없음</text></g><Wheelchair x={332} y={304} /><path className="journey-scene__rejected-route" d="M317 285C268 266 242 251 214 236" /><path className="journey-scene__route journey-scene__route--ramp" d="M365 304C422 302 462 272 505 238" /><path className="journey-scene__sensor" d="M374 271l112-68M374 271l132-13" /><g className="journey-scene__result-banner" transform="translate(154 354)"><rect width="412" height="40" rx="20" /><text x="206" y="26" textAnchor="middle">확인된 경사로 → 현장 재확인 → 입구 접근</text></g></>
}

function ArrivalScene() {
  return <><SceneHeader number="06" title="입구 앞 도착" /><g className="journey-scene__building" transform="translate(386 102)"><path d="M0 232V22h252v210M43 232V92h72v140M154 232V92h72v140M0 232h252" /><text x="126" y="55" textAnchor="middle">복지관 접근 가능 입구</text></g><rect className="journey-scene__stop-zone" x="166" y="256" width="190" height="94" rx="18" /><text className="journey-scene__zone-label" x="261" y="337" textAnchor="middle">지정 정차 지점</text><Wheelchair x={244} y={282} /><g className="journey-scene__arrival-check" transform="translate(112 116)"><circle cx="34" cy="34" r="34" /><path d="M18 34l11 12 22-27" /><text x="84" y="27">완전히 정지</text><text x="84" y="56">도착·하차 대기 안내</text></g><path className="journey-scene__boundary" d="M370 92v278" /><text className="journey-scene__boundary-label" x="382" y="366">실내 이동은 현재 범위에서 제외</text></>
}

const sceneComponents = [StartScene, DetourScene, ObstacleScene, ReplanScene, RampScene, ArrivalScene]

export function JourneyScenarioGraphic({ activeStep }: JourneyScenarioGraphicProps) {
  const titleId = useId(); const descId = useId(); const scene = scenes[activeStep] ?? scenes[0]; const Scene = sceneComponents[activeStep] ?? StartScene
  return <svg className="journey-scenario-graphic" viewBox="0 0 720 430" role="img" aria-labelledby={`${titleId} ${descId}`} focusable="false"><title id={titleId}>{activeStep + 1}단계 {scene.title}</title><desc id={descId}>{scene.description} 실제 지도나 실시간 위치 화면이 아닌 서비스 동작 예시입니다.</desc><rect className="journey-scenario-graphic__surface" x="20" y="20" width="680" height="390" rx="28" /><Scene /></svg>
}
