import 'styled-components'
import { defaultTheme } from '../styles'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}
