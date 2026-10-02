import { ImpactOrbitGraphic } from '../components/graphics/ImpactOrbitGraphic'
import { PageHero } from '../components/layout/PageHero'
import { ClosingSection } from '../sections/ClosingSection'
import { ImpactSection } from '../sections/ImpactSection'

export function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="EXPECTED IMPACT"
        titleLines={['목적지 선택부터,', '도착까지 이어집니다']}
        description="사용자, 활동보조인과 시설 운영자에게 기대하는 변화를 목적지 이동 과정으로 설명합니다."
        visual={<ImpactOrbitGraphic />}
        tone="cream"
        variant="impact"
      />
      <ImpactSection />
      <ClosingSection />
    </>
  )
}
