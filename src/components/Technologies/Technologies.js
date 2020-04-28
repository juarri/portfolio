import React from "react"

import { Wrapper } from "./styles"

import HtmlSvg from "../../images/technologies/Html.svg"
import CssSvg from "../../images/technologies/Css.svg"
import JsSvg from "../../images/technologies/Js.svg"
import ReactSvg from "../../images/technologies/React.svg"
import StyledComponentsSvg from "../../images/technologies/StyledComponents.svg"
import NextJsSvg from "../../images/technologies/NextJs.svg"
import GatsbySvg from "../../images/technologies/Gatsby.svg"

const Technologies = () => {
  return (
    <Wrapper>
      <img src={HtmlSvg} alt="Html Logo" />
      <img src={CssSvg} alt="Css Logo" />
      <img src={JsSvg} alt="Javascript Logo" />
      <img src={ReactSvg} alt="React Logo" />
      <img src={StyledComponentsSvg} alt="Styled Components Logo" />
      <img src={NextJsSvg} alt="Next. Js Logo" />
      <img src={GatsbySvg} alt="Gatsby JS Logo" />
    </Wrapper>
  )
}

export { Technologies }
