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
            eyebrow="ONE WHEELCHAIR SYSTEM"
            titleLines={['기체의 판단과 필요한 정보가', '목적지 이동으로 이어집니다']}
            description="현장의 안전은 기체가 최종 확인하고, 앞 구간의 변화와 접근성 정보는 경로 판단을 보완합니다."
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
