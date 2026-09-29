import { useId } from 'react'

export function RouteJourneyGraphic({ decorative = false }: { decorative?: boolean }) {
  const titleId = useId()
  const descId = useId()

  return (
    <svg
      className="route-graphic"
      viewBox="0 0 680 520"
      preserveAspectRatio="xMidYMid meet"
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? 'true' : undefined}
      aria-labelledby={decorative ? undefined : `${titleId} ${descId}`}
      focusable="false"
    >
      {!decorative && <title id={titleId}>공원에서 공공시설 내부까지 이어지는 모두길 경로</title>}
      {!decorative && <desc id={descId}>공원, 보도, 횡단보도, 접근 가능한 출입구와 시설 내부 목적지를 주황색 경로로 연결한 개념도</desc>}
      <rect className="graphic-surface" x="24" y="24" width="632" height="472" rx="28" />
      <path className="graphic-route graphic-route--animated" d="M88 395 C150 330 182 390 238 320 C292 267 345 224 407 266 S515 326 592 182" />
      <path className="graphic-route graphic-route--soft" d="M92 424 C166 377 184 428 261 354 C321 298 386 277 448 301 S540 324 610 242" />

      <g className="graphic-node" transform="translate(88 395)">
        <circle r="18" />
        <path d="M-8 2h16M0-8v20M-12 12h24" />
        <text x="0" y="46">공원</text>
      </g>

      <g className="graphic-node" transform="translate(238 320)">
        <circle r="18" />
        <path d="M-9-7h18M-9 0h18M-9 7h18" />
        <text x="0" y="46">보도</text>
      </g>

      <g className="graphic-node" transform="translate(407 266)">
        <circle r="18" />
        <path d="M-11-8v16M-4-8v16M4-8v16M11-8v16" />
        <text x="0" y="46">횡단보도</text>
      </g>

      <g className="graphic-node" transform="translate(592 182)">
        <circle r="18" />
        <path d="M-10 10V-9h20v19M-4 10V2h8v8" />
        <text x="0" y="46">공공시설</text>
      </g>

      <g className="route-traveler" transform="translate(326 380)">
        <circle className="route-traveler__halo" r="42" />
        <g className="wheelchair-mark" transform="translate(-6 3)">
          <circle cx="0" cy="-18" r="7" />
          <circle cx="2" cy="10" r="18" />
          <path d="M0-10v18h21l11 19M1 0h17" />
        </g>
        <g className="sensor-wave" transform="translate(10 -18)">
          <path d="M12-6c14 5 21 14 24 27" />
          <path d="M17-18c20 7 32 20 36 39" />
        </g>
      </g>

      <text className="graphic-label" x="56" y="78">ACCESSIBLE JOURNEY</text>
      <text className="graphic-caption" x="56" y="110">보도에서 목적지 안까지 이어지는 하나의 경로</text>
    </svg>
  )
}
