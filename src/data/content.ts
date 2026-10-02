import type {
  FeatureItem,
  ImpactItem,
  NavigationItem,
  PrincipleItem,
  ProcessStep,
  ScenarioStep,
  SupportProfile,
  TechnologyItem,
} from '../types/content'

export const navigationItems = [
  { path: '/', label: '서비스 소개', end: true },
  { path: '/features', label: '주요 기능', end: true },
  { path: '/journey', label: '이용 과정', end: true },
  { path: '/technology', label: '핵심 기술', end: true },
  { path: '/difference', label: '차별점', end: true },
  { path: '/impact', label: '기대 효과', end: true },
] as const satisfies readonly NavigationItem[]

export const problemCards = [
  { icon: 'control' as const, title: '계속되는 조이스틱 조작', description: '사람과 장애물을 살피면서 방향과 속도를 계속 조절해야 해 이동 내내 높은 집중이 필요합니다.' },
  { icon: 'wheelchair' as const, title: '실제로 통과하기 어려운 길', description: '지도에는 길이 있어도 계단, 높은 턱, 급경사, 좁은 모퉁이 때문에 휠체어는 지나지 못할 수 있습니다.' },
  { icon: 'crosswalk' as const, title: '갑자기 달라지는 보행 환경', description: '공사, 적치물, 쓰러진 킥보드처럼 지도에 없던 변화는 현장에 도착하기 전까지 알기 어렵습니다.' },
] as const

export const connectedLayers = [
  { number: '01', title: '기체의 인식·판단·제어', description: '카메라와 LiDAR로 사람·장애물·지면을 살피고, 기체 크기와 안전 조건에 맞춰 조향·감속·정지를 결정합니다.' },
  { number: '02', title: '앞 구간의 위험 정보', description: '지자체 공사·통제 정보와 허용된 CCTV 이벤트를 관측 시각·신뢰도·유효기간과 함께 경로에 반영합니다.' },
  { number: '03', title: '접근성 지도와 이동 거점', description: '보도 폭·경사·턱·회전 공간, 접근 가능한 입구, 정차 지점과 호환 충전 거점을 연결합니다.' },
] as const

export const features = [
  { number: 'F1', icon: 'scan', title: '실시간 장애물 인식과 자동 회피', situation: '앞의 보행자가 멈추거나 자전거, 킥보드와 적치물이 이동 경로에 나타납니다.', judgment: '대상의 위치와 움직임, 예상 충돌 위험과 남은 회피 공간을 확인합니다.', action: '먼저 감속하고 안전 여유가 있으면 낮은 속도로 우회하며, 불확실하거나 폭이 부족하면 정지합니다.' },
  { number: 'F2', icon: 'space', title: '휠체어 통과 가능성 판단', situation: '통로는 넓어 보여도 모퉁이가 좁거나 턱·경사·젖은 노면이 있습니다.', judgment: '기체 폭·길이·발판·회전 공간과 통로 폭, 턱, 경사, 노면의 불확실성을 비교합니다.', action: '실제로 통과하고 회전할 수 있는 구간만 진입하고, 조건을 확인하기 어려우면 멈춥니다.' },
  { number: 'F3', icon: 'route', title: '접근성 기반 자율 경로 탐색', situation: '가까운 길에는 계단이 있고 조금 먼 곳에 확인된 경사로와 접근 가능한 입구가 있습니다.', judgment: '통과 조건, 입구·정차 지점과 배터리 여유를 먼저 확인한 뒤 거리와 우회 부담을 비교합니다.', action: '가장 짧은 길보다 실제로 도착할 수 있는 경로를 선택하고 배터리가 부족하면 출발 또는 우회를 제한합니다.' },
  { number: 'F4', icon: 'network', title: '외부 정보 연동과 우회 경로 재탐색', situation: '아직 도착하지 않은 보도에 공사가 시작되거나 허용된 CCTV에서 차단이 확인됩니다.', judgment: '정보의 관측 시각, 관련 보도, 신뢰도와 유효기간을 확인하고 대체 경로 조건을 다시 계산합니다.', action: '확인된 먼 위험은 진입 전에 우회하고, 새 현장 장애물은 자체 센서로 확인해 정지 후 재탐색합니다.', tags: ['오래된 정보·사각지대는 미확인'] },
  { number: 'F5', icon: 'stop', title: '사용자 개입과 안전 정지', situation: '사용자가 멈추고 싶거나 센서·위치·제어 상태에 이상이 생깁니다.', judgment: '물리 정지, 수동 전환과 이동 취소를 우선 처리하고 고장·긴급 정지 원인을 구분합니다.', action: '즉시 제동하며, 고장·긴급 정지는 원인 해소와 사용자 확인 전까지 자동으로 재개하지 않습니다.' },
] as const satisfies readonly FeatureItem[]

