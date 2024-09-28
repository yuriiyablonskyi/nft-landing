import { FC, useEffect, useState } from 'react'
import { LogoIcon, UserIcon } from '../../../assets/icons'
import Button from '../../common/button/Button'
import styles from './Header.module.sass'
import { useTranslation } from 'react-i18next'

import { useRef } from 'react'
import { motion, sync, useCycle } from 'framer-motion'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'

const Header: FC = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    console.log(lang)

    i18n.changeLanguage(lang)
  }

  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // const useDimensions = ref => {
  //   const dimensions = useRef({ width: 0, height: 0 })

  //   useEffect(() => {
  //     dimensions.current.width = ref.current.offsetWidth
  //     dimensions.current.height = ref.current.offsetHeight
  //   }, [])

  //   return dimensions.current
  // }

  // const [isOpen, toggleOpen] = useCycle(false, true)
  // const containerRef = useRef(null)
  // const { height } = useDimensions(containerRef)

  // const sidebar = {
  //   open: (height = 1000) => ({
  //     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
  //     transition: {
  //       type: 'spring',
  //       stiffness: 20,
  //       restDelta: 2,
  //     },
  //   }),
  //   closed: {
  //     clipPath: 'circle(30px at 40px 40px)',
  //     transition: {
  //       delay: 0.5,
  //       type: 'spring',
  //       stiffness: 400,
  //       damping: 40,
  //     },
  //   },
  // }

  const Path = props => (
    <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />
  )

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <a href="#" className={styles.header__logo}>
        <img src={LogoIcon} alt={t('layout.header.logoAlt')} className={styles.header__logoImg} />
      </a>
      <motion.nav
        animate={menuOpen ? 'open' : 'closed'}
        className={`${styles.header__list} ${menuOpen ? styles.header__listOpen : ''}`}
      >
        <a className={styles.header__link} href="#marketplace">
          {t('layout.header.menu.marketplace')}
        </a>
        <a className={styles.header__link} href="#rankings">
          {t('layout.header.menu.rankings')}
        </a>
        <a className={styles.header__link} href="#connect_a_wallet">
          {t('layout.header.menu.connectWallet')}
        </a>
        <Button icon={UserIcon} text={t('layout.header.menu.buttonText')} />
      </motion.nav>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pl')}>Polish</button>

      {/* <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'} custom={height} ref={containerRef}>
        <motion.div className="background" variants={sidebar} />
        tes */}
      {/* <Navigation /> */}
      {/* <MenuToggle toggle={() => toggleOpen()} /> */}
      {/* </motion.nav> */}

      <button onClick={toggleMenu}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
          />
        </svg>
      </button>
      {/* <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={toggleMenu}
      >
        <p className={styles.burger__item}></p>
        <p className={styles.burger__item}></p>
        <p className={styles.burger__item}></p>
      </motion.button> */}
      {/* <motion.div className="box" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} /> */}
    </header>
  )
}

export default Header
