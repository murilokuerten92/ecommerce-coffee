import styled from 'styled-components'

export const BoxCartLength = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

position: absolute;
width: 22px;
height: 22px;
right: -8.35px;
top: -8px;

background: ${({ theme }) => theme.primary_dark};
border-radius: 1000px;

flex: none;
order: 1;
flex-grow: 0;
z-index: 1;
color: ${({ theme }) => theme.shape};
font-weight: bold;
font-size: 0.875rem;
`
