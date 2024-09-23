import { CollectionImg, EarningImg, WalletImg } from '../assets/images'

import { Guide } from '../../types'

export const GuideData: Guide[] = [
  {
    id: 1,
    icon: WalletImg,
    title: 'Setup Your wallet',
    text: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
  },
  {
    id: 2,
    icon: CollectionImg,
    title: 'Create Collection',
    text: 'Upload your work and setup your collection. Add a description, social links and floor price.',
  },
  {
    id: 3,
    icon: EarningImg,
    title: 'Start Earning',
    text: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
  },
]
