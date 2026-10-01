import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { operationModels } from '../data/difference'

export function OperationModelsSection() {
  return (
    <section className="section section--dark" id="operation-models" aria-labelledby="operation-models-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="operation-models-title"
            eyebrow="PROPOSED OPERATION MODELS"
            titleLines={['이용 환경에 맞는', '세 가지 운영 방식을 제안합니다']}
            description="아래 모델은 도입이나 협약이 완료된 현황이 아니라, 기체 점검·충전·접근성 정보 관리를 지속하기 위한 제안입니다."
            inverse
          />
        </RevealOnScroll>
        <div className="strategy-track" role="list">
          {operationModels.map((model, index) => (
            <RevealOnScroll delay={index * 80} key={model.number}>
              <article className="strategy-track__item" role="listitem">
                <span className="strategy-track__number">{model.number}</span>
                <p className="strategy-track__label">{model.label}</p>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
