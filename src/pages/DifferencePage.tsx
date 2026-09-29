import { DifferenceBridgeGraphic } from '../components/graphics/DifferenceBridgeGraphic'
import { PageHero } from '../components/layout/PageHero'
import { PageNextLink } from '../components/layout/PageNextLink'
import { DifferencePointsSection } from '../sections/DifferencePointsSection'
import { ImplementationStrategySection } from '../sections/ImplementationStrategySection'
import { RelatedServicesSection } from '../sections/RelatedServicesSection'

export function DifferencePage() {
  return (
    <>
      <PageHero
        eyebrow="DIFFERENCE & STRATEGY"
        titleLines={['기술 하나보다,', '연결 방식이 다릅니다']}
        description="모두길은 이미 발전해 온 개인 이동 보조 기술과 도시·공공시설 정보를 연결합니다. 보도에서 시설 내부까지 이어지는 이동을 하나의 사용자 경험으로 만드는 것이 핵심입니다."
        visual={<DifferenceBridgeGraphic />}
        tone="cream"
        variant="difference"
      />
      <DifferencePointsSection />
      <RelatedServicesSection />
      <ImplementationStrategySection />
      <PageNextLink
        eyebrow="NEXT · IMPACT"
        titleLines={['연결된 이동은', '어떤 변화를 만들 수 있을까요?']}
        label="기대 효과와 검증 기준 보기"
        to="/impact"
      />
    </>
  )
}
