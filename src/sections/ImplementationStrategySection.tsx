import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { implementationStages } from '../data/difference'

export function ImplementationStrategySection() {
  return (
    <section className="section section--dark" id="implementation-strategy" aria-labelledby="implementation-strategy-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="implementation-strategy-title"
            eyebrow="STEP BY STEP"
            titleLines={['작은 구간에서 확인하고', '생활권으로 넓힙니다']}
            description="모두길은 기획 단계의 서비스 제안입니다. 제한된 구간에서 안전과 이동 연속성을 먼저 확인하고, 검증 결과에 따라 적용 범위를 단계적으로 확장합니다."
            inverse
          />
        </RevealOnScroll>
        <div className="strategy-track" role="list">
          {implementationStages.map((stage, index) => (
            <RevealOnScroll delay={index * 80} key={stage.number}>
              <article className="strategy-track__item" role="listitem">
                <span className="strategy-track__number">{stage.number}</span>
                <p className="strategy-track__label">{stage.label}</p>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
