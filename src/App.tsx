import Select from './components/common/select/Select'
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

const options = [
  { value: 'en', label: 'en' },
  { value: 'uk', label: 'uk' },
  { value: 'pl', label: 'pl' },
]

function App() {
  const handleChange = value => {
    console.log('Selected:', value)
  }

  return (
    <>
      <Select options={options} defaultOption="en" onChange={handleChange} />
      {/* <Option value="en">EN</Option>
        <Option value="uk">UK</Option>
        <Option value="pl">PL</Option>
      </Select> */}
    </>
  )
}

export default App
