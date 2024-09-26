import { FC } from 'react'
import { EnvelopeIcon } from '../../../assets/icons'
import { AstronautNewspaperImg } from '../../../assets/images'
import Button from '../../common/button/Button'
import Container from '../../common/container/Container.tsx'
import SectionHeader from '../../common/section-header/SectionHeader.tsx'
import styles from './SubscriptionSection.module.sass'

const SubscriptionSection: FC = () => (
  <section className={styles.wrapper}>
    <Container>
      <div className={styles.subscription}>
        <img className={styles.subscription__img} src={AstronautNewspaperImg} alt="Astronaut" />
        <div className={styles.subscription__content}>
          <SectionHeader
            title="Join our weekly digest"
            subtitle="Get exclusive promotions & updates straight to your inbox."
          />
          <form className={styles.subscription__form}>
            <input
              type="email"
              placeholder="Enter your email here"
              className={styles.subscription__input}
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

export default SubscriptionSection
