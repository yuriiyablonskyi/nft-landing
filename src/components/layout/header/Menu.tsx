import { FC } from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuItem'
import Button from '../../common/button/Button'
import Select from '../../common/select/Select'
import { LanguageOption } from '../../../../types'
import styles from './Header.module.sass'
import { UserIcon } from '../../../assets/icons'

interface MenuProps {
  menuOpen: boolean
  t: any
  selectedLanguage: LanguageOption
  options: LanguageOption[]
  handleChangeLanguage: (selectedOption: LanguageOption) => void
}

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
      duration: 0.5,
    },
  },
}

const childVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const Menu: FC<MenuProps> = ({ menuOpen, t, selectedLanguage, options, handleChangeLanguage }) => (
  <motion.nav
    variants={menuVariants}
    initial="visible"
    animate={!menuOpen ? 'visible' : 'hidden'}
    className={styles.header__list}
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
