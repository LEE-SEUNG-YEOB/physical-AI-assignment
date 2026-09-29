import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { scenarioSteps } from '../data/content'

export function ScenarioSection() {
  return (
    <section className="section section--cream" id="scenario" aria-labelledby="scenario-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="scenario-title"
            eyebrow="USER JOURNEY"
            titleLines={['공원에서 주민센터까지', '이어지는 이동']}
            description="시각장애인 사용자의 대표 이동 상황을 통해 실외 출발부터 시설 내부 목적지까지 이어지는 지원 과정을 살펴봅니다."
          />
        </RevealOnScroll>
        <RevealOnScroll className="scenario-note">
          <strong>약 15분 이동은 기획서의 대표 예시입니다.</strong>
          <span>실제 이동 시간은 경로, 주변 상황과 사용자의 이동 조건에 따라 달라집니다.</span>
        </RevealOnScroll>
        <ol className="journey-list">
          {scenarioSteps.map((step, index) => (
            <li key={step.number}>
              <RevealOnScroll className="journey-item" delay={(index % 2) * 70}>
                <div className="journey-item__number">{step.number}</div>
                <div className="journey-item__content">
                  <p className="journey-item__place">{step.place}</p>
                  <h3>{step.situation}</h3>
                  <dl className="journey-item__details">
                    <div><dt>AI가 확인</dt><dd>{step.checks}</dd></div>
                    <div><dt>실제 행동</dt><dd>{step.action}</dd></div>
                  </dl>
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ol>
        <RevealOnScroll className="experience-summary">
          <p><strong>덜 멈춥니다</strong><span>매번 주변에 묻고 확인하는 일을 줄입니다.</span></p>
          <p><strong>판단 부담을 줄입니다</strong><span>통과 가능성과 횡단 조건을 함께 살핍니다.</span></p>
          <p><strong>이동이 이어집니다</strong><span>실외에서 시설 내부 목적지까지 연결합니다.</span></p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
