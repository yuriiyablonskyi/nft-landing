import { useState, FC } from 'react'
import styles from './Select.module.sass'
import { InternetIcon } from '../../../assets/icons'

const Select: FC = ({ options, defaultOption, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(defaultOption)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = option => {
    setSelectedValue(option)
    setIsOpen(false)
    if (onChange) {
      onChange(option.value)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div onClick={toggleDropdown} className={styles.select}>
        <img src={InternetIcon} alt="" className={styles.select__icon} />
        <span className={styles.select__value}>{selectedValue.value}</span>
      </div>

      {isOpen && (
        <ul className={styles.select__menu}>
          {options.map(option => (
            <li key={option.value} onClick={() => handleOptionSelect(option)} className={styles.select__item}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default Select
