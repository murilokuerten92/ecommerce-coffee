import styled from 'styled-components'

export const Container = styled.main`
  .CoffeeTitle {
    margin-top: 4rem;
  }
`

export const SectionCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`