export const safetySteps = [
  { number: '01', title: '주변을 인식합니다', description: '카메라와 LiDAR로 사람·장애물·지면과 남은 공간을 확인합니다.', state: 'sense' },
  { number: '02', title: '공간과 위험을 판단합니다', description: '통과 폭, 회전 공간, 대상의 움직임과 센서 불확실성을 함께 비교합니다.', state: 'caution' },
  { number: '03', title: '먼저 속도를 낮춥니다', description: '위험 가능성이 커지면 감속해 정지하거나 방향을 바꿀 시간을 확보합니다.', state: 'caution' },
  { number: '04', title: '회피하거나 정지합니다', description: '통과 조건이 확인되면 저속으로 회피하고, 부족하거나 불확실하면 정지합니다.', state: 'stop' },
  { number: '05', title: '경로와 배터리를 다시 봅니다', description: '대체 경로의 통과 조건과 배터리 여유, 안전한 대기 공간을 재확인합니다.', state: 'sense' },
  { number: '06', title: '정지 원인에 맞춰 재개합니다', description: '장애물 정지는 주변과 경로를 다시 확인하고 변경 이유를 안내한 뒤 재개합니다. 사용자 중지·고장·긴급 정지는 해당 해제 조건과 사용자 확인 전까지 유지합니다.', state: 'move' },
] as const satisfies readonly ProcessStep[]

export const usageSteps = [
  { number: '01', title: '탑승과 정지 입력 확인', description: '물리 정지 버튼과 수동 전환 방법을 확인합니다.' },
  { number: '02', title: '목적지 선택', description: '휠체어 화면·앱·음성으로 복지관 등 등록된 목적지를 선택합니다.' },
  { number: '03', title: '입구·경로·배터리 확인', description: '접근 가능한 입구와 통과 조건, 도착까지의 배터리 여유를 확인합니다.' },
  { number: '04', title: '출발과 자동 이동', description: '사전 조사된 보행 구역 안에서 주변을 확인하며 이동합니다.' },
  { number: '05', title: '상황 변화에 대응', description: '먼 공사는 미리 우회하고 현장의 새 장애물은 감속·정지 후 재탐색합니다.' },
  { number: '06', title: '입구 앞 도착', description: '접근 가능한 입구 앞 지정 지점에 정지하고 도착·하차 대기를 안내합니다.' },
] as const satisfies readonly ProcessStep[]

export const scenarioSteps = [
  { number: '01', label: '출발 준비', place: '공원 입구', situation: '복지관을 목적지로 선택합니다.', checks: '계단이 없는 경로, 접근 가능한 입구, 배터리 여유와 정차 지점', action: '확인된 보행 경로와 도착 지점을 안내한 뒤 출발합니다.' },
  { number: '02', label: '공사 사전 우회', place: '앞 구간', situation: '이동 전에 공사·차단 정보가 수신됩니다.', checks: '관측 시각, 관련 보도, 신뢰도, 유효기간과 대체 보도의 통과 조건', action: '공사 지점에 도착하기 전에 확인된 대체 보도로 경로를 바꿉니다.' },
  { number: '03', label: '보행자 감속·회피', place: '우회 보도', situation: '앞 보도에 보행자가 이동하고 있습니다.', checks: '보행자의 이동 방향, 안전거리, 남은 통과 폭과 정지 거리', action: '먼저 감속하고 안전 여유가 확인되면 낮은 속도로 피해 지나갑니다. 여유가 부족하거나 불확실하면 정지합니다.' },
  { number: '04', label: '재탐색·안전 대기', place: '안전 대기 지점', situation: '추가 우회가 필요한 상태입니다.', checks: '대체 경로, 배터리 여유, 주변 통행을 방해하지 않는 대기 공간', action: '가능한 경로가 있으면 변경 이유를 안내한 뒤 재개합니다. 경로가 없으면 정지 상태에서 이동 취소·수동 전환·도움 요청을 선택할 수 있으며, 같은 막힌 길을 반복하거나 차도·계단으로 강제 우회하지 않습니다. 수동 전환 중에도 충돌 방지와 기체 안전 제한은 유지됩니다.' },
  { number: '05', label: '경사로 접근', place: '복지관 접근로', situation: '정문에는 계단이 있고 측면에 경사로가 있습니다.', checks: '사전에 확인된 측면 경사로와 현재 노면·장애물 상태', action: '경사로의 현장 상태를 다시 확인하며 접근 가능한 입구로 이동합니다.' },
  { number: '06', label: '입구 앞 도착', place: '접근 가능한 입구', situation: '입구 앞 지정 정차 지점에 도착합니다.', checks: '정차 위치와 주변 보행 공간, 안전한 하차 가능 여부', action: '완전히 정지한 뒤 도착과 하차 대기를 안내합니다.' },
] as const satisfies readonly ScenarioStep[]

