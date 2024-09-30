import { FC, useEffect, useState } from 'react'
import { LogoIcon, UserIcon } from '../../../assets/icons'
import Button from '../../common/button/Button'
import styles from './Header.module.sass'
import { useTranslation } from 'react-i18next'
import Select from '../../common/select/Select'
import i18n from '../../../i18n'
import { LanguageOption } from '../../../../types'

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, i18n } = useTranslation()

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

  // const { t, i18n } = useTranslation()

  const options: LanguageOption[] = [
    { value: 'en', label: 'English' },
    { value: 'uk', label: 'Українська' },
    { value: 'pl', label: 'Polski' },
  ]

  // Helper function to fetch the initial language from localStorage
  const getInitialLanguage = (): LanguageOption => {
    const storedLanguage = localStorage.getItem('language') || 'en'
    return options.find(option => option.value === storedLanguage) || { value: 'en', label: 'English' }
  }

  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(getInitialLanguage)

  // Ensure i18next uses the correct language on initial load
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en'
    i18n.changeLanguage(storedLanguage)
  }, [i18n])

  // Handle language change and sync both state and i18next
  const handleChangeLanguage = (selectedOption: LanguageOption) => {
    setSelectedLanguage(selectedOption)
    i18n.changeLanguage(selectedOption.value).then(() => {
      localStorage.setItem('language', selectedOption.value)
    })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <a href="#" className={styles.header__logo}>
        <img src={LogoIcon} alt={t('layout.header.logoAlt')} className={styles.header__logoImg} />
      </a>
      <nav className={`${styles.header__list} ${menuOpen ? styles.header__listOpen : ''}`}>
        <a className={styles.header__link} href="#marketplace">
          {t('layout.header.menu.marketplace')}
        </a>
        <a className={styles.header__link} href="#rankings">
          {t('layout.header.menu.rankings')}
        </a>
        <a className={styles.header__link} href="#connect_a_wallet">
          {t('layout.header.menu.connectWallet')}
        </a>
        <Select
          options={options}
          selectedLanguageValue={selectedLanguage.value}
          onChangeLanguage={handleChangeLanguage}
        />
        <Button icon={UserIcon} text={t('layout.header.menu.buttonText')} />
      </nav>
    </header>
  )
}

export default Header
