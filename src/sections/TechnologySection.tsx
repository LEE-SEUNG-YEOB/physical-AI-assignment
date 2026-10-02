import { useState, type KeyboardEvent } from 'react'
import { MapArchitectureGraphic } from '../components/graphics/MapArchitectureGraphic'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TechnologyCard } from '../components/ui/TechnologyCard'
import { technologies } from '../data/content'
import { chargingFlow, chargingHubs, technologyGroups } from '../data/technology'
import type { DataFlowStep } from '../types/content'

function DataFlow({ steps }: { steps: readonly DataFlowStep[] }) {
  return (
    <ol className="data-flow">
      {steps.map((step) => (
        <li key={step.number}>
          <span>{step.number}</span>
          <div><h3>{step.title}</h3><p>{step.description}</p></div>
        </li>
      ))}
    </ol>
  )
}

export function TechnologySection() {
  const [activeGroup, setActiveGroup] = useState<(typeof technologyGroups)[number]['id']>(technologyGroups[0].id)
  const selectedGroup = technologyGroups.find((group) => group.id === activeGroup) ?? technologyGroups[0]

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = technologyGroups.length - 1
    let nextIndex: number | null = null

    if (event.key === 'ArrowRight') nextIndex = index === lastIndex ? 0 : index + 1
    if (event.key === 'ArrowLeft') nextIndex = index === 0 ? lastIndex : index - 1
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = lastIndex
    if (nextIndex === null) return

    event.preventDefault()
    const nextGroup = technologyGroups[nextIndex]
    setActiveGroup(nextGroup.id)
    requestAnimationFrame(() => document.getElementById(`technology-tab-${nextGroup.id}`)?.focus())
  }

  return (
    <>
      <section className="section section--dark" id="technology" aria-labelledby="technology-title">
        <div className="container">
          <RevealOnScroll>
            <SectionHeading
              id="technology-title"
              titleLines={['어떤 정보를 얻고,', '어디에 쓰는지 설명합니다']}
              description="이 기술은 홍보 사이트에서 실행되는 기능이 아닙니다. 실제 기체에 통합할 후보와 제안 구조를 일반인이 이해할 수 있도록 정리했습니다."
              inverse
            />
          </RevealOnScroll>
          <div className="technology-grid">
            {technologies.map((technology, index) => (
              <RevealOnScroll className={index === 0 ? 'technology-cell technology-cell--lead' : 'technology-cell'} delay={(index % 3) * 70} key={technology.eyebrow}>
                <TechnologyCard technology={technology} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section technology-details" aria-labelledby="technology-details-title">
        <div className="container">
          <RevealOnScroll>
            <SectionHeading
              id="technology-details-title"
              titleLines={['후보와 한계를 함께', '확인할 수 있습니다']}
              description="각 항목을 펼치면 역할, 사용처와 한계를 함께 볼 수 있습니다. 부품의 존재가 전체 자율주행 시스템의 완성을 뜻하지는 않습니다."
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="technology-details__tabs" role="tablist" aria-label="기술 상세 범주">
              {technologyGroups.map((group, index) => (
                <button
                  type="button"
                  role="tab"
                  id={`technology-tab-${group.id}`}
                  aria-selected={selectedGroup.id === group.id}
                  aria-controls="technology-detail-panel"
                  tabIndex={selectedGroup.id === group.id ? 0 : -1}
                  onClick={() => setActiveGroup(group.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  key={group.id}
                >
                  {group.title}
                </button>
              ))}
            </div>
            <section className="technology-detail-group technology-detail-panel" id="technology-detail-panel" role="tabpanel" aria-labelledby={`technology-tab-${selectedGroup.id}`}>
              <h3 id={`${selectedGroup.id}-title`}>{selectedGroup.title}</h3>
              <p>{selectedGroup.description}</p>
              <div className="technology-accordion">
                {selectedGroup.items.map((item) => (
                  <details key={item.name}>
                    <summary>{item.name}</summary>
                    <dl>
                      <div><dt>얻는 정보와 역할</dt><dd>{item.role}</dd></div>
                      <div><dt>어디에 쓰는가</dt><dd>{item.use}</dd></div>
                      <div><dt>한계와 조건</dt><dd>{item.limit}</dd></div>
                    </dl>
                  </details>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="map-flow-title">
        <div className="container split-process">
          <RevealOnScroll>
            <SectionHeading
              id="map-flow-title"
              titleLines={['장소를 찾는 지도와', '휠체어가 판단하는 길은 다릅니다']}
              description="실서비스에서는 카카오맵 Web·Local API가 장소 검색과 지도 표시를 맡고, 휠체어 경로는 OSM·현장 조사로 보완한 접근성 보행 그래프에서 계산합니다. 기체는 LiDAR·카메라로 현장을 마지막에 다시 확인합니다."
            />
          </RevealOnScroll>
          <RevealOnScroll><MapArchitectureGraphic /></RevealOnScroll>
        </div>
      </section>

      <section className="section" aria-labelledby="charging-flow-title">
        <div className="container">
          <div className="split-process">
            <RevealOnScroll>
              <SectionHeading
                id="charging-flow-title"
                titleLines={['호환 거점에서 사람이 연결하는', '유선 충전 방식입니다']}
                description="제조사 승인 유선 충전기를 전제로 하며 무선 충전이나 자동 도킹은 기본 기능으로 제시하지 않습니다. 실제 기체 옵션은 별도 확인이 필요합니다."
              />
            </RevealOnScroll>
            <RevealOnScroll><DataFlow steps={chargingFlow} /></RevealOnScroll>
          </div>
          <RevealOnScroll className="charging-hubs">
            <div className="charging-hubs__heading">
              <p className="charging-hubs__label">충전 거점 운영</p>
              <h3>장소에 맞춰 설치와 운영 조건을 나눕니다</h3>
              <p>아래 내용은 설치 완료 현황이 아닌 운영 제안입니다. 일상 이용 후 충분히 충전하는 것을 기본으로 하고, 공공 거점은 이동 중 보충 충전과 안전한 정차 지원에 활용합니다.</p>
            </div>
            <div className="charging-hubs__grid">
              {chargingHubs.map((hub) => (
                <article key={hub.place}>
                  <h4>{hub.place}</h4>
                  <dl>
                    <div><dt>설치 조건</dt><dd>{hub.condition}</dd></div>
                    <div><dt>운영 방식</dt><dd>{hub.operation}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
