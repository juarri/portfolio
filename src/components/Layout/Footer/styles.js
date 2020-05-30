import styled from "styled-components"

export const Wrapper = styled.footer`
  margin: 0;
  padding: 7.5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--darker-blue);

  @media only screen and (min-width: 750px) {
    padding: 3vh 5%;
  }
`

export const Logo = styled.svg`
  margin-bottom: 5%;
  width: auto;
  height: 30px;

  fill: var(--white);

  @media only screen and (min-width: 750px) {
    margin-bottom: 0%;
  }
`

export const Text = styled.p`
  ${({ theme }) => theme.text.text};
  color: var(--white);

  span {
    font-weight: 900;
  }
`
