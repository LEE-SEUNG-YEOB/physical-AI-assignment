import { useId } from 'react'

export function MobilityNetworkGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <svg
      className="network-graphic"
      viewBox="0 0 760 340"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      focusable="false"
    >
      <title id={titleId}>개인 인공지능과 도시 및 시설 시스템의 연결 구조</title>
      <desc id={descId}>개인 이동 기기, 도시 인프라, 공공시설 세 영역이 경로선으로 연결되어 이동 정보를 주고받는 개념도</desc>
      <path className="network-line" d="M154 169H327M433 169h173" />
      <path className="network-line network-line--secondary" d="M380 113V64M380 226v50" />
      <circle className="network-pulse" cx="241" cy="169" r="7" />
      <circle className="network-pulse" cx="519" cy="169" r="7" />

      <g className="network-card" transform="translate(24 93)">
        <rect width="174" height="152" rx="18" />
        <circle cx="87" cy="49" r="24" />
        <path d="M80 38h14M82 48h10M76 59h22" />
        <text className="network-index" x="24" y="28">01</text>
        <text className="network-title" x="87" y="104">개인 AI</text>
        <text className="network-copy" x="87" y="127">가까운 위험과 이동 판단</text>
      </g>

      <g className="network-card network-card--primary" transform="translate(293 93)">
        <rect width="174" height="152" rx="18" />
        <circle cx="87" cy="49" r="24" />
        <path d="M74 59V40l13-10 13 10v19M80 59V47h14v12" />
        <text className="network-index" x="24" y="28">02</text>
        <text className="network-title" x="87" y="104">도시 AI</text>
        <text className="network-copy" x="87" y="127">신호와 넓은 범위의 위험</text>
      </g>

      <g className="network-card" transform="translate(562 93)">
        <rect width="174" height="152" rx="18" />
        <circle cx="87" cy="49" r="24" />
        <path d="M75 60V36h24v24M84 60V48h7v12" />
        <text className="network-index" x="24" y="28">03</text>
        <text className="network-title" x="87" y="104">시설 AI</text>
        <text className="network-copy" x="87" y="127">출입구와 실내 목적지</text>
      </g>
    </svg>
  )
}
