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
            description="기존 전동휠체어와 자율 이동 사례를 바탕으로, 모두길이 연결하려는 실외 보행 경험을 살펴봅니다."
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
          <p>모두길은 기존 자율주행 기술을 활용해 사전 조사된 실외 보행 구역의 접근성과 변화하는 통행 조건을 연결하는 서비스 제안입니다.</p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
