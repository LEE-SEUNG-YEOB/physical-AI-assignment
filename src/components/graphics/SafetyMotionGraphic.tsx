import { useId } from 'react'

export function SafetyMotionGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <figure className="safety-graphic-wrap">
      <figcaption className="simulation-label">서비스 동작 예시</figcaption>
      <svg
        className="safety-graphic"
        viewBox="0 0 640 580"
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
        focusable="false"
      >
        <title id={titleId}>앞사람을 감지한 이동 기기의 감속과 우회 개념도</title>
        <desc id={descId}>휠체어 이동 기기가 앞사람을 감지하고 감속한 뒤, 통로가 열리면 오른쪽으로 우회하거나 불확실하면 정지하는 과정을 나타낸다</desc>
        <rect className="safety-road" x="64" y="40" width="512" height="500" rx="30" />
        <path className="safety-road-line" d="M320 60v460" />
        <path className="safety-path safety-path--main" d="M250 492C250 410 250 348 270 303" />
        <path className="safety-path safety-path--avoid" d="M270 303C305 250 400 276 432 205C449 166 438 118 420 90" />
        <path className="safety-path safety-path--stop" d="M250 390v-58" />

        <g className="person-mark" transform="translate(292 224)">
          <circle cy="-22" r="12" />
          <path d="M0-8v47M0 6l-23 21M0 6l23 21M0 39l-19 35M0 39l20 35" />
        </g>

        <g className="wheelchair-mark wheelchair-mark--light" transform="translate(250 438)">
          <circle cx="0" cy="-23" r="9" />
          <circle cx="2" cy="14" r="24" />
          <path d="M0-12v23h28l16 27M2 0h22" />
        </g>

        <g className="safety-sensor" transform="translate(250 414)">
          <path d="M-47-36c27-26 68-26 95 0" />
          <path d="M-70-60c39-40 102-40 141 0" />
          <path d="M-94-84c53-53 137-53 189 0" />
        </g>

        <g className="stop-marker" transform="translate(250 332)">
          <circle r="24" />
          <path d="M-9-9l18 18M9-9L-9 9" />
          <text x="0" y="45">정지 판단</text>
        </g>

        <g className="path-label" transform="translate(445 230)">
          <rect x="-54" y="-19" width="108" height="38" rx="19" />
          <text x="0" y="5">안전한 우회</text>
        </g>

        <g className="path-label path-label--caution" transform="translate(136 407)">
          <rect x="-45" y="-19" width="90" height="38" rx="19" />
          <text x="0" y="5">먼저 감속</text>
        </g>
      </svg>
    </figure>
  )
}
