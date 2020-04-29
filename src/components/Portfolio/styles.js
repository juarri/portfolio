import styled from "styled-components"

export const Container = styled.div`
  @media only screen and (min-width: 750px) {
    padding: 7vh 0;

    display: grid;
    gap: 10%;
    grid-template-columns: auto 1fr;

    align-items: center;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 750px) {
    height: 100%;
    flex-direction: column;
  }
`

export const Button = styled.button`
  width: 50px;
  height: 50px;

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.main : theme.colors.grey};

  border: none;
  cursor: pointer;

  transition: 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    color: ${({ theme }) => theme.colors.main};
  }
`
