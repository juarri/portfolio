import React from "react"

import { Section } from "../Section"

import svg from "./half-circle.svg"
import { Form } from "./Form"

import { Container, Content, Title, Email, HalfCircle } from "./styles"

const Contact = () => {
  return (
    <Section id="Contact" heading="- Contact" bgColor="#252734">
      <Container>
        <Content>
          <Title>
            Any Questions?
            <br />
            Wanna Talk Web Dev?
            <br />
            <span>Let's Talk</span>
          </Title>

          <Email>something@thing.com</Email>

          <HalfCircle src={svg} alt="Next.Js Logo" />
        </Content>
        <Form />
      </Container>
    </Section>
  )
}

export { Contact }
