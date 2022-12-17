import { ReactNode } from 'react'
import { BoxCartLength } from './styles'

interface BadgeProps {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return <BoxCartLength>{children}</BoxCartLength>
}
