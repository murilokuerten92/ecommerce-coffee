import styled from 'styled-components';
import { Icon } from '@/icon/icon';

type IconProps = {
    icon: string;
}

export const Card = styled.div`
   background-color: ${({ theme }) => theme.base_card};
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
    margin-top: -40px;
`;

export const TagsCoffeeType = styled.header`
  background-color: ${({ theme }) => theme.primary_light};
  border-radius: 100px;

  .coffee_type {
    color: ${({ theme }) => theme.primary_dark};
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 0.7rem;
    padding: 4px 8px;
  }
`;

export const Tags = styled.section`
   display: flex;
   column-gap: .2rem;
   margin-top: 12px;
`;


export const Title = styled.h1`
    font-weight: bold;
    font-family: 'Baloo 2';
    font-size: 1.2rem;
    color: ${({ theme }) => theme.primary_text};
    margin-top: 16px;
`;

export const SubTitle = styled.h2`
    font-weight: 400;
    font-family: 'Roboto';
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text_light};
    text-align: center;
    margin-top: 8px;
`;

export const CountBox = styled.div`
   display: flex;
   align-items: center;
   column-gap: 0.4rem;
   padding: 8px;
   background-color: ${({ theme }) => theme.background_count};
   border-radius: 6px;
   .count {
    border: none;
    background: transparent;
    cursor: pointer;
   }

   .countText{
     font-weight: 400;
     color: ${({ theme }) => theme.text_bold};
     font-size: 1rem;
   }
`;

export const CartBox = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`;

export const Footer = styled.footer`
   display: flex;
   margin-top: 24px;
   align-items: center;
   justify-content: space-between;
   width: 100%;

   .countSum {
    display: flex;
    column-gap: .6rem;
   }

   .currencySymbol {
    font-weight: 400;
    font-size: 0.8rem;
    margin-right: 0.2rem;
    margin-top: 4px;
   }

   .currencyValue {
    font-weight: bold;
    font-size: 1.4rem;
    font-family: 'Baloo 2';
   }
`;

export const CartIcon = styled(Icon).attrs<IconProps>(props => ({
    icon: props.icon ?? null
}))`
  
  `;

export const AddIcon = styled(Icon).attrs(({
    icon: 'add'
}))`
  
  `;

export const RemoveIcon = styled(Icon).attrs(({
    icon: 'remove'
}))`
  
  `;


