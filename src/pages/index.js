import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import { theme } from "../styles/theme"

import { Layout } from "../components/Layout"
import { Header } from "../components/Header"
import { About } from "../components/About"
import { Technologies } from "../components/Technologies"
import { Portfolio } from "../components/Portfolio"
import { Contact } from "../components/Contact"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </Layout>
    </ThemeProvider>
  </>
)

export default IndexPage
