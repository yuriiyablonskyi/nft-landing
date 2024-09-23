import { FC } from 'react'
import { RocketLaunchIcon } from '../../../assets/icons'
import { AnimakidImg, AstronautKidImg } from '../../../assets/images'
import Button from '../../common/button'
import Container from '../../common/container/Container'
import styles from './HeroSection.module.sass'

const HeroSection: FC = () => (
  <section>
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__description}>
          <h1 className={styles.title}>Discover digital art & Collect NFTs</h1>
          <p className={styles.subtitle}>
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
          </p>
          <Button icon={RocketLaunchIcon} text="Get Started" />
          <div className={styles.info}>
            <div className={styles.info__item}>
              <p className={styles.info__count}>240k+ </p>
              <p className={styles.info__description}>Total Sale</p>
            </div>
            <div className={styles.info__item}>
              <p className={styles.info__count}>100k+</p>
              <p className={styles.info__description}>Auctions</p>
            </div>
            <div className={styles.info__item}>
              <p className={styles.info__count}>240k+</p>
              <p className={styles.info__description}>Artists</p>
            </div>
          </div>
        </div>

        <div className={styles.wrapper__image}>
          <img src={AstronautKidImg} alt="" className={styles.img} />
          <div className={styles.img__info}>
            <h4 className={styles.img__title}>Space Walking</h4>
            <div className={styles.img__user}>
              <img src={AnimakidImg} alt="user icon" className={styles.img__icon} />{' '}
              <span className={styles.img__label}> Animakid</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
)

export default HeroSection
