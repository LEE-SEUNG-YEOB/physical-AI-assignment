import { useId } from 'react'

export function DifferenceBridgeGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <svg className="difference-bridge-graphic" viewBox="0 0 760 390" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby={`${titleId} ${descId}`} focusable="false">
      <title id={titleId}>개인 기기와 도시, 공공시설을 잇는 모두길 연결 구조</title>
      <desc id={descId}>서로 떨어진 개인 이동 보조, 도시 구간, 공공시설을 주황색 경로 하나로 연결한 개념도</desc>

      <path className="difference-bridge-graphic__base" d="M75 260H685" />
      <path className="difference-bridge-graphic__gap" d="M75 260H220M278 260H470M528 260H685" />
      <path className="difference-bridge-graphic__link" d="M150 260C215 260 218 192 278 192H470C530 192 535 260 610 260" />

      <g className="difference-bridge-node" transform="translate(150 260)">
        <circle r="48" />
        <path d="M-15 8h30M-9 8v-27h18V8M-20 20h40M0-19v-13" />
        <text y="82">개인 기기</text>
      </g>
      <g className="difference-bridge-node difference-bridge-node--city" transform="translate(374 192)">
        <circle r="58" />
        <path d="M-27 20h54M-21 20v-48h18v48M4 20v-32h17v32M-13-16h4M-13-6h4M10-3h5M10 7h5" />
        <text y="92">도시 구간</text>
      </g>
      <g className="difference-bridge-node" transform="translate(610 260)">
        <circle r="48" />
        <path d="M-24 20v-48h48v48M-12 20V3h24v17M-14-15h6M8-15h6" />
        <text y="82">공공시설</text>
      </g>

      <g className="difference-bridge-graphic__message" transform="translate(374 70)">
        <rect x="-134" y="-24" width="268" height="48" rx="24" />
        <text y="5">끊긴 이동 구간을 하나의 흐름으로</text>
      </g>
    </svg>
  )
}
