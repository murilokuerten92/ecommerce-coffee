import styled from 'styled-components'

import { Icon } from '@/icon/icon'

type IconProps = {
  icon: string
}

export const Container = styled.main`
  width: 100%;
`

export const Card = styled.div`
  border: 1px solid transparent;
  border-radius: 6px 36px;
  margin-top: 40px;
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(45deg, #dbac2c, #8047f8) border-box;
`

export const Box = styled.div`
  display: flex;
  column-gap: 6rem;
  justify-content: space-between;
  width: 100%;
  img {
    height: 19rem;
    max-width: 492px;
    @media (max-width: 960px) {
      display: none;
    }
  }
`

export const Title = styled.h1`
  font-weight: 800;
  font-family: 'Baloo 2';
  font-size: 2rem;
  color: ${({ theme }) => theme.primary_dark};
`

export const SubTitle = styled.h2`
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 1.125rem;
  color: ${({ theme }) => theme.primary_text};
`

export const Item = styled.section`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`

export const ItemInfo = styled.section`
  display: flex;
  flex-direction: column;
`

export const CardContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const BoxItem = styled.div`
  background: ${({ color }) => color};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
`

export const FaqIcon = styled(Icon).attrs<IconProps>((props) => ({
  icon: props.icon ?? null,
}))``
