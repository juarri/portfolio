import React, { useState } from "react"

import projectsData from "./projectsData"
import { Project } from "./Project"
import { Wrapper, SectionHeading, Buttons, Button } from "./styles"

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0])

  const renderButtons = projectsData.map((project, i) => (
    <Button
      key={i}
      onClick={() => setSelectedProject(projectsData[i])}
      selected={project === selectedProject}
    >
      {i}
    </Button>
  ))

  return (
    <Wrapper id="Portfolio">
      <SectionHeading>- Portfolio</SectionHeading>
      <Buttons>{renderButtons}</Buttons>
      <Project project={selectedProject} />
    </Wrapper>
  )
}

export { Portfolio }
