import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import confettiSvg from "../../images/confetti.svg"

import {
  Wrapper,
  Container,
  ConfettiWrapper,
  Confetti,
  Content,
  Hey,
  Title,
  SubTitle,
  Text,
  Buttons,
  Button,
} from "./styles"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <ConfettiWrapper>
        <Confetti src={confettiSvg} />
        <Confetti src={confettiSvg} />
      </ConfettiWrapper>

      <Container id="Header">
        <Content>
          <Hey>Hey, I'm</Hey>
          <Title>Julian Rivera</Title>
          <SubTitle>Front End Web Developer</SubTitle>
          <Text>
            A junior in the field that is excited to expand his skills and
            create sites that satisfy the user's needs.
          </Text>
          <Buttons>
            <Button>Check Me Out</Button>
            <Button secondary>Download CV</Button>
          </Buttons>
        </Content>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Container>
    </Wrapper>
  )
}

export { Header }
