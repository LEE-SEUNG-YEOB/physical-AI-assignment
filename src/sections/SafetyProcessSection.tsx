import { SafetyMotionGraphic } from '../components/graphics/SafetyMotionGraphic'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StepTimeline } from '../components/ui/StepTimeline'
import { safetySteps } from '../data/content'

export function SafetyProcessSection() {
  return (
    <section className="section section--dark safety-process" id="safety-process" aria-labelledby="safety-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="safety-title"
            titleLines={['인식한 순간부터', '조건을 확인한 재개까지']}
            description="감속 후 통과 가능하면 낮은 속도로 회피하고, 불확실하면 정지합니다. 모든 정지 상태가 자동으로 재개되는 것은 아닙니다."
              inverse
          />
        </RevealOnScroll>
        <div className="safety-layout">
          <RevealOnScroll className="safety-layout__visual">
            <SafetyMotionGraphic />
          </RevealOnScroll>
          <RevealOnScroll className="safety-layout__steps" delay={80}>
            <StepTimeline steps={safetySteps} inverse compact />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
