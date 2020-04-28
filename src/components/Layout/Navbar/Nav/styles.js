import styled from "styled-components"

export const Wrapper = styled.nav`
  z-index: 300;

  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.darkerBlue};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  transform: ${({ navOpen }) =>
    navOpen ? "translate(0%, 0)" : "translate(100%, 0)"};

  transition: 0.3s ease-in-out;
`

export const Ul = styled.ul`
  width: 100%;
  padding: 5%;
`

export const Hr = styled.hr`
  width: 70%;
`

export const Li = styled.li`
  list-style: none;
  text-align: center;

  margin: 7vh;
`

export const A = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  ${({ theme }) => theme.text.text}
`
