import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { LogoIcon } from '../../assets/icons'
import BurgerMenu from './BurgerMenu'
import Menu from './Menu'
import styles from './Header.module.sass'
import { LanguageOption } from '../../../types'

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleMenu = () => setMenuOpen(prevMenuOpen => !prevMenuOpen)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    setScrolled(scrollTop > 50)
  }

  useEffect(() => {
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
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(() => {
    const storedLanguage = localStorage.getItem('language') || defaultLanguage
    return options.find(option => option.value === storedLanguage) || { value: 'en', label: 'English' }
  })

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

      <Menu
        menuOpen={menuOpen}
        t={t}
        selectedLanguage={selectedLanguage}
        options={options}
        handleChangeLanguage={handleChangeLanguage}
      />

      <BurgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </motion.header>
  )
}

export default Header
