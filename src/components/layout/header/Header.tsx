import { FC, useEffect, useState } from 'react'
import { LogoIcon, UserIcon } from '../../../assets/icons'
import Button from '../../common/button/Button'
import styles from './Header.module.sass'
import { useTranslation } from 'react-i18next'
import Select from '../../common/select/Select'
import { LanguageOption } from '../../../../types'
import { motion } from 'framer-motion'

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleMenu = () => setMenuOpen(prevMenuOpen => !prevMenuOpen)

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

  const options: LanguageOption[] = [
    { value: 'en', label: 'English' },
    { value: 'uk', label: 'Українська' },
    { value: 'pl', label: 'Polski' },
  ]

  const defaultLanguage = 'en'

  const getInitialLanguage = (): LanguageOption => {
    const storedLanguage = localStorage.getItem('language') || defaultLanguage
    return options.find(option => option.value === storedLanguage) || { value: 'en', label: 'English' }
  }

  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(getInitialLanguage)

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || defaultLanguage
    i18n.changeLanguage(storedLanguage)
  }, [i18n])

  const handleChangeLanguage = (selectedOption: LanguageOption) => {
    setSelectedLanguage(selectedOption)
    i18n.changeLanguage(selectedOption.value).then(() => {
      localStorage.setItem('language', selectedOption.value)
    })
  }

  const menuVariants = {
    hidden: { x: '100%', transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    visible: { x: '0%', transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  }

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 12 },
  }

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -12 },
  }

  return (
    <motion.header
      animate={{
        boxShadow: scrolled ? '0 8px 20px 0 rgba(0, 0, 0, 0.5)' : 'none',
      }}
      className={styles.header}
    >
      <a href="#" className={styles.header__logo}>
        <img src={LogoIcon} alt={t('layout.header.logoAlt')} className={styles.header__logoImg} />
      </a>
      <motion.nav variants={menuVariants} animate={menuOpen ? 'hidden' : 'visible'} className={styles.header__list}>
        <motion.a
          whileHover={{
            y: -2,
            color: '#A259FF',
            transition: { duration: 0.3 },
          }}
          className={styles.header__link}
          href="#marketplace"
        >
          {t('layout.header.menu.marketplace')}
        </motion.a>
        <motion.a
          whileHover={{
            y: -2,
            color: '#A259FF',
            transition: { duration: 0.3 },
          }}
          className={styles.header__link}
          href="#rankings"
        >
          {t('layout.header.menu.rankings')}
        </motion.a>
        <motion.a
          whileHover={{
            y: -2,
            color: '#A259FF',
            transition: { duration: 0.3 },
          }}
          className={styles.header__link}
          href="#connect_a_wallet"
        >
          {t('layout.header.menu.connectWallet')}
        </motion.a>
        <Select
          options={options}
          selectedLanguageValue={selectedLanguage.value}
          onChangeLanguage={handleChangeLanguage}
        />
        <Button icon={UserIcon} text={t('layout.header.menu.buttonText')} />
      </motion.nav>

      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <motion.div
          className={styles.burgerMenu__line}
          variants={topLineVariants}
          initial="closed"
          animate={menuOpen ? 'open' : 'closed'}
        />
        <motion.div
          className={styles.burgerMenu__line}
          variants={middleLineVariants}
          initial="closed"
          animate={menuOpen ? 'open' : 'closed'}
        />
        <motion.div
          className={styles.burgerMenu__line}
          variants={bottomLineVariants}
          initial="closed"
          animate={menuOpen ? 'open' : 'closed'}
        />
      </div>
    </motion.header>
  )
}

export default Header
