import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RouteJourneyGraphic } from '../components/graphics/RouteJourneyGraphic'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'

export function ClosingSection() {
  return (
    <section className="section section--dark closing" id="closing" aria-labelledby="closing-title">
      <div className="container closing__grid">
        <RevealOnScroll className="closing__copy">
          <p className="eyebrow">ONE CONNECTED JOURNEY</p>
          <h2 id="closing-title">
            <span className="title-line">도시 전체를 하나의</span>
            <span className="title-line">접근성 공간으로</span>
          </h2>
          <p>모두길은 제한된 구역의 실증에서 안전 정지, 경로 완주와 연속 안내를 먼저 확인하고, 검증 결과에 따라 적용 범위를 넓혀가는 방향을 제안합니다.</p>
          <Link className="text-link text-link--inverse" to="/features#safety-process">
            안전 행동 과정 다시 보기 <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </RevealOnScroll>
        <RevealOnScroll className="closing__visual" delay={100}>
          <RouteJourneyGraphic decorative />
        </RevealOnScroll>
      </div>
    </section>
  )
}
