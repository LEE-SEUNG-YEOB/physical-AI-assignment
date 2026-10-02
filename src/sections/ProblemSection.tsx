import { ArrowRight } from 'lucide-react'
import { problemCards } from '../data/content'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ProblemSection() {
  return (
    <section className="section section--cream" id="problem" aria-labelledby="problem-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="problem-title"
            titleLines={['같은 길도 누구에게나', '같은 길은 아닙니다']}
            description="지도에 표시된 길과 휠체어가 실제로 통과할 수 있는 길은 다를 수 있습니다. 모두길은 반복적인 조작과 판단 부담을 줄이는 이동을 제안합니다."
          />
        </RevealOnScroll>

        <ol className="problem-rail">
          {problemCards.map((card, index) => (
            <RevealOnScroll as="li" className="problem-card" delay={index * 70} key={card.title}>
              <span className="problem-card__number" aria-hidden="true">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </RevealOnScroll>
          ))}
        </ol>

        <RevealOnScroll className="before-after">
          <div className="before-after__item">
            <span>기존 이동</span>
            <strong>사용자가 폭과 방향을 판단합니다.</strong>
            <p>장애물과 턱을 확인하고 우회할 공간을 계산하며 조이스틱을 계속 조작합니다.</p>
          </div>
          <ArrowRight className="before-after__arrow" aria-hidden="true" />
          <div className="before-after__item before-after__item--after">
            <span>모두길</span>
            <strong>휠체어가 통과 조건을 판단합니다.</strong>
            <p>공간이 확인되면 감속·회피하고, 부족하거나 불확실하면 먼저 정지합니다.</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
