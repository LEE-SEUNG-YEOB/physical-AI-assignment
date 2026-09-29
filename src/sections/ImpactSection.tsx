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
            title="도시 이동의 끊김을 줄이는 변화"
            description="모두길은 이용자의 판단 부담을 줄이고, 도시와 시설이 접근성 문제를 더 잘 파악할 수 있도록 돕는 것을 목표로 합니다."
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
          <p><strong>향후 실증에서 확인할 항목</strong></p>
          <p>안전 정지, 장애물 회피, 접근 가능한 경로 완주, 실외부터 시설 내부까지의 연속 안내와 사용자 개입 경험을 확인합니다. 확인되지 않은 수치나 성과는 제시하지 않습니다.</p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
