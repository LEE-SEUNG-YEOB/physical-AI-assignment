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
        eyebrow="NEXT · DIFFERENCE"
        titleLines={['기술을 연결하면', '무엇이 달라질까요?']}
        label="모두길의 차별점 보기"
        to="/difference"
      />
    </>
  )
}
