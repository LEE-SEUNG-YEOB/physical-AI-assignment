import { DifferenceBridgeGraphic } from '../components/graphics/DifferenceBridgeGraphic'
import { PageHero } from '../components/layout/PageHero'
import { PageNextLink } from '../components/layout/PageNextLink'
import { DifferencePointsSection } from '../sections/DifferencePointsSection'
import { OperationModelsSection } from '../sections/OperationModelsSection'
import { RelatedServicesSection } from '../sections/RelatedServicesSection'

export function DifferencePage() {
  return (
    <>
      <PageHero
        eyebrow="DIFFERENCE AND OPERATION"
        titleLines={['가까운 길보다,', '실제로 도착할 수 있는 길']}
        description="모두길은 목적지 자동 이동, 기체 조건에 맞는 통과 판단, 앞 구간의 변화와 현장 대응, 배터리·충전의 연결에 초점을 둡니다."
        visual={<DifferenceBridgeGraphic />}
        tone="cream"
        variant="difference"
      />
      <DifferencePointsSection />
      <RelatedServicesSection />
      <OperationModelsSection />
      <PageNextLink
        titleLines={['연결된 이동은', '어떤 변화를 만들 수 있을까요?']}
        label="기대 효과와 운영 원칙 보기"
        to="/impact"
      />
    </>
  )
}
