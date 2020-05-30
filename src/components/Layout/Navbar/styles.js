import styled from "styled-components"

export const Wrapper = styled.div`
  z-index: 900;
  position: sticky;
  top: 0;

  background-color: var(--darker-blue);

  display: flex;
  justify-content: center;

  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`

export const Container = styled.div`
  z-index: 900;

  width: 100%;
  max-width: var(--max-width);
  padding: 5%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 750px) {
    padding: 2.75vh 5%;
  }
`

export const Logo = styled.svg`
  width: auto;
  height: 28px;

  fill: var(--white);

  cursor: pointer;

  transition: fill 0.2s ease-in-out;

  :hover,
  :focus {
    fill: var(--main);
  }
`
