import React from "react"
import { Link } from "react-scroll"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import confettiSvg from "../../images/confetti.svg"

import {
  Wrapper,
  Container,
  ConfettiWrapper,
  Confetti,
  Content,
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
          <Title>
            <span>Hey, I'm</span>
            <br /> Julian Rivera
          </Title>

          <SubTitle>Front End Web Developer</SubTitle>
          <Text>
            A junior in the field that is excited to expand his skills and
            create sites that satisfy the user's needs.
          </Text>
          <Buttons>
            <Button>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-80}
                duration={750}
              >
                Check Me Out
              </Link>
            </Button>
            <Button secondary>Download CV</Button>
          </Buttons>
        </Content>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Container>
    </Wrapper>
  )
}

export { Header }
