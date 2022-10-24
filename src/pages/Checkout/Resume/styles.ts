import styled, { css } from 'styled-components'

type Props = {
  active?: boolean
}

export const Container = styled.main`
  display:grid;
  grid-template-columns: 1fr 448px;
  column-gap: 2rem;
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
`;

export const RowPaymentMethods = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 32px;
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
  font-size: 0.8rem;
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