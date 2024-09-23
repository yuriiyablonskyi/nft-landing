import { FC, useEffect, useState } from 'react'
import { LogoIcon, UserIcon } from '../../../assets/icons'
import Button from '../../common/button'
import styles from './Header.module.sass'

const Header: FC = () => {
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

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <a href="#" className={styles.header__logo}>
        <img src={LogoIcon} alt="logo" className={styles.header__logoImg} />
      </a>
      <nav className={`${styles.header__list} ${menuOpen ? styles.header__listOpen : ''}`}>
        <a className={styles.header__link} href="#marketplace">
          Marketplace
        </a>
        <a className={styles.header__link} href="#rankings">
          Rankings
        </a>
        <a className={styles.header__link} href="#connect_a_wallet">
          Connect a wallet
        </a>
        <Button icon={UserIcon} text="Sign Up" />
      </nav>
      <button className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`} onClick={toggleMenu}>
        <p className={styles.burger__item}></p>
        <p className={styles.burger__item}></p>
        <p className={styles.burger__item}></p>
      </button>
    </header>
  )
}

export default Header
