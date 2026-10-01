import { useId } from 'react'

export function SafetyDecisionGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <svg className="safety-decision-graphic" viewBox="0 0 680 470" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby={`${titleId} ${descId}`} focusable="false">
      <title id={titleId}>인식, 공간 판단과 조건부 안전 행동의 흐름</title>
      <desc id={descId}>센서가 주변을 인식하고 이동 공간을 판단한 뒤 먼저 감속하고, 통과 가능하면 우회하거나 불확실하면 정지한 뒤 경로와 배터리를 재확인하는 흐름</desc>
      <rect className="visual-panel visual-panel--dark" x="18" y="18" width="644" height="434" rx="28" />
      <text className="visual-kicker" x="50" y="61">SAFETY DECISION CANVAS</text>

      <g className="safety-stage" transform="translate(124 244)">
        <circle className="safety-stage__ring" r="50" />
        <circle className="safety-stage__core" r="17" />
        <path className="safety-stage__wave" d="M-58-43C-29-71 29-71 58-43M-72-62C-36-99 36-99 72-62" />
        <text y="91">01 · 감지</text>
      </g>

      <path className="safety-decision-graphic__connector" d="M189 244h74" />
      <g className="safety-stage" transform="translate(340 244)">
        <path className="safety-stage__diamond" d="M0-67 67 0 0 67-67 0Z" />
        <path className="safety-stage__check" d="m-23 0 16 17 33-38" />
        <text y="103">02 · 공간 판단</text>
      </g>

      <path className="safety-decision-graphic__connector" d="M417 244h74" />
      <g className="safety-actions" transform="translate(555 244)">
        <circle className="safety-actions__stop" cy="-67" r="24" />
        <path d="M-9-76 9-58M9-76-9-58" />
        <path className="safety-actions__avoid" d="M-34 19C-7-20 19-17 39-43" />
        <path className="safety-actions__arrow" d="m29-43 13-2-3 13" />
        <text y="91">03 · 정지·우회</text>
      </g>

      <g className="safety-status" transform="translate(50 385)">
        <rect width="580" height="38" rx="19" />
        <text x="22" y="25">먼저 감속</text>
        <text x="206" y="25">가능하면 저속 회피</text>
        <text x="405" y="25">정지 후 경로·배터리 확인</text>
      </g>
    </svg>
  )
}
