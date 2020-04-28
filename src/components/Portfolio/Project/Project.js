import React from "react"

import { Title, SubTitle, Description } from "./styles"

const Project = ({ project }) => {
  return (
    <div>
      <img src={project.imgSrc} alt={project.imgAlt} />
      <Title>{project.name}</Title>
      <SubTitle>Difficulties</SubTitle>
      <Description>{project.difficulties}</Description>
      <SubTitle>Solutions</SubTitle>
      <Description>{project.solutions}</Description>
      <SubTitle>Technologies</SubTitle>
      <Description>{project.technologies}</Description>
    </div>
  )
}

export { Project }
