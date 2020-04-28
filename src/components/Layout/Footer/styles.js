import styled from "styled-components"

export const Wrapper = styled.footer`
  margin: 0;
  padding: 7.5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.darkerBlue};
`

export const Logo = styled.svg`
  margin-bottom: 5%;
  width: auto;
  height: 30px;

  fill: ${({ theme }) => theme.colors.white};
`

export const Text = styled.p`
  ${({ theme }) => theme.text.text};
  color: ${({ theme }) => theme.colors.white};

  span {
    font-weight: 900;
  }
`
