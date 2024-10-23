import { FC } from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuItem'
import Button from '../button/Button'
import Select from '../select/Select'
import styles from './Header.module.sass'
import { UserIcon } from '../../assets/icons'
import { MenuProps } from '../../../types'

const menuVariants = {
  hidden: {
    x: '-100%',
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.15,
      staggerDirection: -1,
      ease: 'easeInOut',
    },
  },
  visible: {
    x: '0%',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
}

const childVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

const Menu: FC<MenuProps> = ({ menuOpen, t, selectedLanguage, options, handleChangeLanguage }) => (
  <motion.nav
    variants={menuVariants}
    initial="visible"
    animate={menuOpen ? 'visible' : 'hidden'}
    className={`${styles.header__list} ${menuOpen ? 'menuOpen' : ''}`}
  >
    <MenuItem href="#marketplace" variants={childVariants}>
      {t('layout.header.menu.marketplace')}
    </MenuItem>
    <MenuItem href="#rankings" variants={childVariants}>
      {t('layout.header.menu.rankings')}
    </MenuItem>
    <MenuItem href="#connect_a_wallet" variants={childVariants}>
      {t('layout.header.menu.connectWallet')}
    </MenuItem>
    <motion.div variants={childVariants}>
      <Select
        options={options}
        selectedLanguageValue={selectedLanguage.value}
        onChangeLanguage={handleChangeLanguage}
      />
    </motion.div>
    <motion.div variants={childVariants} style={{ zIndex: '-1' }}>
      <Button icon={UserIcon} text={t('layout.header.menu.buttonText')} />
    </motion.div>
  </motion.nav>
)

export default Menu
