import { useId } from 'react'

type GraphicVariant = 'features' | 'journey' | 'technology' | 'impact'

const labels: Record<GraphicVariant, { title: string; description: string }> = {
  features: {
    title: '감지에서 안전 행동으로 이어지는 흐름',
    description: '센서가 사람을 발견한 뒤 감속, 정지와 우회로 이어지는 개념도',
  },
  journey: {
    title: '출발부터 목적지까지 이어지는 이동',
    description: '공원, 횡단보도와 공공시설을 하나의 경로로 연결한 개념도',
  },
  technology: {
    title: '여러 기술이 연결되는 판단 구조',
    description: '환경 감지, 공간 판단, 경로 계획과 이동 제어가 연결된 개념도',
  },
  impact: {
    title: '개인에서 도시로 이어지는 접근성 변화',
    description: '이용자, 도시와 공공시설로 접근성 효과가 확장되는 개념도',
  },
}

export function PageHeroGraphic({ variant }: { variant: GraphicVariant }) {
  const titleId = useId()
  const descId = useId()
  const copy = labels[variant]

  return (
    <svg className={`page-hero-graphic page-hero-graphic--${variant}`} viewBox="0 0 560 400" role="img" aria-labelledby={`${titleId} ${descId}`}>
      <title id={titleId}>{copy.title}</title>
      <desc id={descId}>{copy.description}</desc>
      <rect className="page-hero-graphic__surface" x="20" y="20" width="520" height="360" rx="28" />
      <path className="page-hero-graphic__route" d="M72 286C143 286 147 198 219 198S300 278 364 217S419 112 488 112" />
      <path className="page-hero-graphic__echo" d="M73 316C157 316 166 238 229 238S310 306 382 248S432 151 490 151" />
      <g className="page-hero-graphic__nodes">
        <circle cx="72" cy="286" r="17" />
        <circle cx="219" cy="198" r="17" />
        <circle cx="364" cy="217" r="17" />
        <circle cx="488" cy="112" r="17" />
      </g>
      <g className="page-hero-graphic__signal">
        <path d="M202 170c11-12 25-12 36 0" />
        <path d="M191 158c18-21 41-21 59 0" />
      </g>
      <text x="55" y="72">{variant.toUpperCase()}</text>
      <text className="page-hero-graphic__caption" x="55" y="99">MODUGIL CONNECTED FLOW</text>
    </svg>
  )
}
