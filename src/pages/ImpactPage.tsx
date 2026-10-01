import { ImpactOrbitGraphic } from '../components/graphics/ImpactOrbitGraphic'
import { PageHero } from '../components/layout/PageHero'
import { ClosingSection } from '../sections/ClosingSection'
import { ImpactSection } from '../sections/ImpactSection'

export function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="EXPECTED IMPACT"
        titleLines={['목적지를 고른 순간부터,', '도착까지 이어지는 이동']}
        description="기존 휠체어 이용자, 2차·확장 이용자, 보호자·활동보조인과 시설 운영자에게 기대하는 변화를 설명합니다."
        visual={<ImpactOrbitGraphic />}
        tone="cream"
        variant="impact"
      />
      <ImpactSection />
      <ClosingSection />
    </>
  )
}
