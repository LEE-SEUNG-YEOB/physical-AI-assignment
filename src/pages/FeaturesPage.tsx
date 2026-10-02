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
        eyebrow="FEATURES AND SAFE MOTION"
        titleLines={['상황을 읽고,', '휠체어의 행동을 바꿉니다']}
        description="사람과 장애물, 통과 조건, 앞 구간의 변화와 배터리를 함께 살펴 감속, 정지, 회피와 재탐색으로 연결합니다."
        visual={<SafetyDecisionGraphic />}
        tone="dark"
        variant="features"
      />
      <FeaturesSection />
      <SafetyProcessSection />
      <SafetyPrinciplesSection />
      <PageNextLink
        titleLines={['이 기능들은 목적지를 정한 순간부터', '어떻게 이어질까요?']}
        label="서비스 이용 과정 보기"
        to="/journey"
      />
    </>
  )
}
