import { MobilityNetworkGraphic } from '../components/graphics/MobilityNetworkGraphic'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { connectedLayers } from '../data/content'

export function ConnectedServiceSection() {
  return (
    <section className="section" id="connected" aria-labelledby="connected-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            id="connected-title"
            eyebrow="CONNECTED MOBILITY"
            titleLines={['개인과 도시, 시설이 함께', '이동을 돕습니다']}
            description="사용자 곁의 기기, 도시 인프라와 공공시설 정보가 하나의 이동 과정 안에서 협력합니다."
          />
        </RevealOnScroll>
        <RevealOnScroll className="network-visual">
          <MobilityNetworkGraphic />
        </RevealOnScroll>
        <div className="connected-list">
          {connectedLayers.map((layer, index) => (
            <RevealOnScroll delay={index * 70} key={layer.number}>
              <article className="connected-item">
                <span>{layer.number}</span>
                <div><h3>{layer.title}</h3><p>{layer.description}</p></div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
