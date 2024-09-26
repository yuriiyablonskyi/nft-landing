import { FC } from 'react'
import { EyePurpleIcon } from '../../../assets/icons'
import { ShroomieImg } from '../../../assets/images'
import { useCountdown } from '../../../hooks/useCountdown'
import Button from '../../common/button/Button'
import Container from '../../common/container/Container.tsx'
import styles from './CountdownSection.module.sass'

const CountdownSection: FC = () => {
  const [hours, minutes, seconds] = useCountdown()
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.wrapper__inner}>
          <div className={styles.info}>
            <div className={styles.info__user}>
              <img className={styles.info__userIcon} src={ShroomieImg} alt="Shroomie" />
              <span className={styles.info__userLabel}>Shroomie</span>
            </div>
            <h2 className={styles.title}>Magic Mashrooms</h2>
            <Button icon={EyePurpleIcon} text="See NFT" color="white" />
          </div>

          <div className={styles.timer}>
            <p className={styles.timer__text}>Auction ends in:</p>
            <div className={styles.timer__time}>
              <div>
                <p className={styles.timer__value}>{String(hours).padStart(2, '0')}</p>
                <p className={styles.timer__text}>Hours</p>
              </div>
              <p className={styles.timer__punctuation}>:</p>
              <div>
                <p className={styles.timer__value}>{String(minutes).padStart(2, '0')}</p>
                <p className={styles.timer__text}>Minutes</p>
              </div>
              <p className={styles.timer__punctuation}>:</p>
              <div>
                <p className={styles.timer__value}>{String(seconds).padStart(2, '0')}</p>
                <p className={styles.timer__text}>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CountdownSection
