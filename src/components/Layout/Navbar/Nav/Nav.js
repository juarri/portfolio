import React from "react"

import { Link } from "react-scroll"

import { Wrapper, Hr, Ul, Li } from "./styles"

const Nav = ({ navOpen, setNavOpen }) => {
  return (
    <Wrapper navOpen={navOpen}>
      <Ul>
        <Li>
          <MyLink setNavOpen={setNavOpen} to="Header" offset={-300}>
            Home
          </MyLink>
        </Li>
        <Hr />
        <Li>
          <MyLink setNavOpen={setNavOpen} to="About">
            About
          </MyLink>
        </Li>
        <Hr />
        <Li>
          <MyLink setNavOpen={setNavOpen} to="Portfolio">
            Portfolio
          </MyLink>
        </Li>
        <Hr />
        <Li>
          <MyLink setNavOpen={setNavOpen} to="Contact">
            Contact
          </MyLink>
        </Li>
      </Ul>
    </Wrapper>
  )
}

const MyLink = ({ setNavOpen, to, children, offset }) => {
  return (
    <Link
      onClick={() => setNavOpen(false)}
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={offset || -50}
      duration={750}
    >
      {children}
    </Link>
  )
}

export { Nav }
