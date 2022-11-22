import styled, { css } from 'styled-components'
import { Icon } from '@/icon/icon';

type Props = {
  active?: boolean
  disabled?: boolean
}

export const Container = styled.form`
  display:grid;
  grid-template-columns: 1fr 448px;
  column-gap: 2rem;
  @media (max-width: 960px) {
 grid-template-columns: repeat(1, 1fr);
}
`;

export const PersonalDatas = styled.section`
   display: flex;
   flex-direction: column;
   row-gap: 0.8rem;
`;

export const Card = styled.section`
   display: flex;
   flex-direction: column;
   border-radius: 6px;
   background-color: ${({ theme }) => theme.base_card};
`;

export const Content = styled.div`
  padding: 40px;
`;

export const Row = styled.div`
  display: flex;
  column-gap: 12px;

  @media (max-width: 960px) {
 flex-direction: column;
}
`;

export const ResumeRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ResumeColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .7rem;
`;

export const ResumeColumnPrice = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .7rem;
  align-items: flex-end;
`;

export const ProductsRow = styled.div`
  display: flex;
  column-gap: .6rem;
  justify-content: space-between;
   margin-bottom: 12px;
`;

export const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.background_count};
  margin: 24px 0;
`;


export const ProductsInfoRow = styled.div`
  display: flex;
  column-gap: .6rem;
  row-gap: 1.2rem;
`;

export const CoffeeImage = styled.img`
   height: 4rem;
   width: 4rem;
`;

export const ProductsColumn = styled.div`
  display: flex;
 flex-direction: column;
 row-gap: .6rem;
`;

export const ProductPrice = styled.h1`
  color: ${({ theme }) => theme.text_accent};
  font-size: 1.2rem;
  font-family: 'Baloo 2';
  font-weight: bold;
  align-self: flex-start;
  margin-top: -5px;
`;


export const ProductTotal = styled.strong`
  color: ${({ theme }) => theme.primary_text};
  font-size: 1.2rem;
  font-family: 'Roboto';
  font-weight: bold;
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

   button{
    display: flex;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: none
   }

   .countText{
     font-weight: 400;
     color: ${({ theme }) => theme.text_bold};
     font-size: 1rem;
   }
`;



export const RowPaymentMethods = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
    row-gap: 12px;
  }
`;

export const Form = styled.div`
  display: grid;
  row-gap: 1rem;
  margin-top: 2rem;
`;

export const Header = styled.header`
  display: flex;
  column-gap: .5rem;
  align-items: center;
`;

export const HeaderColumn = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text_accent};
  font-size: 1.2rem;
  font-family: 'Baloo 2';
  font-weight: bold;
`;

export const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.text_accent};
  font-size: 1rem;
  font-family: 'Roboto';
  font-weight: 400;
`;

export const ResumeInfo = styled.p`
  color: ${({ theme }) => theme.text_accent};
  font-size: 0.875rem;
  font-family: 'Roboto';
  font-weight: 400;
`;

export const Resume = styled.section`
 display: flex;
 flex-direction: column;
 row-gap: 0.8rem;
`;

export const ResumeContent = styled.div`
  background-color: ${({ theme }) => theme.base_card};
  padding: 40px;
`;

export const PaymentMethodCard = styled.div<Props>`
  background-color: ${({ theme }) => theme.background_count};
  padding: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  column-gap: 1rem;
  min-width: 177px;
  border-radius: 6px;

  ${({ active }) => active && css`
    border: 1px solid ${({ theme }) => theme.secondary_dark};
    background-color: ${({ theme }) => theme.secondary_light};
  `}


`;

export const PaymentMethodTitle = styled.span`
  color: ${({ theme }) => theme.text_accent};
  font-size: 0.8rem;
  font-family: 'Roboto';
  font-weight: 400;
`;


export const AddressInput = styled.input`
  background-color: ${({ theme }) => theme.gray_light};
  border: 1px solid ${({ theme }) => theme.background_count};
  border-radius: 4px;
  padding: 12px;
  font-size: 1rem;

  &:focus {
    box-shadow: none;
    border-color:  ${({ theme }) => theme.primary};
  }

  &::placeholder{
    color: ${({ theme }) => theme.text_light};
    font-weight: 400;
  }
`

export const AddressInputPattern = styled(AddressInput)`
  width: 14rem;
`

export const AddressStreet = styled(AddressInput)`
  flex: 1;
`

export const AddressState = styled(AddressInput)`
  width: 3.6rem;
`

export const AddressCity = styled(AddressInput)`
  flex: 1;
`

export const ConfirmButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.shape};
  background-color: ${({ theme }) => theme.primary};
  font-size: .8rem;
  font-family: 'Roboto' ;
  font-weight: 700;
  padding: 12px;
  width: 100%;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    filter: brightness(0.8);
    border: none;
    transition: 8ms;
  }

  &:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }
`;

export const RemoveIcon = styled(Icon).attrs(({
  icon: 'remove'
}))`

  `;

export const AddIcon = styled(Icon).attrs(({
  icon: 'add'
}))`

  `;

