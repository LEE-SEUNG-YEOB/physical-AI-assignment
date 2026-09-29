import { useId } from 'react'

export function SafetyDecisionGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <svg className="safety-decision-graphic" viewBox="0 0 680 470" role="img" aria-labelledby={`${titleId} ${descId}`}>
      <title id={titleId}>감지, 판단과 안전 행동의 세 단계</title>
      <desc id={descId}>센서가 앞사람을 감지하고 이동 공간을 판단한 뒤 감속, 정지 또는 우회하는 흐름</desc>
      <rect className="visual-panel visual-panel--dark" x="18" y="18" width="644" height="434" rx="28" />
      <text className="visual-kicker" x="50" y="61">SAFETY DECISION CANVAS</text>

      <g className="safety-stage" transform="translate(94 244)">
        <circle className="safety-stage__ring" r="55" />
        <circle className="safety-stage__core" r="18" />
        <path className="safety-stage__wave" d="M-74-44C-36-82 34-82 74-44M-92-67C-43-116 43-116 92-67" />
        <text y="91">01 · 감지</text>
      </g>

      <path className="safety-decision-graphic__connector" d="M168 244h95" />
      <g className="safety-stage" transform="translate(340 244)">
        <path className="safety-stage__diamond" d="M0-67 67 0 0 67-67 0Z" />
        <path className="safety-stage__check" d="m-23 0 16 17 33-38" />
        <text y="103">02 · 공간 판단</text>
      </g>

      <path className="safety-decision-graphic__connector" d="M417 244h80" />
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
        <text x="222" y="25">안전거리 확인</text>
        <text x="428" y="25">불확실하면 정지</text>
      </g>
    </svg>
  )
}
