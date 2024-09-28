import { useTranslation } from 'react-i18next'
import { Showcase } from '../../types'
import {
  AstronautGirl,
  BlueWhaleImg,
  DotguImg,
  GalacticExplorerImg,
  JuanieImg,
  SpaceWithKidImg,
} from '../assets/images'

const { t } = useTranslation()

export const showcaseData: Showcase[] = [
  {
    id: 1,
    img: GalacticExplorerImg,
    title: 'Distant Galaxy',
    icon: JuanieImg,
    username: 'MoonDancer',
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
  },
  {
    id: 2,
    img: SpaceWithKidImg,
    title: 'Life On Edena',
    icon: BlueWhaleImg,
    username: 'NebulaKid',
    price: '0.21 ETH',
    highestBid: '0.81 wETH',
  },
  {
    id: 3,
    img: AstronautGirl,
    title: 'AstroFiction',
    icon: DotguImg,
    username: 'Spaceone',
    price: '4.57 ETH',
    highestBid: '0.26 wETH',
  },
]
