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
      <title id={titleId}>스마트휠체어를 중심으로 연결된 세 정보 영역</title>
      <desc id={descId}>기체의 인식 판단 제어, 앞 구간의 공사와 CCTV 위험 정보, 접근성 지도와 입구 및 충전 거점이 연결된 개념도</desc>
      <path className="network-line" d="M154 169H327M433 169h173" />
      <path className="network-line network-line--secondary" d="M380 113V64M380 226v50" />
      <circle className="network-pulse" cx="241" cy="169" r="7" />
      <circle className="network-pulse" cx="519" cy="169" r="7" />

      <g className="network-card" transform="translate(24 93)">
        <rect width="174" height="152" rx="18" />
        <circle cx="87" cy="49" r="24" />
        <path d="M80 38h14M82 48h10M76 59h22" />
        <text className="network-index" x="24" y="28">01</text>
        <text className="network-title" x="87" y="104">기체 판단</text>
        <text className="network-copy" x="87" y="127">인식·경로·안전 제어</text>
      </g>

      <g className="network-card network-card--primary" transform="translate(293 93)">
        <rect width="174" height="152" rx="18" />
        <circle cx="87" cy="49" r="24" />
        <path d="M74 59V40l13-10 13 10v19M80 59V47h14v12" />
        <text className="network-index" x="24" y="28">02</text>
        <text className="network-title" x="87" y="104">앞 구간 정보</text>
        <text className="network-copy" x="87" y="127">공사·차단·허용 CCTV</text>
      </g>

      <g className="network-card" transform="translate(562 93)">
        <rect width="174" height="152" rx="18" />
        <circle cx="87" cy="49" r="24" />
        <path d="M75 60V36h24v24M84 60V48h7v12" />
        <text className="network-index" x="24" y="28">03</text>
        <text className="network-title" x="87" y="104">접근성 데이터</text>
        <text className="network-copy" x="87" y="127">지도·입구·충전 거점</text>
      </g>
    </svg>
  )
}
