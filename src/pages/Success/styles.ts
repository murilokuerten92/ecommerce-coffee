import styled from 'styled-components';

import { Icon } from '@/icon/icon';

type IconProps = {
    icon: string;
}

export const Container = styled.main`

  display: flex;
  column-gap: 6rem;
  justify-content: space-between;
  width: 100%;
  margin-top: 4rem;
`;


export const Card = styled.div`
   border: 1px solid;
   border-radius: 6px 36px;
   border-image: linear-gradient(45deg, #DBAC2C, #8047F8) border-box;
   margin-top: 40px;
`;

export const Box = styled.div`

 img{
    height: 19rem;
    max-width: 492px;
 }
`;

export const Title = styled.h1`
    font-weight: 800;
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${({ theme }) => theme.primary_dark};
`;

export const SubTitle = styled.h2`
    font-weight: 400;
    font-family: 'Roboto';
    font-size: 1.125rem;
    color: ${({ theme }) => theme.primary_text};
`;

export const Item = styled.section`
   display: flex;
`;

export const CardContent = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;

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

export const FaqIcon = styled(Icon).attrs<IconProps>(props => ({
    icon: props.icon ?? null
}))`
  
  `;