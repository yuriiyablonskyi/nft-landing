import { FC } from 'react'
import { ButtonProps } from '../../../../types'
import styles from './Button.module.sass'

const Button: FC<ButtonProps> = ({ icon, text, type = 'button', color = 'purple' }) => {
  const buttonClass = color === 'purple' ? styles.buttonPurple : styles.buttonWhite
  return (
    <button type={type} className={buttonClass}>
      {icon && <img src={icon} alt={text} className={styles.icon} />}
      <span className={styles.button__text}>{text}</span>
    </button>
  )
}

export default Button
