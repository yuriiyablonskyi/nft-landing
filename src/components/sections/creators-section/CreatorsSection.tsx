import { FC } from 'react'
import { RocketLaunchIcon } from '../../../assets/icons'
import { creatorsData } from '../../../mock-data/mock-creators-data'
import Button from '../../common/button/Button'
import Container from '../../common/container/Container.tsx'
import SectionHeader from '../../common/section-header/SectionHeader.tsx'
import styles from './CreatorsSection.module.sass'

const CreatorsSection: FC = () => (
  <section>
    <Container>
      <div className={styles.wrapper}>
        <SectionHeader title="Top creators" subtitle="Checkout Top Rated Creators on the NFT Marketplace" />
        <div className={styles.creatorsList}>
          {creatorsData.map(({ id, title, img }, index) => (
            <div key={id} className={styles.creatorsList__item}>
              <p className={styles.creatorsList__number}>{index + 1}</p>
              <img className={styles.creatorsList__img} src={img} alt={title} />
              <div className={styles.creatorsList__info}>
                <h4 className={styles.creatorsList__title}>{title}</h4>
                <p>
                  <span className={styles.creatorsList__label}>Total Sales /:</span>
                  <span className={styles.creatorsList__count}>34.53 ETH</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buttonCenter}>
          <Button icon={RocketLaunchIcon} text="View Rankings" />
        </div>
      </div>
    </Container>
  </section>
)

export default CreatorsSection
