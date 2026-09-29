import { SafetyMotionGraphic } from '../components/graphics/SafetyMotionGraphic'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StepTimeline } from '../components/ui/StepTimeline'
import { safetySteps } from '../data/content'

export function SafetyProcessSection() {
  return (
    <section className="section section--dark" id="safety-process" aria-labelledby="safety-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="safety-title"
            eyebrow="SAFE MOTION CONTROL"
            title="사람을 발견한 순간부터 안전한 이동까지"
            description="모두길은 사람을 발견하면 먼저 속도를 낮추고, 거리와 공간을 확인한 뒤 정지하거나 우회합니다. 판단이 불확실할 때는 이동을 강행하지 않습니다."
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
