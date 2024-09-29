import { CollectionImg, EarningImg, WalletImg } from '../assets/images'

import { Guide } from '../../types'

export const GuideData: Guide[] = [
  {
    id: 1,
    icon: WalletImg,
    title: 'sections.guideSection.items.wallet.title',
    text: 'sections.guideSection.items.wallet.text',
  },
  {
    id: 2,
    icon: CollectionImg,
    title: 'sections.guideSection.items.collection.title',
    text: 'sections.guideSection.items.collection.text',
  },
  {
    id: 3,
    icon: EarningImg,
    title: 'sections.guideSection.items.earning.title',
    text: 'sections.guideSection.items.earning.text',
  },
]
