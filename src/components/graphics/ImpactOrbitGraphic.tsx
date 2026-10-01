import { useId } from 'react'

export function ImpactOrbitGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <svg className="impact-orbit-graphic" viewBox="0 0 620 500" role="img" aria-labelledby={`${titleId} ${descId}`} focusable="false">
      <title id={titleId}>목적지 이동을 함께 만드는 네 주체</title>
      <desc id={descId}>휠체어 이용자, 2차·확장 이용자, 보호자와 활동보조인, 시설 운영자가 독립적인 목적지 이동을 중심으로 연결된 네 개의 패널</desc>
      <path className="impact-link" d="M250 175C265 205 281 221 296 235" />
      <path className="impact-link" d="M370 175C355 205 339 221 324 235" />
      <path className="impact-link" d="M250 325C265 295 281 279 296 265" />
      <path className="impact-link" d="M370 325C355 295 339 279 324 265" />

      <g className="impact-node impact-node--user">
        <rect className="impact-node__surface" x="32" y="45" width="238" height="130" rx="26" />
        <circle className="impact-node__badge" cx="67" cy="78" r="18" />
        <text className="impact-node__number" x="67" y="83">01</text>
        <text className="impact-node__title" x="151" y="112">휠체어 이용자</text>
        <text className="impact-node__subtitle" x="151" y="140">독립적인 목적지 이동</text>
      </g>
      <g className="impact-node impact-node--extended">
        <rect className="impact-node__surface" x="350" y="45" width="238" height="130" rx="26" />
        <circle className="impact-node__badge" cx="385" cy="78" r="18" />
        <text className="impact-node__number" x="385" y="83">02</text>
        <text className="impact-node__title" x="469" y="112">2차·확장 이용자</text>
        <text className="impact-node__subtitle" x="469" y="140">필요한 구간의 이동 지원</text>
      </g>
      <g className="impact-node impact-node--supporter">
        <rect className="impact-node__surface" x="32" y="325" width="238" height="130" rx="26" />
        <circle className="impact-node__badge" cx="67" cy="358" r="18" />
        <text className="impact-node__number" x="67" y="363">03</text>
        <text className="impact-node__title" x="151" y="392">보호자·활동보조인</text>
        <text className="impact-node__subtitle" x="151" y="420">요청된 도움에 집중</text>
      </g>
      <g className="impact-node impact-node--operator">
        <rect className="impact-node__surface" x="350" y="325" width="238" height="130" rx="26" />
        <circle className="impact-node__badge" cx="385" cy="358" r="18" />
        <text className="impact-node__number" x="385" y="363">04</text>
        <text className="impact-node__title" x="469" y="392">시설 운영자</text>
        <text className="impact-node__subtitle" x="469" y="420">입구·거점 정보 관리</text>
      </g>

      <g className="impact-orbit__core" transform="translate(310 252)">
        <circle r="74" />
        <text y="-8">독립적인</text>
        <text y="21">목적지 이동</text>
      </g>
    </svg>
  )
}
