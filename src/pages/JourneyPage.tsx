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
        titleLines={['공원부터 복지관까지,', '확인된 길로 이어갑니다']}
        description="탑승 확인부터 공사 우회와 입구 앞 도착까지, 약 700m 생활권 이동의 가정을 따라갑니다."
        visual={<JourneyRailGraphic />}
        variant="journey"
      />
      <UsageFlowSection />
      <ScenarioSection />
      <PageNextLink
        titleLines={['연속적인 이동 판단은', '어떤 기술로 가능해질까요?']}
        label="핵심 기술 살펴보기"
        to="/technology"
      />
    </>
  )
}
