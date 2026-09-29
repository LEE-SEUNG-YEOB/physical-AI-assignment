import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StepTimeline } from '../components/ui/StepTimeline'
import { usageSteps } from '../data/content'

export function UsageFlowSection() {
  return (
    <section className="section" id="usage" aria-labelledby="usage-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="usage-title"
            eyebrow="HOW IT WORKS"
            title="목적지를 정하면 이동 지원이 시작됩니다"
            description="사용자가 목적지와 안내 방식을 고르면 접근 가능한 경로를 찾고, 상황 변화에 맞춰 이동을 이어갑니다."
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <StepTimeline steps={usageSteps} />
        </RevealOnScroll>
      </div>
    </section>
  )
}
