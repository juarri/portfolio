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

  @media only screen and (min-width: 750px) {
    all: unset;
  }
`

export const Ul = styled.ul`
  width: 100%;
  padding: 5%;

  @media only screen and (min-width: 750px) {
    all: unset;

    display: flex;
  }
`

export const Hr = styled.hr`
  width: 70%;

  @media only screen and (min-width: 750px) {
    display: none;
  }
`

export const Li = styled.li`
  list-style: none;
  text-align: center;

  margin: 7vh;

  a {
    transition: 0.2s ease-in-out;

    color: ${({ theme }) => theme.colors.grey};
    cursor: pointer;

    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  .active {
    color: ${({ theme }) => theme.colors.white};
  }

  @media only screen and (min-width: 750px) {
    all: unset;

    position: relative;
    /* right: 10%; */

    margin-left: 3em;
  }
`
