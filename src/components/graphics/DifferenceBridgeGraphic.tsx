import { useId } from 'react'

export function DifferenceBridgeGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <svg className="difference-bridge-graphic" viewBox="0 0 760 390" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby={`${titleId} ${descId}`} focusable="false">
      <title id={titleId}>목적지 도착으로 이어지는 모두길의 네 가지 차별점</title>
      <desc id={descId}>목적지 자동 이동, 기체 통과 판단, 외부와 현장 대응, 지도와 배터리 및 충전 정보가 도착 가능성으로 연결되는 개념도</desc>

      <path className="difference-bridge-graphic__base" d="M80 265H680" />
      <path className="difference-bridge-graphic__link" d="M105 265C180 160 285 128 380 128S575 160 655 265" />

      <g className="difference-bridge-node" transform="translate(150 260)">
        <circle r="48" />
        <path d="M-15 8h30M-9 8v-27h18V8M-20 20h40M0-19v-13" />
        <text y="82">목적지 자동 이동</text>
      </g>
      <g className="difference-bridge-node difference-bridge-node--city" transform="translate(315 150)">
        <circle r="48" />
        <path d="M-27 20h54M-21 20v-48h18v48M4 20v-32h17v32M-13-16h4M-13-6h4M10-3h5M10 7h5" />
        <text y="82">기체 통과 판단</text>
      </g>
      <g className="difference-bridge-node" transform="translate(465 150)">
        <circle r="48" />
        <path d="M-24 20v-48h48v48M-12 20V3h24v17M-14-15h6M8-15h6" />
        <text y="82">외부·현장 대응</text>
      </g>
      <g className="difference-bridge-node" transform="translate(610 260)">
        <circle r="48" />
        <path d="M-20 12h40M-12 12v-28h24v28M-5-4h10M0-16v-12" />
        <text y="82">지도·배터리·충전</text>
      </g>

      <g className="difference-bridge-graphic__message" transform="translate(374 70)">
        <rect x="-134" y="-24" width="268" height="48" rx="24" />
        <text y="5">실제로 도착할 수 있는 길</text>
      </g>
    </svg>
  )
}
