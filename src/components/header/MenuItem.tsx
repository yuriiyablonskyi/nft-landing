import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './Header.module.sass'

interface MenuItemProps {
  href: string
  variants: any
  children: React.ReactNode
}

const MenuItem: FC<MenuItemProps> = ({ href, variants, children }) => (
  <motion.a
    variants={variants}
    whileHover={{
      y: -2,
      color: '#A259FF',
      transition: { duration: 0.3 },
    }}
    className={styles.header__link}
    href={href}
  >
    {children}
  </motion.a>
)

export default MenuItem
