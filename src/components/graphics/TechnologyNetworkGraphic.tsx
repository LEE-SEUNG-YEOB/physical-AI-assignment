import { useId, type CSSProperties } from 'react'

const nodes = [
  ['카메라·LiDAR', 300, 62],
  ['객체·거리', 475, 135],
  ['위치 추정', 510, 306],
  ['안전 제어', 300, 382],
  ['접근성 경로', 90, 306],
  ['외부 위험', 125, 135],
] as const

export function TechnologyNetworkGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <svg className="technology-network-graphic" viewBox="0 0 600 440" role="img" aria-labelledby={`${titleId} ${descId}`} focusable="false">
      <title id={titleId}>센서와 지도 정보를 실제 이동 제어로 연결하는 기술 구조</title>
      <desc id={descId}>카메라와 LiDAR, 객체와 거리, 위치 추정, 접근성 경로, 외부 위험 정보가 중앙의 안전 판단을 거쳐 이동 제어로 연결된다</desc>
      <circle className="technology-network-graphic__orbit" cx="300" cy="220" r="162" />
      {nodes.map(([label, x, y], index) => (
        <g className="technology-node" transform={`translate(${x} ${y})`} key={label} style={{ '--node-delay': `${index * 180}ms` } as CSSProperties}>
          <path className="technology-node__line" d={`M${300 - x} ${220 - y}L0 0`} />
          <circle r="42" />
          <text y="5">{label}</text>
        </g>
      ))}
      <g className="technology-core" transform="translate(300 220)">
        <circle r="72" />
        <circle r="54" />
        <text y="-5">안전</text>
        <text y="20">판단·행동</text>
      </g>
    </svg>
  )
}
