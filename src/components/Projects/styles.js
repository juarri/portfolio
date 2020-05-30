import styled from "styled-components"

export const Container = styled.div`
  @media only screen and (min-width: 750px) {
    padding: 7vh 0;

    display: grid;
    gap: 10%;
    grid-template-columns: auto auto;

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

  color: ${({ selected }) => (selected ? "var(--dark-blue)" : "var(--white)")};
  background-color: ${({ selected }) =>
    selected ? "var(--main)" : "var(--dark-blue)"};

  border: none;
  cursor: pointer;

  transition: 0.2s;

  :hover {
    background-color: var(--main);
    color: var(--dark-blue);
  }
`
