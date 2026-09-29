import { PageHeroGraphic } from '../components/graphics/PageHeroGraphic'
import { PageHero } from '../components/layout/PageHero'
import { PageNextLink } from '../components/layout/PageNextLink'
import { ConnectedServiceSection } from '../sections/ConnectedServiceSection'
import { TechnologySection } from '../sections/TechnologySection'

export function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="CONNECTED TECHNOLOGY"
        titleLines={['환경을 이해하고,', '안전한 행동을 결정합니다']}
        description="환경 감지, 움직임 예측, 공간 판단, 접근성 경로 계획과 이동 제어가 하나의 판단 흐름으로 연결됩니다."
        visual={<PageHeroGraphic variant="technology" />}
        tone="dark"
      />
      <TechnologySection />
      <ConnectedServiceSection />
      <PageNextLink
        eyebrow="NEXT · IMPACT"
        titleLines={['기술의 가치는', '실제 이동 경험에서 확인해야 합니다']}
        label="기대 효과와 검증 기준 보기"
        to="/impact"
      />
    </>
  )
}
