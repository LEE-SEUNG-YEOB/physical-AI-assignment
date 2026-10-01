import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { relatedServices } from '../data/difference'

export function RelatedServicesSection() {
  return (
    <section className="section section--cream" id="related-services" aria-labelledby="related-services-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="related-services-title"
            eyebrow="RELATED SERVICES"
            titleLines={['이미 존재하는 기술과', '적용 범위를 구분합니다']}
            description="일반 전동휠체어, 시설 내 자율 이동과 연구 사례의 범위를 넓혀 해석하지 않고 모두길의 기획 초점을 비교합니다."
          />
        </RevealOnScroll>
        <div className="service-comparison" role="list">
          {relatedServices.map((service, index) => (
            <RevealOnScroll delay={(index % 2) * 60} key={service.name}>
              <article className="service-comparison__row" role="listitem">
                <h3>{service.name}</h3>
                <div>
                  <span>주된 영역</span>
                  <p>{service.focus}</p>
                </div>
                <div>
                  <span>모두길의 기획 초점</span>
                  <p>{service.extension}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="comparison-note">
          <p>세계 최초나 더 안전·정확하다는 우위를 주장하지 않습니다. 연구와 시설 내 서비스의 적용 결과를 일반 실외 도심의 검증으로 확대하지 않습니다.</p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
