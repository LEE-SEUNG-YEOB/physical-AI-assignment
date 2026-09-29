import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { SkipLink } from './components/layout/SkipLink'
import { ClosingSection } from './sections/ClosingSection'
import { ConnectedServiceSection } from './sections/ConnectedServiceSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { HeroSection } from './sections/HeroSection'
import { ImpactSection } from './sections/ImpactSection'
import { ProblemSection } from './sections/ProblemSection'
import { SafetyPrinciplesSection } from './sections/SafetyPrinciplesSection'
import { SafetyProcessSection } from './sections/SafetyProcessSection'
import { ScenarioSection } from './sections/ScenarioSection'
import { TechnologySection } from './sections/TechnologySection'
import { UsageFlowSection } from './sections/UsageFlowSection'
import { UserSupportSection } from './sections/UserSupportSection'

export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProblemSection />
        <ConnectedServiceSection />
        <FeaturesSection />
        <SafetyProcessSection />
        <UsageFlowSection />
        <ScenarioSection />
        <UserSupportSection />
        <TechnologySection />
        <SafetyPrinciplesSection />
        <ImpactSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  )
}
