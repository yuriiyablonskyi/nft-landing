import { useState, FC, useEffect, useRef } from 'react'
import styles from './Select.module.sass'
import { InternetIcon } from '../../../assets/icons'

interface SelectProps {
  options: { value: string; label: string }[]
  selectedLanguageValue: string
  onChangeLanguage: (option: { value: string; label: string }) => void
}

const Select: FC<SelectProps> = ({ options, selectedLanguageValue, onChangeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(prev => !prev)
  }

  // Close the dropdown when an option is selected
  const handleOptionSelect = (option: { value: string; label: string }) => {
    setIsOpen(false)
    onChangeLanguage(option)
  }

  // Handle clicks outside the select menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    // Add the event listener to detect outside clicks
    document.addEventListener('mousedown', handleClickOutside)

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.wrapper} ref={selectRef}>
      <div onClick={toggleDropdown} className={styles.select}>
        <img src={InternetIcon} alt="" className={styles.select__icon} />
        <span className={styles.select__value}>{selectedLanguageValue}</span>
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
