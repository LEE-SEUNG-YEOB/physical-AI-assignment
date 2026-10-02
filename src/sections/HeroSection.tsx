import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'

export function HeroSection() {
  return (
    <section className="hero section" id="intro" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <RevealOnScroll className="hero__copy">
          <p className="eyebrow">PHYSICAL AI SMART WHEELCHAIR</p>
          <h1 id="hero-title" tabIndex={-1}>
            <span className="title-line">목적지를 선택하면,</span>
            <span className="title-line">이동 판단을 돕습니다</span>
          </h1>
          <p className="hero__description">
            모두길은 주변과 통과 조건을 살펴 감속, 정지와 우회로 연결하는 자율주행 스마트휠체어 제안입니다.
          </p>
          <div className="hero__actions">
            <Link className="primary-link" to="/#connected">
              서비스 구조 보기 <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="secondary-link" to="/journey">
              이용 과정 보기 <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
