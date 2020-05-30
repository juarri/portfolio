import React from "react"
import useClipboard from "react-use-clipboard"

import { Section } from "../Section"

import svg from "./half-circle.svg"
import { Form } from "./Form"

import { Container, Content, Title, Email, HalfCircle } from "./styles"

const Contact = () => {
  const [isCopied, setCopied] = useClipboard("superjuarri11@gmail.com", {
    // `isCopied` will go back to `false` after 1000ms.
    successDuration: 3000,
  })

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

          <Email onClick={setCopied} isCopied={isCopied}>
            superjuarri11@gmail.com{" "}
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </Email>

          <HalfCircle src={svg} alt="Next.Js Logo" />
        </Content>
        <Form />
      </Container>
    </Section>
  )
}

export { Contact }
