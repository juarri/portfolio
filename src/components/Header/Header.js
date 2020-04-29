import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Wrapper,
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
    <Wrapper id="Header">
      <Content>
        <Hey>Hey, I'm</Hey>
        <Title>Julian Rivera</Title>
        <SubTitle>Front End Web Developer</SubTitle>
        <Text>
          A junior in the field that is excited to expand his skills and create
          sites that satisfy the user's needs.
        </Text>
        <Buttons>
          <Button>Check Me Out</Button>
          <Button secondary>Download CV</Button>
        </Buttons>
      </Content>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </Wrapper>
  )
}

export { Header }
