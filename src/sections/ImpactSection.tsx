import { InfoCard } from '../components/ui/InfoCard'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { impacts } from '../data/content'

export function ImpactSection() {
  return (
    <section className="section" id="impact" aria-labelledby="impact-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="impact-title"
            eyebrow="EXPECTED IMPACT"
            titleLines={['사용자와 지원자에게', '기대하는 변화']}
            description="성과를 이미 달성한 것처럼 말하지 않고, 목적지 이동과 운영 과정에서 기대하는 변화를 이용자별로 설명합니다."
          />
        </RevealOnScroll>
        <div className="card-grid card-grid--four">
          {impacts.map((impact, index) => (
            <RevealOnScroll delay={(index % 4) * 60} key={impact.title}>
              <InfoCard icon={impact.icon} title={impact.title} description={impact.description} />
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="impact-note">
          <p><strong>운영 원칙</strong></p>
          <p>안전 정지와 사용자 제어권을 먼저 두고, 확인된 운행 범위와 정보의 최신성을 지킵니다. 배터리·충전과 필요한 도움까지 이동의 연속성으로 관리합니다.</p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
