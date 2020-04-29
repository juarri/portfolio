import React from "react"

import { Wrapper, Title, SubTitle, Description } from "./styles"

const Project = ({ project }) => {
  return (
    <Wrapper>
      <img src={project.imgSrc} alt={project.imgAlt} />
      <div>
        <Title>{project.name}</Title>
        <SubTitle>Difficulties</SubTitle>
        <Description>{project.difficulties}</Description>
        <SubTitle>Solutions</SubTitle>
        <Description>{project.solutions}</Description>
        <SubTitle>Technologies</SubTitle>
        <Description>{project.technologies}</Description>
      </div>
    </Wrapper>
  )
}

export { Project }
