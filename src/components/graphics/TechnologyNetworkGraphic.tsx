import { useId, type CSSProperties } from 'react'

const nodes = [
  ['감지', 300, 62],
  ['객체 이해', 475, 135],
  ['이동 예측', 510, 306],
  ['이동 제어', 300, 382],
  ['경로 계획', 90, 306],
  ['공간 판단', 125, 135],
] as const

export function TechnologyNetworkGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <svg className="technology-network-graphic" viewBox="0 0 600 440" role="img" aria-labelledby={`${titleId} ${descId}`}>
      <title id={titleId}>안전 판단을 중심으로 연결된 여섯 기술</title>
      <desc id={descId}>감지, 객체 이해, 이동 예측, 이동 제어, 경로 계획과 공간 판단이 중앙 안전 판단 노드에 연결된 구조</desc>
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
        <text y="-5">SAFE</text>
        <text y="20">판단</text>
      </g>
    </svg>
  )
}
