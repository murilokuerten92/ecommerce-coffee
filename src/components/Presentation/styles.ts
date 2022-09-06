import styled from 'styled-components'
import { Icon } from '@/icon/icon'

export const Container = styled.main`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const InfoSection = styled.section`
`

export const Title = styled.h1`
`

export const SubTitle = styled.h2`
`

export const Faq = styled.div`
`

export const FaqColumn = styled.div`
`

export const FaqChildren = styled.div`
`

export const Box = styled.div`
  background: ${({ color }) => color};
  width: 2rem;
  height: 2rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FaqText = styled.span`
`

export const InfoImage = styled.section`
`

export const FaqIcon = styled(Icon).attrs(props => ({
  icon: props.icon ?? null
}))`

`;