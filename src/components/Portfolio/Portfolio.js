import React, { useState } from "react"

import { Section } from "../Section"

import projectsData from "./projectsData"
import { Project } from "./Project"
import { Container, Buttons, Button } from "./styles"

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
    <Section id="Portfolio" heading="- Portfolio" bgColor="#2d303f">
      <Container>
        <Buttons>{renderButtons}</Buttons>
        <Project project={selectedProject} />
      </Container>
    </Section>
  )
}

export { Portfolio }
