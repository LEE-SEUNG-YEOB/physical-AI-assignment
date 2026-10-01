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
            titleLines={['다섯 기능이 판단을', '실제 행동으로 바꿉니다']}
            description="기술명보다 사용자가 마주치는 상황, 휠체어가 확인하는 정보와 실제 행동의 순서로 설명합니다."
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
