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
            titleLines={['이동의 빈틈을 세 가지', '방식으로 잇습니다']}
            description="모두길의 차이는 센서 하나보다, 분리된 장소와 정보를 실제 이동 행동으로 연결하는 서비스 구조에 있습니다."
          />
        </RevealOnScroll>
        <div className="difference-point-grid">
          {differencePoints.map((point, index) => (
            <RevealOnScroll delay={index * 70} key={point.number}>
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
