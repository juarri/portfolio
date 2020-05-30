import React from "react"

import { GlobalStyle } from "../styles/GlobalStyle"

import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <GlobalStyle />

    <h1>Page Not Found</h1>
    <Link to="/">Home</Link>
  </>
)

export default NotFoundPage
