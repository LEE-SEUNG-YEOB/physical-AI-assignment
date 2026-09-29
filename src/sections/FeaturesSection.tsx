import { FeatureCard } from '../components/ui/FeatureCard'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { features } from '../data/content'

export function FeaturesSection() {
  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="features-title"
            eyebrow="CORE FEATURES"
            title="알림에서 실제 행동으로 이어집니다"
            description="주변을 인식하고 통과 가능성을 판단한 뒤, 이동이 끝나는 순간까지 필요한 행동을 연결합니다."
          />
        </RevealOnScroll>
        <div className="card-grid card-grid--three">
          {features.map((feature, index) => (
            <RevealOnScroll delay={(index % 3) * 70} key={feature.number}>
              <FeatureCard feature={feature} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
