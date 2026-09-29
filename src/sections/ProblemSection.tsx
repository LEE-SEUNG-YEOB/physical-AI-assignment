import { ArrowRight } from 'lucide-react'
import { problemCards } from '../data/content'
import { Icon } from '../components/icons/Icon'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ProblemSection() {
  return (
    <section className="section section--cream" id="problem" aria-labelledby="problem-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="problem-title"
            eyebrow="WHY MODUGIL"
            title="같은 길도 누구에게나 같은 길은 아닙니다"
            description="지도에 표시된 길과 사용자가 실제로 통과할 수 있는 길은 다를 수 있습니다. 모두길은 장소마다 끊긴 정보를 하나의 안전 행동으로 연결하려 합니다."
          />
        </RevealOnScroll>

        <div className="card-grid card-grid--three problem-grid">
          {problemCards.map((card, index) => (
            <RevealOnScroll delay={index * 70} key={card.title}>
              <article className="problem-card">
                <span className="problem-card__icon"><Icon name={card.icon} /></span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="before-after">
          <div className="before-after__item">
            <span>BEFORE</span>
            <strong>“앞에 장애물이 있습니다.”</strong>
            <p>정보를 받은 뒤 사용자가 다시 위험과 회피 방법을 판단합니다.</p>
          </div>
          <ArrowRight className="before-after__arrow" aria-hidden="true" />
          <div className="before-after__item before-after__item--after">
            <span>MODUGIL</span>
            <strong>“통과 공간을 확인하고 안전한 경로로 이동합니다.”</strong>
            <p>환경을 이해한 뒤 감속, 정지와 우회 행동으로 연결합니다.</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
