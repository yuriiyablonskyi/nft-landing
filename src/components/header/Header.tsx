import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageOption } from '../../../types'
import { LogoIcon } from '../../assets/icons'
import BurgerMenu from './BurgerMenu'
import styles from './Header.module.sass'
import Menu from './Menu'

const options: LanguageOption[] = [
  { value: 'en', label: 'English' },
  { value: 'uk', label: 'Українська' },
  { value: 'pl', label: 'Polski' },
]

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const { t, i18n } = useTranslation()

  const defaultLanguage = 'en'
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(() => {
    const storedLanguage = localStorage.getItem('language') || defaultLanguage
    return options.find(option => option.value === storedLanguage) || { value: 'en', label: 'English' }
  })

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
        selectedLanguage={selectedLanguage}
        options={options}
        handleChangeLanguage={handleChangeLanguage}
      />

      <BurgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </motion.header>
  )
}

export default Header
