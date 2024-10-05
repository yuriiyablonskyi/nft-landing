import { FC } from 'react'
import { CountdownValues } from '../../../../types/hooks'
import { EyePurpleIcon } from '../../../assets/icons'
import { ShroomieImg } from '../../../assets/images'
import { useCountdown } from '../../../hooks/useCountdown'
import Button from '../../common/button/Button'
import Container from '../../common/container/Container.tsx'
import styles from './CountdownSection.module.sass'
import { useTranslation } from 'react-i18next'

import { motion, AnimatePresence } from 'framer-motion'

// const CountdownSection: FC = () => {
//   const { hours, minutes, seconds }: CountdownValues = useCountdown(59, 59, 59)
//   const { t } = useTranslation()
//   return (
//     <div className={styles.wrapper}>
//       <Container>
//         <div className={styles.wrapper__inner}>
//           <div className={styles.info}>
//             <div className={styles.info__user}>
//               <img className={styles.info__userIcon} src={ShroomieImg} alt="Shroomie" />
//               <span className={styles.info__userLabel}>Shroomie</span>
//             </div>
//             <h2 className={styles.title}>{t('sections.countdownSection.title')}</h2>
//             <Button icon={EyePurpleIcon} text={t('sections.countdownSection.buttonText')} color="white" />
//           </div>

//           <div className={styles.timer}>
//             <p className={styles.timer__text}>{t('sections.countdownSection.timer.title')}:</p>
//             <div className={styles.timer__time}>
//               <div>
//                 <p className={styles.timer__value}>{String(hours).padStart(2, '0')}</p>
//                 <p className={styles.timer__text}>{t('sections.countdownSection.timer.time.hours')}</p>
//               </div>
//               <p className={styles.timer__punctuation}>:</p>
//               <div>
//                 <p className={styles.timer__value}>{String(minutes).padStart(2, '0')}</p>
//                 <p className={styles.timer__text}>{t('sections.countdownSection.timer.time.minutes')}</p>
//               </div>
//               <p className={styles.timer__punctuation}>:</p>
//               <div>
//                 <p className={styles.timer__value}>{String(seconds).padStart(2, '0')}</p>
//                 <p className={styles.timer__text}>{t('sections.countdownSection.timer.time.seconds')}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }

// export default CountdownSection

const slideVariant = {
  initial: (direction: number) => ({
    y: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    filter: 'blur(5px)',
  }),
  animate: {
    y: '0%',
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5 },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    filter: 'blur(5px)',
    transition: { duration: 0.5 },
  }),
}

const CountdownSection: React.FC = () => {
  const initialHours = 2
  const initialMinutes = 45
  const initialSeconds = 43
  const { hours, minutes, seconds } = useCountdown(initialHours, initialMinutes, initialSeconds)

  const renderDigits = (value: string) => {
    console.log({ value })
    console.log(typeof value)
    return String(value)
      .split('')
      .map((digit, index) => (
        <div key={index} className={styles.digit}>
          <AnimatePresence initial={false} custom={parseInt(digit, 10)}>
            <motion.span
              key={digit}
              variants={slideVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={digit}
            >
              {digit}
            </motion.span>
          </AnimatePresence>
        </div>
      ))
  }

  return (
    <div className={styles.timerContainer}>
      {renderDigits(hours)}:<span>:</span>
      {renderDigits(minutes)}:<span>:</span>
      {renderDigits(seconds)}
    </div>
  )
}

export default CountdownSection
