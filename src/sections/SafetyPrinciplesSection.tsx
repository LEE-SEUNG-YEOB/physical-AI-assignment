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
            title="불확실할 때는 멈추고, 결정권은 사용자에게 둡니다"
            description="모두길은 이동 편의보다 안전과 자기결정권을 먼저 고려하며, 필요한 순간에만 개입하는 보조 서비스를 지향합니다."
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
