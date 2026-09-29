import { SafetyDecisionGraphic } from '../components/graphics/SafetyDecisionGraphic'
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
        titleLines={['보고, 판단하고,', '안전하게 움직입니다']}
        description="주변을 감지한 정보는 공간 판단을 거쳐 감속, 정지와 우회 행동으로 이어집니다. 모두길의 핵심 기능을 세 단계의 안전 흐름으로 보여줍니다."
        visual={<SafetyDecisionGraphic />}
        tone="dark"
        variant="features"
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
