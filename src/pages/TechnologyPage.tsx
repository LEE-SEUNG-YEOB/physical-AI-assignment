import { TechnologyNetworkGraphic } from '../components/graphics/TechnologyNetworkGraphic'
import { PageHero } from '../components/layout/PageHero'
import { PageNextLink } from '../components/layout/PageNextLink'
import { TechnologySection } from '../sections/TechnologySection'

export function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="CONNECTED TECHNOLOGY"
        titleLines={['여섯 기술이 하나의', '안전 판단을 만듭니다']}
        description="센서 입력에서 객체 이해, 공간 판단, 경로 계획과 이동 제어까지 각 기술이 중앙의 안전 판단을 중심으로 정보를 주고받습니다."
        visual={<TechnologyNetworkGraphic />}
        tone="dark"
        variant="technology"
      />
      <TechnologySection />
      <PageNextLink
        eyebrow="NEXT · IMPACT"
        titleLines={['기술의 가치는', '실제 이동 경험에서 확인해야 합니다']}
        label="기대 효과와 검증 기준 보기"
        to="/impact"
      />
    </>
  )
}
