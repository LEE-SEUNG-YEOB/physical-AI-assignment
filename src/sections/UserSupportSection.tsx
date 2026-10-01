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
            eyebrow="USERS AND OPERATION AREA"
            titleLines={['휠체어 이용자를 중심으로', '필요한 이동을 지원합니다']}
            description="1차·2차·확장 대상을 구분하고, 각 이용자가 필요한 입력과 안내 방식을 기획서 기준으로 설명합니다."
          />
        </RevealOnScroll>
        <div className="card-grid support-grid">
          {supportProfiles.map((profile, index) => (
            <RevealOnScroll delay={(index % 4) * 60} key={profile.title}>
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
          <p className="eyebrow">OPERATION AREA</p>
          <h3>사전 조사된 보행 공간에서만 운행합니다</h3>
          <p>보도, 공원 산책로, 보행자 전용도로와 공공시설 접근로를 대상으로 하며, 초기에는 주간·건조 노면·저혼잡 구간부터 제안합니다.</p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
