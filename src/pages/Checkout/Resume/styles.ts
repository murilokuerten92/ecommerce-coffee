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
`;

export const AddressTitle = styled.header`
  display: flex;
  column-gap: .5rem;
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