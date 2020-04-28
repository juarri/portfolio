import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Wrapper, SectionHeading, Content, Button } from "./styles"

const About = () => {
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
      <SectionHeading>- Who Am I?</SectionHeading>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <Content>
        <h4>Who Am I?</h4>
        <h5>A JUNIOR WEB DEVELOPER IN SOUTHERN CALIFORNIA</h5>
        <p>
          I am passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations. All of my work is produced locally from
          Moscow, Idaho. What would you do if you had a software expert
          available at your fingertips?
        </p>
        <Button>Let’s Chat</Button>
      </Content>
    </Wrapper>
  )
}

export { About }
