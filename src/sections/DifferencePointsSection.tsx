import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { differencePoints } from '../data/difference'

export function DifferencePointsSection() {
  return (
    <section className="section" id="difference-points" aria-labelledby="difference-points-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="difference-points-title"
            eyebrow="WHAT MAKES IT DIFFERENT"
            titleLines={['도착 가능성을 네 가지', '관점에서 연결합니다']}
            description="새로운 센서 하나보다 목적지 이동에 필요한 판단과 운영 정보를 한 경험으로 묶는 데 초점을 둡니다."
          />
        </RevealOnScroll>
        <div className="difference-point-grid">
          {differencePoints.map((point, index) => (
            <RevealOnScroll className="difference-cell" delay={index * 70} key={point.number}>
              <article className="difference-point">
                <span>{point.number}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
