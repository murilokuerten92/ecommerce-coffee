import styled from 'styled-components'

export const Container = styled.main`
  display:grid;
  grid-template-columns: 1fr 448px;
  background-color: ${({ theme }) => theme.base_card};
`;

export const Address = styled.section`
  background-color: ${({ theme }) => theme.base_card};
`;

export const Resume = styled.section`
  background-color: ${({ theme }) => theme.base_card};
`;