export const supportProfiles = [
  { icon: 'wheelchair', priority: '1차 핵심', title: '일상적으로 휠체어를 이용하는 사람', focus: '일상 이동에 휠체어가 필요하고 복잡한 보도 판단과 지속적인 조작 부담을 줄이고자 하는 이용자입니다.', interface: '목적지 선택, 자동 이동, 정지와 수동 전환' },
  { icon: 'person', priority: '2차 대상', title: '보행 능력이 저하된 고령자', focus: '짧은 거리는 걸을 수 있지만 장거리 보행이나 균형 유지가 어려울 때 필요한 구간에서 이용합니다.', interface: '큰 글씨, 단순 메뉴와 저속 설정' },
  { icon: 'person', priority: '2차 대상', title: '부상 또는 수술 후 회복자', focus: '회복 기간 동안 보행이 제한될 때 병원과 재활시설 주변에서 단기 이동 지원을 이용합니다.', interface: '정지 버튼, 탑승 안내와 부드러운 주행' },
  { icon: 'accessibility', priority: '확장 대상', title: '복합 접근성 요구가 있는 이용자', focus: '보행장애와 시각 또는 상지 조작 제약이 함께 있는 경우 입력과 상태 안내 방식을 조정합니다.', interface: '음성, 촉각 버튼과 진동 안내' },
  { icon: 'temporary', priority: '확장 대상', title: '임산부 등 일시적 이동지원 이용자', focus: '장거리 보행 부담이 있는 특정 상황에서 시설 대여 방식으로 이용합니다. 임산부 전체를 휠체어 수요로 가정하지 않습니다.', interface: '큰 버튼, 간단한 목적지와 무리 없는 탑승' },
] as const satisfies readonly SupportProfile[]

export const technologies = [
  { eyebrow: 'SENSE', icon: 'camera', title: '주변과 지면을 보는 센서', description: '카메라와 LiDAR가 사람·장애물의 위치, 거리와 공간 구조를 확인합니다.' },
  { eyebrow: 'COMPUTE', icon: 'cpu', title: '기체 안의 AI 연산', description: '객체 인식, 위치 추정과 경로 판단을 기체 내부 연산 장치에서 처리합니다.' },
  { eyebrow: 'MAP', icon: 'database', title: '역할이 다른 지도 데이터', description: '장소 검색, 접근성 그래프와 기체용 센서 지도를 목적에 맞게 연결합니다.' },
  { eyebrow: 'CONTROL', icon: 'gauge', title: '검증 가능한 안전 제어', description: 'AI 판단을 안전 규칙과 상태 감시를 거쳐 조향·감속·정지 명령으로 바꿉니다.' },
  { eyebrow: 'UPDATE', icon: 'network', title: '공사·CCTV 위험 갱신', description: '허용된 정보만 시각·신뢰도·유효기간과 함께 앞 구간 판단에 보탭니다.' },
  { eyebrow: 'ENERGY', icon: 'battery', title: '배터리와 유선 충전', description: '주행 여유와 호환 충전 거점을 경로에 반영하고 충전 중 이동을 잠급니다.' },
] as const satisfies readonly TechnologyItem[]

export const principles = [
  { icon: 'shield', title: '불확실하면 정지', description: '위험을 확인할 수 없는 구간을 추측으로 통과하지 않고 감속·정지합니다.' },
  { icon: 'control', title: '사용자 제어권 유지', description: '물리 버튼, 수동 전환과 이동 취소를 언제든 우선 처리합니다. 수동 전환도 충돌 방지와 기체 안전 제한을 우회하지 않습니다.' },
  { icon: 'network', title: '외부 정보와 로컬 제어 분리', description: '외부 정보가 오래되면 최신으로 간주하지 않으며 현장 센서의 정지 판단을 덮어쓰지 않습니다.' },
  { icon: 'privacy', title: '최소 정보 처리', description: '원본 영상의 장기 저장보다 구간·장애물·시각·신뢰도 중심의 위험 이벤트를 다룹니다.' },
] as const satisfies readonly PrincipleItem[]

export const impacts = [
  { icon: 'wheelchair', title: '일상 휠체어 이용자', description: '반복적인 방향 조작과 통과 가능성 판단 부담을 줄이고 목적지 중심의 독립 이동을 돕습니다.' },
  { icon: 'person', title: '2차·확장 이용자', description: '고령자와 회복자는 필요한 구간에서 이용하고, 복합 접근성 요구에는 대체 입력을 제공합니다. 일시적 이동지원은 특정 상황의 시설 대여로 제안합니다.' },
  { icon: 'user', title: '보호자와 활동보조인', description: '정상 운행 중 계속 밀거나 조작하는 대신 탑승, 하차와 요청된 도움에 집중할 수 있습니다.' },
  { icon: 'institution', title: '시설 운영자', description: '기체 점검, 충전 거점, 접근 가능한 입구와 정차 지점 정보를 일관되게 관리할 수 있습니다.' },
] as const satisfies readonly ImpactItem[]
