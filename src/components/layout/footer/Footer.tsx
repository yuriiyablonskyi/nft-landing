import { FC } from 'react'
import { DiscordIcon, EnvelopeIcon, InstagramIcon, LogoIcon, TwitterIcon, YoutubeIcon } from '../../../assets/icons'
import Button from '../../common/button/Button'
import Container from '../../common/container/Container'
import styles from './Footer.module.sass'

const Footer: FC = () => (
  <section className={styles.wrapper}>
    <Container>
      <div className={styles.footer}>
        <div className={styles.footer__item}>
          <a href="#" className={styles.footer__logo}>
            <img src={LogoIcon} alt="logo" />
          </a>
          <a href="#" className={styles.footer__link}>
            NFT marketplace UI created with Anima for Figma.
          </a>

          <div className={styles.footer__social}>
            <p className={styles.footer__text}>Join our community</p>
            <a href="#" className={styles.footer__socialLink}>
              <img className={styles.footer__socialIcon} src={DiscordIcon} alt="" />
            </a>
            <a href="#" className={styles.footer__socialLink}>
              <img className={styles.footer__socialIcon} src={YoutubeIcon} alt="" />
            </a>
            <a href="#" className={styles.footer__socialLink}>
              <img className={styles.footer__socialIcon} src={TwitterIcon} alt="" />
            </a>
            <a href="#" className={styles.footer__socialLink}>
              <img className={styles.footer__socialIcon} src={InstagramIcon} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.footer__item}>
          <h4 className={styles.footer__header}>Explore</h4>
          <a href="#" className={styles.footer__link}>
            Marketplace
          </a>
          <a href="#" className={styles.footer__link}>
            Rankings
          </a>
          <a href="#" className={styles.footer__link}>
            Connect a wallet
          </a>
        </div>
        <div className={styles.footer__item}>
          <h4 className={styles.footer__header}>Join our weekly digest</h4>
          <a href="#" className={styles.footer__link}>
            Get exclusive promotions & updates straight to your inbox.
          </a>
          <form className={styles.footer__form}>
            <input
              type="email"
              placeholder="Enter your email here"
              className={styles.footer__input}
              required
              aria-label="Email"
            />
            <Button icon={EnvelopeIcon} text="Subscribe" type="submit" />
          </form>
        </div>
      </div>
    </Container>
  </section>
)

export default Footer
