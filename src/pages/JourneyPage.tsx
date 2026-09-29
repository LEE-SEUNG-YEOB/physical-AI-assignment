import { PageHeroGraphic } from '../components/graphics/PageHeroGraphic'
import { PageHero } from '../components/layout/PageHero'
import { PageNextLink } from '../components/layout/PageNextLink'
import { ScenarioSection } from '../sections/ScenarioSection'
import { UsageFlowSection } from '../sections/UsageFlowSection'

export function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="HOW MODUGIL WORKS"
        titleLines={['목적지를 정하면,', '이동 지원이 시작됩니다']}
        description="목적지와 안내 방식을 선택하면 실제로 통과할 수 있는 경로를 먼저 찾습니다. 상황이 바뀌면 감속, 정지, 우회와 경로 재탐색으로 대응합니다."
        visual={<PageHeroGraphic variant="journey" />}
      />
      <UsageFlowSection />
      <ScenarioSection />
      <PageNextLink
        eyebrow="NEXT · TECHNOLOGY"
        titleLines={['연속적인 이동 판단은', '어떤 기술로 가능해질까요?']}
        label="핵심 기술 살펴보기"
        to="/technology"
      />
    </>
  )
}
