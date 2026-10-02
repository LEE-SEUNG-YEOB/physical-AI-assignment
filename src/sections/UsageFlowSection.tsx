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
            titleLines={['출발 전에 확인하고,', '입구 앞에서 멈춥니다']}
            description="물리 정지 입력과 배터리부터 확인하고, 접근 가능한 입구 앞 지정 지점에서 자율주행을 종료합니다."
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <StepTimeline steps={usageSteps} />
        </RevealOnScroll>
      </div>
    </section>
  )
}
