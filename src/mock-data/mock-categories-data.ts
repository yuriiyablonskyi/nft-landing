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
    label: 'sections.categoriesSection.items.art.label',
    img: WhalesImg,
    icon: PaintBrushIcon,
  },
  {
    id: 2,
    label: 'sections.categoriesSection.items.collectibles.label',
    img: GorillaImg,
    icon: SwatchesIcon,
  },
  {
    id: 3,
    label: 'sections.categoriesSection.items.music.label',
    img: ViolinImg,
    icon: MusicNotesIcon,
  },
  {
    id: 4,
    label: 'sections.categoriesSection.items.photography.label',
    img: OldManImg,
    icon: CameraIcon,
  },
  {
    id: 5,
    label: 'sections.categoriesSection.items.video.label',
    img: SpaceWithKidImg,
    icon: VideoCameraIcon,
  },
  {
    id: 6,
    label: 'sections.categoriesSection.items.utility.label',
    img: KeyImg,
    icon: MagicWandIcon,
  },
  {
    id: 7,
    label: 'sections.categoriesSection.items.sport.label',
    img: BasketballImg,
    icon: BasketballIcon,
  },
  {
    id: 8,
    label: 'sections.categoriesSection.items.virtualWorlds.label',
    img: CityscapeImg,
    icon: PlanetIcon,
  },
]
