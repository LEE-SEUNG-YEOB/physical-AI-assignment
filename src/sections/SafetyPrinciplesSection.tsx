import { InfoCard } from '../components/ui/InfoCard'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { principles } from '../data/content'

export function SafetyPrinciplesSection() {
  return (
    <section className="section section--cream" id="principles" aria-labelledby="principles-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="principles-title"
            eyebrow="SAFETY PRINCIPLES"
            titleLines={['불확실할 때는 멈추고,', '결정권은 사용자에게 둡니다']}
            description="외부 정보는 경로 판단을 보완하지만 현장 센서의 정지 판단을 대신하지 않습니다. 안전과 사용자 제어권을 먼저 둡니다."
          />
        </RevealOnScroll>
        <div className="card-grid card-grid--four">
          {principles.map((principle, index) => (
            <RevealOnScroll delay={(index % 4) * 60} key={principle.title}>
              <InfoCard icon={principle.icon} title={principle.title} description={principle.description} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
