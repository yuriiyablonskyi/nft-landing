import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import CategoriesSection from './components/sections/categories-section/CategoriesSection'
import CountdownSection from './components/sections/countdown-section/CountdownSection'
import CreatorsSection from './components/sections/creators-section/CreatorsSection'
import GallerySection from './components/sections/gallery-section/GallerySection'
import GuideSection from './components/sections/guide-section/GuideSection'
import HeroSection from './components/sections/hero-section/HeroSection'
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
