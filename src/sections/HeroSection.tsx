import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RouteJourneyGraphic } from '../components/graphics/RouteJourneyGraphic'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'

export function HeroSection() {
  return (
    <section className="hero section" id="intro" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <RevealOnScroll className="hero__copy">
          <p className="eyebrow">PHYSICAL AI SMART WHEELCHAIR</p>
          <h1 id="hero-title" tabIndex={-1}>
            <span className="title-line">목적지를 선택하면,</span>
            <span className="title-line">이동의 판단을 돕는</span>
            <span className="title-line">휠체어</span>
          </h1>
          <p className="hero__description">
            모두길은 보도와 공공시설 접근로에서 주변 환경을 살피고, 통과할 수 있는 길을 선택하는 자율주행 스마트휠체어 아이디어입니다.
            자체 센서와 공사·차단 정보를 함께 활용해 감속·정지·우회로 이어지는 이동을 제안합니다.
          </p>
          <div className="hero__actions">
            <Link className="text-link" to="/features">
              주요 기능 보기 <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="scroll-cue" to="/journey">
              이용 과정 보기 <ArrowDown aria-hidden="true" size={18} />
            </Link>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="hero__visual" delay={100}>
          <RouteJourneyGraphic />
        </RevealOnScroll>
      </div>
    </section>
  )
}
