import { ReactNode } from 'react'

export interface ButtonProps {
  icon?: string
  type?: 'button' | 'submit' | 'reset'
  color?: 'purple' | 'white'
  text?: string
}

export interface SectionHeaderProps {
  title: string
  subtitle: string
}

export interface СontainerProps {
  children: ReactNode
}

export interface BurgerMenuProps {
  menuOpen: boolean
  toggleMenu: () => void
}

export interface MenuProps {
  menuOpen: boolean
  selectedLanguage: LanguageOption
  options: LanguageOption[]
  handleChangeLanguage: (selectedOption: LanguageOption) => void
}

export interface SelectProps {
  options: LanguageOption[]
  selectedLanguageValue: string
  onChangeLanguage: (option: LanguageOption) => void
}
