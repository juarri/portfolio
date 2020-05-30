import React from "react"

import { Link } from "react-scroll"

import { Wrapper, Hr, Ul, Li } from "./styles"

const Nav = ({ navOpen, setNavOpen }) => {
  return (
    <Wrapper navOpen={navOpen}>
      <Ul>
        <Li>
          <MyLink setNavOpen={setNavOpen} to="Header" offset={-100}>
            Home
          </MyLink>
        </Li>
        <Hr />
        <Li>
          <MyLink setNavOpen={setNavOpen} to="Projects" offset={-200}>
            Projects
          </MyLink>
        </Li>
        <Hr />
        <Li>
          <MyLink setNavOpen={setNavOpen} to="About" offset={-250}>
            About
          </MyLink>
        </Li>
        <Hr />
        <Li>
          <MyLink setNavOpen={setNavOpen} to="Contact" offset={-150}>
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
