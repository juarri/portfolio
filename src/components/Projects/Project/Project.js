import React from "react"

import { Wrapper, Title, SubTitle, Description } from "./styles"

const Project = ({ project }) => {
  return (
    <Wrapper>
      <img src={project.imgSrc} alt={project.imgAlt} />
      <div>
        <Title>{project.name}</Title>
        <SubTitle>Summary</SubTitle>
        <Description>{project.description}</Description>
        <SubTitle>Technologies</SubTitle>
        <Description>{project.technologies}</Description>
      </div>
    </Wrapper>
  )
}

export { Project }
