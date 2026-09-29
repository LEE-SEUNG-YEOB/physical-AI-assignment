import { PageNextLink } from '../components/layout/PageNextLink'
import { ConnectedServiceSection } from '../sections/ConnectedServiceSection'
import { HeroSection } from '../sections/HeroSection'
import { ProblemSection } from '../sections/ProblemSection'
import { UserSupportSection } from '../sections/UserSupportSection'

export function ServicePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ConnectedServiceSection />
      <UserSupportSection />
      <PageNextLink
        eyebrow="NEXT · FEATURES"
        titleLines={['모두길은 주변 정보를 어떻게', '실제 행동으로 바꿀까요?']}
        label="주요 기능 보기"
        to="/features"
      />
    </>
  )
}
