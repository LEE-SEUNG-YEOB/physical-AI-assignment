import { PageHeroGraphic } from '../components/graphics/PageHeroGraphic'
import { PageHero } from '../components/layout/PageHero'
import { ClosingSection } from '../sections/ClosingSection'
import { ImpactSection } from '../sections/ImpactSection'

export function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="EXPECTED IMPACT"
        titleLines={['도시 이동의 끊김을 줄이고,', '접근성을 이어갑니다']}
        description="모두길은 이용자의 판단 부담을 줄이고 도시와 공공시설이 반복되는 접근성 문제를 파악하도록 돕는 것을 목표로 합니다."
        visual={<PageHeroGraphic variant="impact" />}
        tone="cream"
      />
      <ImpactSection />
      <ClosingSection />
    </>
  )
}
