import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { SkipLink } from './components/layout/SkipLink'
import { ScrollToTop } from './components/routing/ScrollToTop'
import { FeaturesPage } from './pages/FeaturesPage'
import { ImpactPage } from './pages/ImpactPage'
import { JourneyPage } from './pages/JourneyPage'
import { ServicePage } from './pages/ServicePage'
import { TechnologyPage } from './pages/TechnologyPage'

export default function App() {
  const location = useLocation()

  return (
    <>
      <SkipLink />
      <Header />
      <ScrollToTop />
      <main id="main-content" tabIndex={-1}>
        <div className="page-transition" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<ServicePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  )
}
