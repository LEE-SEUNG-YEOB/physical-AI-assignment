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
            titleLines={['각 서비스의 강점 위에', '연결의 관점을 더합니다']}
            description="유사 사례는 각자의 환경에서 중요한 이동 지원을 제공합니다. 모두길은 이를 대체하기보다, 서로 분리된 장치와 공간을 연결하는 서비스 구조를 제안합니다."
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
                  <span>모두길이 연결하는 범위</span>
                  <p>{service.extension}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="comparison-note">
          <p>기획서에 정리된 사례를 기준으로 서비스 범위를 비교했습니다. 비교 목적은 기술의 우열을 정하는 것이 아니라 모두길이 제안하는 연결 범위를 설명하는 데 있습니다.</p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
