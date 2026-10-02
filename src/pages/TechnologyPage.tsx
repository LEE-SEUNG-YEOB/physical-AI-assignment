import { TechnologyNetworkGraphic } from '../components/graphics/TechnologyNetworkGraphic'
import { PageHero } from '../components/layout/PageHero'
import { PageNextLink } from '../components/layout/PageNextLink'
import { TechnologySection } from '../sections/TechnologySection'

export function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="TECHNOLOGY AND DATA"
        titleLines={['정보를 읽어,', '안전한 이동을 만듭니다']}
        description="센서, 지도, 외부 위험 정보와 유선 충전이 안전한 이동 판단에 어떻게 쓰이는지 설명합니다."
        visual={<TechnologyNetworkGraphic />}
        tone="dark"
        variant="technology"
      />
      <TechnologySection />
      <PageNextLink
        titleLines={['기술을 연결하면', '무엇이 달라질까요?']}
        label="모두길의 차별점 보기"
        to="/difference"
      />
    </>
  )
}
