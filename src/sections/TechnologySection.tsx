import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TechnologyCard } from '../components/ui/TechnologyCard'
import { technologies } from '../data/content'

export function TechnologySection() {
  return (
    <section className="section section--dark" id="technology" aria-labelledby="technology-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="technology-title"
            eyebrow="CORE TECHNOLOGY"
            titleLines={['환경을 이해하고', '안전한 행동으로 연결합니다']}
            description="각 기술은 따로 작동하지 않습니다. 환경 감지부터 공간 판단과 이동 제어까지 하나의 흐름으로 연결됩니다."
            inverse
          />
        </RevealOnScroll>
        <div className="card-grid card-grid--three technology-grid">
          {technologies.map((technology, index) => (
            <RevealOnScroll delay={(index % 3) * 70} key={technology.eyebrow}>
              <TechnologyCard technology={technology} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
