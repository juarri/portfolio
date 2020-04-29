import React from "react"

import svg from "./half-circle.svg"
import { Form } from "./Form"

import {
  Wrapper,
  Content,
  SectionHeading,
  Title,
  Email,
  HalfCircle,
} from "./styles"

const Contact = () => {
  return (
    <Wrapper id="Contact">
      <Content>
        <SectionHeading>- Contact</SectionHeading>
        <Title>
          Any Questions?
          <br />
          Wanna Talk Web Dev?
          <br />
          <span>Let's Talk</span>
        </Title>

        <HalfCircle src={svg} alt="Next.Js Logo" />
      </Content>
      <Email>something@thing.com</Email>
      <Form />
    </Wrapper>
  )
}

export { Contact }
