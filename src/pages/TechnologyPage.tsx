import { TechnologyNetworkGraphic } from '../components/graphics/TechnologyNetworkGraphic'
import { PageHero } from '../components/layout/PageHero'
import { PageNextLink } from '../components/layout/PageNextLink'
import { TechnologySection } from '../sections/TechnologySection'

export function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="TECHNOLOGY AND DATA"
        titleLines={['얻은 정보를', '안전한 움직임에 씁니다']}
        description="기체와 센서, 소프트웨어, 역할이 다른 지도, 외부 위험 정보와 유선 충전이 어디에 쓰이는지 구분해 설명합니다."
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
