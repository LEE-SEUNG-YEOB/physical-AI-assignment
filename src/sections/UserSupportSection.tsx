import { Icon } from '../components/icons/Icon'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { supportProfiles } from '../data/content'

export function UserSupportSection() {
  return (
    <section className="section" id="support" aria-labelledby="support-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="support-title"
            titleLines={['휠체어 이용자를 중심으로', '필요한 이동을 지원합니다']}
            description="휠체어 이용자를 중심으로, 이용자의 이동 조건에 맞춰 입력과 안내 방식을 조정합니다."
          />
        </RevealOnScroll>
        <div className="support-grid">
          {supportProfiles.map((profile, index) => (
            <RevealOnScroll className={index === 0 ? 'support-cell support-cell--lead' : 'support-cell'} delay={(index % 4) * 60} key={profile.title}>
              <article className="support-card">
                <span className="support-card__icon"><Icon name={profile.icon} /></span>
                <p className="support-card__priority">{profile.priority}</p>
                <h3>{profile.title}</h3>
                <p>{profile.focus}</p>
                <p className="support-card__interface">{profile.interface}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="support-operation-area">
          <p className="support-operation-area__label">운행 범위</p>
          <h3>사전 조사된 보행 공간에서만 운행합니다</h3>
          <div className="support-operation-area__grid">
            <article>
              <h4>포함 공간</h4>
              <p>보도, 공원 산책로, 보행자 전용도로와 공공시설 접근로처럼 사전에 통과 조건을 확인한 공간입니다.</p>
            </article>
            <article>
              <h4>초기 운행 조건</h4>
              <p>주간·건조 노면·저혼잡 구간부터 시작하며, 통과 폭과 경사·턱·정차 공간을 확인한 범위에서만 운행합니다.</p>
            </article>
            <article>
              <h4>제외 공간과 경계 동작</h4>
              <p>일반 차도, 자율 횡단보도 통과, 계단, 지하철 승강장과 지도·통과 조건이 확인되지 않은 공간은 제외합니다. 경계에서는 정지하고 자율주행을 종료하며, 차도나 계단으로 강제 우회하지 않습니다.</p>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
