import styled from 'styled-components';
import { Icon } from '@/icon/icon';

type IconProps = {
    icon: string;
}

export const Card = styled.div`
   background-color: ${({ theme }) => theme.secondary_light};
   border-radius: 6px 36px;

   max-width: 256px;
`;

export const CardContent = styled.section`
   padding: 20px 24px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const CoffeeImage = styled.img`
    margin-top: -30px;
`;

export const TagsCoffeeType = styled.header`
  

  &.coffee_type {

  }
`;

export const Title = styled.h1`
    font-weight: bold;
    font-family: 'Baloo 2';
    font-size: 1.2rem;
    color: ${({ theme }) => theme.primary_text};
`;

export const SubTitle = styled.h2`
    font-weight: 400;
    font-family: 'Roboto';
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text_light};
    text-align: center;
`;

export const CountBox = styled.div`
   
`;

export const CartBox = styled.div`
   
`;

export const Footer = styled.footer`
  

`;

export const CartIcon = styled(Icon).attrs<IconProps>(props => ({
    icon: props.icon ?? null
}))`
  
  `;


