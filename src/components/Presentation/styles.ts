import styled from 'styled-components'
import { Icon } from '@/icon/icon';

type IconProps = {
  icon: string;
}

export const Container = styled.main`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  column-gap: 4.5rem;
`;

export const InfoSection = styled.section`
  
`

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  font-family: 'baloo 2';
  color: ${({ theme }) => theme.text_bold};
  line-height: 4rem;
`

export const SubTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Roboto';
  line-height: 1.6rem;
  margin-top: 1rem;
`;

export const Faq = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  column-gap: 3rem;
  margin-top: 3rem;
`;

export const FaqColumn = styled.div`

  `;

export const FaqChildren = styled.div`
   display: flex;
   align-items: center;
   column-gap: 1rem;
`

export const Box = styled.div`
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

export const FaqText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text_accent};
`

export const InfoImage = styled.section`
`

export const CoffeeLogo = styled.img`


`

export const FaqIcon = styled(Icon).attrs<IconProps>(props => ({
  icon: props.icon ?? null
}))`

`;