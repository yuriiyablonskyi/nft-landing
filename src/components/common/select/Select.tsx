import { useState, FC, useEffect, useRef } from 'react'
import { motion, Variants } from 'framer-motion'
import styles from './Select.module.sass'
import { InternetIcon } from '../../../assets/icons'
import { LanguageOption } from '../../../../types'

interface SelectProps {
  options: LanguageOption[]
  selectedLanguageValue: string
  onChangeLanguage: (option: LanguageOption) => void
}

const menuVariants: Variants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
    },
  },
  closed: {
    clipPath: 'inset(0% 50% 100% 50% round 10px)',
    opacity: 0,
    y: -10,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.5,
      delay: 0.2,
    },
  },
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

const Select: FC<SelectProps> = ({ options, selectedLanguageValue, onChangeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(prev => !prev)
  }

  // Close the dropdown when an option is selected
  const handleOptionSelect = (option: LanguageOption) => {
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

    // Add and clean up the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.wrapper} ref={selectRef}>
      <motion.button onClick={toggleDropdown} whileTap={{ scale: 0.9 }} className={styles.select}>
        <img src={InternetIcon} alt="" className={styles.select__icon} />
        <span className={styles.select__value}>{selectedLanguageValue}</span>
      </motion.button>

      <motion.ul
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className={styles.select__menu}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {options.map(option => (
          <motion.li
            key={option.value}
            onClick={() => handleOptionSelect(option)}
            className={styles.select__item}
            variants={itemVariants}
          >
            {option.label}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Select
