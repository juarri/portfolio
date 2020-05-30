import React from "react"
import styled from "styled-components"

import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
`

// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Wrapper>
        <Navbar />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  )
}

export { Layout }
