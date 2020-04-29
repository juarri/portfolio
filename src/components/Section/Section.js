import React from "react"

import { Wrapper, Container, Heading } from "./styles"

const Section = ({ id, heading, bgColor, children }) => {
  return (
    <Wrapper id={id} bgColor={bgColor}>
      <Container>
        <Heading>{heading}</Heading>
        {children}
      </Container>
    </Wrapper>
  )
}

export { Section }
