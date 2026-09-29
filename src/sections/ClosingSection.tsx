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
          <p>모두길은 이미 존재하는 이동 기기와 도시·시설 정보를 연결해 보도에서 목적지 안까지 이어지는 이동을 제안합니다.</p>
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
