import React from "react"

import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

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
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export { Layout }
