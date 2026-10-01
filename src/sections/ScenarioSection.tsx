import { useState } from 'react'
import { JourneyScenarioGraphic } from '../components/graphics/JourneyScenarioGraphic'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { scenarioSteps } from '../data/content'

export function ScenarioSection() {
  const [activeStep, setActiveStep] = useState(0)
  const selectedStep = scenarioSteps[activeStep]

  return (
    <section className="section section--cream" id="scenario" aria-labelledby="scenario-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="scenario-title"
            eyebrow="USER JOURNEY"
            titleLines={['공원 입구에서 복지관까지', '여섯 단계의 이동']}
            description="장소·발생 상황·판단 정보·행동을 단계별로 확인합니다. 실제 운행 기록이나 실시간 지도 화면이 아닌 고정 예시입니다."
          />
        </RevealOnScroll>
        <RevealOnScroll className="scenario-note">
          <strong>약 700m 생활권 보행 구역을 가정한 서비스 동작 예시입니다.</strong>
          <span>실제 주행 기록이나 정해진 소요 시간이 아니며 일반 차도와 자율 횡단은 포함하지 않습니다.</span>
        </RevealOnScroll>
        <div className="scenario-explorer">
          <div className="scenario-selector" role="group" aria-label="이동 단계 선택">
            {scenarioSteps.map((step, index) => (
              <button
                type="button"
                aria-current={activeStep === index ? 'location' : undefined}
                aria-controls="scenario-detail"
                onClick={() => setActiveStep(index)}
                key={step.number}
              >
                <span>{step.number}</span>
                <strong>{step.label}</strong>
                {activeStep === index && <small>현재 단계</small>}
              </button>
            ))}
          </div>
          <div className="scenario-stage-card">
            <div className="scenario-explorer__visual">
              <JourneyScenarioGraphic activeStep={activeStep} />
            </div>
            <article className="scenario-detail" id="scenario-detail" aria-live="polite" aria-atomic="true">
              <header>
                <p className="journey-item__place">{selectedStep.number} · {selectedStep.place}</p>
                <h3>{selectedStep.situation}</h3>
              </header>
              <dl className="journey-item__details">
                <div><dt>무엇을 확인하나요?</dt><dd>{selectedStep.checks}</dd></div>
                <div><dt>휠체어는 어떻게 움직이나요?</dt><dd>{selectedStep.action}</dd></div>
              </dl>
            </article>
          </div>
          <aside className="battery-response" aria-labelledby="battery-response-title">
            <div className="battery-response__heading">
              <p className="eyebrow">BATTERY RESPONSE</p>
              <h3 id="battery-response-title">모든 이동 단계에 적용되는 배터리 대응</h3>
            </div>
            <ol>
              <li><span>01</span><div><strong>주행 여유 재확인</strong><p>목적지와 우회 경로를 이동할 수 있는 잔량인지 확인합니다.</p></div></li>
              <li><span>02</span><div><strong>충전 거점 경유 제안</strong><p>도달 가능한 호환 충전 거점이 있으면 경유 경로를 제안합니다.</p></div></li>
              <li><span>03</span><div><strong>도달할 수 없으면 안전 정지</strong><p>안전한 곳에 멈추고 도움 요청 방법을 안내합니다.</p></div></li>
            </ol>
            <p className="battery-response__note">충전 케이블은 이용자 또는 시설 직원이 제조사 승인 유선 충전기에 연결합니다.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
