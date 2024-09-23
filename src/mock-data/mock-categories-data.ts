import {
  BasketballIcon,
  CameraIcon,
  MagicWandIcon,
  MusicNotesIcon,
  PaintBrushIcon,
  PlanetIcon,
  SwatchesIcon,
  VideoCameraIcon,
} from '../assets/icons'

import {
  BasketballImg,
  CityscapeImg,
  GorillaImg,
  KeyImg,
  OldManImg,
  SpaceWithKidImg,
  ViolinImg,
  WhalesImg,
} from '../assets/images'

import { Category } from '../../types'

export const categoriesData: Category[] = [
  {
    id: 1,
    label: 'Art',
    img: WhalesImg,
    icon: PaintBrushIcon,
  },
  {
    id: 2,
    label: 'Collectibles',
    img: GorillaImg,
    icon: SwatchesIcon,
  },
  {
    id: 3,
    label: 'Music',
    img: ViolinImg,
    icon: MusicNotesIcon,
  },
  {
    id: 4,
    label: 'Photography',
    img: OldManImg,
    icon: CameraIcon,
  },
  {
    id: 5,
    label: 'Video',
    img: SpaceWithKidImg,
    icon: VideoCameraIcon,
  },
  {
    id: 6,
    label: 'Utility',
    img: KeyImg,
    icon: MagicWandIcon,
  },
  {
    id: 7,
    label: 'Sport',
    img: BasketballImg,
    icon: BasketballIcon,
  },
  {
    id: 8,
    label: 'Virtual Worlds',
    img: CityscapeImg,
    icon: PlanetIcon,
  },
]
