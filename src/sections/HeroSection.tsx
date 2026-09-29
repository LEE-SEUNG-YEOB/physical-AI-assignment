import { ArrowDown, ArrowRight } from 'lucide-react'
import { RouteJourneyGraphic } from '../components/graphics/RouteJourneyGraphic'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'

export function HeroSection() {
  return (
    <section className="hero section" id="intro" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <RevealOnScroll className="hero__copy">
          <p className="eyebrow">PHYSICAL AI MOBILITY SERVICE</p>
          <h1 id="hero-title">도시가 먼저 보고,<br />AI가 함께 걷는<br />이동 지원 서비스</h1>
          <p className="hero__description">
            모두길은 보도와 횡단보도, 공공시설을 하나의 이동 경험으로 연결합니다.
            위험 인식을 감속·정지·우회 같은 실제 행동으로 잇는 도시형 Physical AI 서비스 기획입니다.
          </p>
          <div className="hero__actions">
            <a className="text-link" href="#safety-process">
              서비스 작동 방식 보기 <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="scroll-cue" href="#problem">
              아래로 살펴보기 <ArrowDown aria-hidden="true" size={18} />
            </a>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="hero__visual" delay={100}>
          <RouteJourneyGraphic />
        </RevealOnScroll>
      </div>
    </section>
  )
}
