import { JourneyRailGraphic } from '../components/graphics/JourneyRailGraphic'
import { PageHero } from '../components/layout/PageHero'
import { PageNextLink } from '../components/layout/PageNextLink'
import { ScenarioSection } from '../sections/ScenarioSection'
import { UsageFlowSection } from '../sections/UsageFlowSection'

export function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="HOW MODUGIL WORKS"
        titleLines={['선택한 목적지까지,', '이동의 흐름을 잇습니다']}
        description="목적지 선택부터 접근 가능한 경로 확인, 실시간 이동 대응과 시설 내부 도착까지 사용자가 경험하는 순서를 따라갑니다."
        visual={<JourneyRailGraphic />}
        variant="journey"
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
