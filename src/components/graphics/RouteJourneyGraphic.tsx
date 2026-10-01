import { useId } from 'react'

export function RouteJourneyGraphic({ decorative = false }: { decorative?: boolean }) {
  const titleId = useId()
  const descId = useId()
  const gridId = useId()

  return (
    <svg className="route-graphic" viewBox="0 0 680 520" preserveAspectRatio="xMidYMid meet" role={decorative ? undefined : 'img'} aria-hidden={decorative ? 'true' : undefined} aria-labelledby={decorative ? undefined : `${titleId} ${descId}`} focusable="false">
      {!decorative && <title id={titleId}>공사 구간을 우회해 접근 가능한 복지관 입구로 이동하는 스마트휠체어</title>}
      {!decorative && <desc id={descId}>공원 입구에서 출발한 휠체어가 보행로를 따라 이동하다 공사로 막힌 길을 확인하고, 충전 거점을 지나는 우회 경로로 접근 가능한 입구에 도착하는 지도형 개념도</desc>}
      <defs>
        <pattern id={gridId} width="28" height="28" patternUnits="userSpaceOnUse">
          <path className="route-map__grid-line" d="M28 0H0V28" />
        </pattern>
      </defs>

      <rect className="graphic-surface" x="20" y="20" width="640" height="480" rx="30" />
      <text className="graphic-label" x="52" y="67">ACCESSIBLE JOURNEY</text>
      <text className="graphic-caption" x="52" y="98">공사 구간을 피해 접근 가능한 입구까지</text>
      <g className="route-map__status">
        <rect x="500" y="52" width="126" height="36" rx="18" />
        <circle cx="520" cy="70" r="5" />
        <text x="536" y="75">보행 경로 예시</text>
      </g>
      <path className="route-map__divider" d="M44 118H636" />

      <rect className="route-map__background" x="42" y="136" width="596" height="336" rx="22" />
      <rect className="route-map__grid" x="42" y="136" width="596" height="336" rx="22" fill={`url(#${gridId})`} />
      <rect className="route-map__building" x="72" y="158" width="138" height="66" rx="16" />
      <rect className="route-map__building" x="478" y="206" width="126" height="64" rx="16" />
      <rect className="route-map__building" x="88" y="262" width="106" height="58" rx="15" />

      <path className="route-map__walkway" d="M126 406C198 390 232 392 276 337C315 288 306 224 378 190C452 155 546 184 581 257C600 299 585 346 548 385" />
      <path className="graphic-route graphic-route--animated route-map__selected-path" d="M126 406C198 390 232 392 276 337C315 288 306 224 378 190C452 155 546 184 581 257C600 299 585 346 548 385" />
      <path className="route-map__blocked-path" d="M276 337C319 304 347 278 367 244" />

      <g className="route-map__construction">
        <rect x="314" y="202" width="142" height="92" rx="20" />
        <path d="M330 278l34-60M354 288l40-70M385 288l39-68M416 284l27-48" />
        <rect className="route-map__construction-label" x="329" y="218" width="111" height="28" rx="14" />
        <text x="384" y="237" textAnchor="middle">통행 차단</text>
      </g>

      <g className="route-waypoint route-waypoint--start">
        <rect className="route-waypoint__card" x="54" y="360" width="150" height="92" rx="20" />
        <circle className="route-waypoint__icon" cx="84" cy="391" r="19" />
        <path d="M74 396h20M84 379v27M70 407h28" />
        <text className="route-waypoint__title" x="111" y="389">공원 입구</text>
        <text className="route-waypoint__subtitle" x="111" y="414">출발 지점</text>
      </g>

      <g className="route-waypoint route-waypoint--charge">
        <rect className="route-waypoint__card" x="430" y="142" width="146" height="78" rx="20" />
        <circle className="route-waypoint__icon" cx="459" cy="171" r="18" />
        <path d="M454 159h10v10h7l-13 15v-10h-8z" />
        <text className="route-waypoint__title" x="486" y="169">충전 거점</text>
        <text className="route-waypoint__subtitle" x="486" y="193">선택 경유지</text>
      </g>

      <g className="route-waypoint route-waypoint--destination">
        <rect className="route-waypoint__card" x="476" y="344" width="158" height="96" rx="20" />
        <circle className="route-waypoint__icon" cx="507" cy="375" r="19" />
        <path d="M497 383v-21h20v21M503 383v-9h8v9M493 383h28" />
        <text className="route-waypoint__title" x="533" y="374">접근 가능한</text>
        <text className="route-waypoint__title" x="533" y="394">입구</text>
        <text className="route-waypoint__subtitle" x="533" y="420">도착·정차</text>
      </g>

      <g className="route-traveler route-map__traveler" transform="translate(278 337)">
        <circle className="route-traveler__sensor" r="52" />
        <circle className="route-traveler__halo" r="39" />
        <g className="wheelchair-mark" transform="translate(-6 3)"><circle cx="0" cy="-18" r="7" /><circle cx="2" cy="10" r="18" /><path d="M0-10v18h21l11 19M1 0h17" /></g>
        <g className="sensor-wave" transform="translate(10 -18)"><path d="M12-6c14 5 21 14 24 27" /><path d="M17-18c20 7 32 20 36 39" /></g>
      </g>
      <g className="route-map__traveler-label">
        <rect x="217" y="399" width="122" height="30" rx="15" />
        <text x="278" y="419" textAnchor="middle">주변 확인 중</text>
      </g>
    </svg>
  )
}
