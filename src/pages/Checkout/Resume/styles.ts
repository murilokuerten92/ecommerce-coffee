import styled from 'styled-components'

export const Container = styled.main`
  display:grid;
  grid-template-columns: 1fr 448px;
  column-gap: 2rem;
`;

export const Address = styled.section`

`;

export const AddressContent = styled.div`
  background-color: ${({ theme }) => theme.base_card};
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const AddressRow = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const AddressForm = styled.div`
  display: grid;
  row-gap: 1rem;
  margin-top: 2rem;
`;

export const AddressHeader = styled.header`
  display: flex;
  column-gap: .5rem;
  align-items: center;
`;

export const AddressTitle = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text_accent};
  font-size: 1.2rem;
  font-family: 'Baloo 2';
  font-weight: bold;
`;

export const TitleAddress = styled.h2`
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

`;

export const ResumeContent = styled.div`
  background-color: ${({ theme }) => theme.base_card};
  padding: 40px;
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