import { useId } from 'react'

export function RouteJourneyGraphic({ decorative = false }: { decorative?: boolean }) {
  const titleId = useId()
  const descId = useId()

  return (
    <svg className="route-graphic" viewBox="0 0 680 520" preserveAspectRatio="xMidYMid meet" role={decorative ? undefined : 'img'} aria-hidden={decorative ? 'true' : undefined} aria-labelledby={decorative ? undefined : `${titleId} ${descId}`} focusable="false">
      {!decorative && <title id={titleId}>공사 구간을 우회해 접근 가능한 복지관 입구로 이동하는 스마트휠체어</title>}
      {!decorative && <desc id={descId}>공원 입구에서 출발한 휠체어가 센서로 주변을 확인하고 공사 구간을 피해 경사로가 있는 복지관 입구 앞 정차 지점에 도착하는 개념도</desc>}
      <rect className="graphic-surface" x="24" y="24" width="632" height="472" rx="28" />
      <path className="graphic-route graphic-route--animated" d="M88 400C168 352 207 384 250 320C285 270 260 195 337 150C415 104 526 125 585 214C624 272 604 332 562 377" />
      <path className="graphic-route graphic-route--soft" d="M88 430C174 390 223 419 286 357" />
      <path className="route-blocked" d="M286 357C341 320 370 291 392 250" />
      <g className="graphic-node" transform="translate(88 400)"><circle r="18" /><path d="M-8 2h16M0-8v20M-12 12h24" /><text x="0" y="46">공원 입구</text></g>
      <g className="graphic-node graphic-node--warning" transform="translate(392 250)"><circle r="18" /><path d="M-10 9h20L5-10H-5zM-6 1h12" /><text x="0" y="46">공사 차단</text></g>
      <g className="graphic-node" transform="translate(562 377)"><circle r="18" /><path d="M-10 10V-9h20v19M-4 10V2h8v8" /><text x="0" y="46">접근 가능한 입구</text></g>
      <g className="route-charge" transform="translate(505 134)"><circle r="18" /><path d="M-5-10h10v9h6L0 12V3h-7z" /><text x="0" y="46">충전 거점</text></g>
      <g className="route-traveler" transform="translate(326 380)">
        <circle className="route-traveler__halo" r="42" />
        <g className="wheelchair-mark" transform="translate(-6 3)"><circle cx="0" cy="-18" r="7" /><circle cx="2" cy="10" r="18" /><path d="M0-10v18h21l11 19M1 0h17" /></g>
        <g className="sensor-wave" transform="translate(10 -18)"><path d="M12-6c14 5 21 14 24 27" /><path d="M17-18c20 7 32 20 36 39" /></g>
      </g>
      <text className="graphic-label" x="56" y="78">ACCESSIBLE JOURNEY</text>
      <text className="graphic-caption" x="56" y="110">공사를 피해 입구 앞 지정 지점까지</text>
    </svg>
  )
}
