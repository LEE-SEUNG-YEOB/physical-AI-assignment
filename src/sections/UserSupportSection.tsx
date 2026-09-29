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
            eyebrow="PERSONALIZED SUPPORT"
            title="같은 기술도 사용자에 맞게 다르게 작동합니다"
            description="사용자의 이동 조건에 따라 더 중요하게 확인할 정보와 안내 방법을 달리합니다. 사용자는 언제든 보조 수준을 바꾸거나 종료할 수 있습니다."
          />
        </RevealOnScroll>
        <div className="card-grid card-grid--four">
          {supportProfiles.map((profile, index) => (
            <RevealOnScroll delay={(index % 4) * 60} key={profile.title}>
              <article className="support-card">
                <span className="support-card__icon"><Icon name={profile.icon} /></span>
                <h3>{profile.title}</h3>
                <p>{profile.focus}</p>
                <p className="support-card__interface">{profile.interface}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
