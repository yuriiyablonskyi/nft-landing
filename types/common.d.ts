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
