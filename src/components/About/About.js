import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Section } from "../Section"

import { Container, Content, Button, Arrow } from "./styles"

const StyledImg = styled(Img)`
  width: 65%;
  height: auto;

  justify-self: center;
  background-blend-mode: screen;
  border-radius: 50%;

  /* box-shadow: var(--shadow-flat); */
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "HeadVignette.png" }) {
        childImageSharp {
          fluid(
            cropFocus: NORTH
            # duotone: { highlight: "#f00e2e", shadow: "#192550" }
            maxWidth: 1000
            maxHeight: 1000
          ) {
            src
            srcSet
            base64
            aspectRatio
            sizes
          }
        }
      }
    }
  `)

  return (
    <Section id="About" heading="- Who Am I?" bgColor="#2d303f">
      <Container>
        <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
        <Content>
          <h4>Who Am I?</h4>
          <h5>A JUNIOR WEB DEVELOPER IN SOUTHERN CALIFORNIA</h5>
          <p>
            Enthusiastic web developer who is interested in all things tech.
            Skilled at front-end technologies and problem solving in order to
            produce fantastic websites. Ready to develop with a team and grow
            knowledge by gaining practical experience.
          </p>
          <Button
            to={"Contact"}
            spy={true}
            smooth={true}
            offset={-50}
            duration={750}
          >
            Let’s Chat{" "}
            <Arrow fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </Arrow>
          </Button>
        </Content>
      </Container>
    </Section>
  )
}

export { About }
