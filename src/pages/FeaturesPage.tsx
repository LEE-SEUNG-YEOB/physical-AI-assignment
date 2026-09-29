import { PageHeroGraphic } from '../components/graphics/PageHeroGraphic'
import { PageHero } from '../components/layout/PageHero'
import { PageNextLink } from '../components/layout/PageNextLink'
import { FeaturesSection } from '../sections/FeaturesSection'
import { SafetyPrinciplesSection } from '../sections/SafetyPrinciplesSection'
import { SafetyProcessSection } from '../sections/SafetyProcessSection'

export function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="FEATURES & SAFE MOTION"
        titleLines={['위험을 먼저 살피고,', '안전한 행동으로 이어갑니다']}
        description="모두길은 주변 상황과 통과 가능성을 함께 판단합니다. 위험이 커지면 먼저 감속하고, 정지하거나 안전한 공간으로 우회합니다."
        visual={<PageHeroGraphic variant="features" />}
        tone="cream"
      />
      <FeaturesSection />
      <SafetyProcessSection />
      <SafetyPrinciplesSection />
      <PageNextLink
        eyebrow="NEXT · JOURNEY"
        titleLines={['이 기능들은 목적지를 정한 순간부터', '어떻게 이어질까요?']}
        label="서비스 이용 과정 보기"
        to="/journey"
      />
    </>
  )
}
