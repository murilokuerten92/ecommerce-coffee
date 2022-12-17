import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 10rem;
  height: calc(100vh - 10rem);

  @media (max-width: 1360px) {
    margin: 0 4rem;
  }

  @media (max-width: 960px) {
    margin: 0 2rem;
  }
`
