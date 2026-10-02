import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RouteJourneyGraphic } from '../components/graphics/RouteJourneyGraphic'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'

export function ClosingSection() {
  return (
    <section className="section section--dark closing" id="closing" aria-labelledby="closing-title">
      <div className="container closing__grid">
        <RevealOnScroll className="closing__copy">
          <h2 id="closing-title">
            <span className="title-line">목적지를 고른 순간부터,</span>
            <span className="title-line">도착까지 이어지는 이동</span>
          </h2>
          <p>모두길은 사전 조사된 보행 공간에서 휠체어가 주변을 살피고 통과 가능한 길을 선택하도록 돕는 서비스 아이디어입니다. 완성된 제품이 아니라 독립적인 목적지 이동을 위한 제안입니다.</p>
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
