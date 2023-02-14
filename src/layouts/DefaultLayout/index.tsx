import { Header } from '@/components/Header'

import { Outlet } from 'react-router-dom'
import * as S from './styles'

export default function DefaultLayout() {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  )
}
