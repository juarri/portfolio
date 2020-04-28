import React from "react"

import { Wrapper, Hr, Ul, Li, A } from "./styles"

const Nav = ({ navOpen }) => {
  return (
    <Wrapper navOpen={navOpen}>
      <Ul>
        <Li>
          <A href="/">Home</A>
        </Li>
        <Hr />
        <Li>
          <A href="/">About</A>
        </Li>
        <Hr />
        <Li>
          <A href="/">Portfolio</A>
        </Li>
        <Hr />
        <Li>
          <A href="/">Contact</A>
        </Li>
      </Ul>
    </Wrapper>
  )
}

export { Nav }
