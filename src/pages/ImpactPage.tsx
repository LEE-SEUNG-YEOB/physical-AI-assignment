import { ImpactOrbitGraphic } from '../components/graphics/ImpactOrbitGraphic'
import { PageHero } from '../components/layout/PageHero'
import { ClosingSection } from '../sections/ClosingSection'
import { ImpactSection } from '../sections/ImpactSection'

export function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="EXPECTED IMPACT"
        titleLines={['한 사람의 이동에서', '도시의 접근성으로']}
        description="개인의 이동 경험에서 발견한 접근성 문제는 도시와 공공시설의 개선 판단으로 이어질 수 있습니다. 검증이 필요한 변화의 범위를 관계 중심으로 보여줍니다."
        visual={<ImpactOrbitGraphic />}
        tone="cream"
        variant="impact"
      />
      <ImpactSection />
      <ClosingSection />
    </>
  )
}
