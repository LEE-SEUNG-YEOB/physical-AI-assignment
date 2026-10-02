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
            titleLines={['다섯 기능이 판단을', '실제 행동으로 바꿉니다']}
            description="주변을 확인하고 통과 조건을 판단해 감속·회피·정지로 이어집니다."
          />
        </RevealOnScroll>
        <div className="features-grid">
          {features.map((feature, index) => (
            <RevealOnScroll className={index === 0 ? 'feature-cell feature-cell--lead' : 'feature-cell'} delay={(index % 3) * 70} key={feature.number}>
              <FeatureCard feature={feature} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
