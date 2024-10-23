import { motion } from 'framer-motion'
import { FC } from 'react'
import { MenuProps } from '../../../types'
import { UserIcon } from '../../assets/icons'
import Button from '../button/Button'
import Select from '../select/Select'
import styles from './Header.module.sass'
import { useTranslation } from 'react-i18next'

const menuVariants = {
  hidden: {
    x: '100%',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.35,
    },
  },
  visible: {
    x: '0%',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.35,
    },
  },
}

const Menu: FC<MenuProps> = ({ menuOpen, selectedLanguage, options, handleChangeLanguage }) => {
  const { t } = useTranslation()

  return (
    <motion.nav
      variants={menuVariants}
      initial="visible"
      animate={menuOpen ? 'hidden' : 'visible'}
      className={styles.header__list}
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
      <Select
        options={options}
        selectedLanguageValue={selectedLanguage.value}
        onChangeLanguage={handleChangeLanguage}
      />
      <Button icon={UserIcon} text={t('layout.header.menu.buttonText')} />
    </motion.nav>
  )
}
export default Menu
