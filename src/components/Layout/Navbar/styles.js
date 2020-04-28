import styled from "styled-components"

export const Wrapper = styled.div`
  z-index: 900;
  position: sticky;
  top: 0;

  padding: 5%;
  background-color: ${({ theme }) => theme.colors.darkerBlue};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.svg`
  width: auto;
  height: 30px;

  fill: ${({ theme }) => theme.colors.white};
`
