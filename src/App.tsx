import Footer from './components/layout/footer'
import Header from './components/layout/header'
import CategoriesSection from './components/sections/categories-section'
import CountdownSection from './components/sections/countdown-section'
import CreatorsSection from './components/sections/creators-section'
import GallerySection from './components/sections/gallery-section'
import GuideSection from './components/sections/guide-section'
import HeroSection from './components/sections/hero-section'
import ShowcaseSection from './components/sections/showcase-section/ShowcaseSection'
import SubscriptionSection from './components/sections/subscription-section'
import './styles/global.sass'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <GallerySection />
      <CreatorsSection />
      <CategoriesSection />
      <ShowcaseSection />
      <CountdownSection />
      <GuideSection />
      <SubscriptionSection />
      <Footer />
    </>
  )
}

export default App
