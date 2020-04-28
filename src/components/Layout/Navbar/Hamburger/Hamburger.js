import React from "react"
import styled from "styled-components"

const Wrapper = styled.button`
  display: block;
  cursor: pointer;

  padding: 1em 0.5em;

  background: none;
  border: none;

  z-index: 900;
`

const Lines = styled.div`
  z-index: 901;

  position: relative;

  &,
  &:before,
  &:after {
    width: 1.75em;
    height: 3px;
    background: ${({ theme }) => theme.colors.white};

    transform: ${({ navOpen }) => navOpen && "rotate(45deg)"};

    transition: transform 0.2s ease-in-out;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
  }

  &:before {
    bottom: 8px;

    opacity: ${({ navOpen }) => (navOpen ? "0" : "1")};
  }

  &:after {
    top: 8px;
    transform: ${({ navOpen }) => navOpen && "rotate(90deg) translate(-8px)"};
  }
`

// const Line = styled.div`
//   margin: 5px;

//   width: 25px;
//   height: 2px;

//   background: ${({ theme }) => theme.colors.white};
// `

const Hamburger = ({ navOpen, setNavOpen }) => {
  return (
    <Wrapper onClick={() => setNavOpen(prev => !prev)}>
      <Lines navOpen={navOpen} />
    </Wrapper>
  )
}

export { Hamburger }
