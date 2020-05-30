import React, { useState } from "react"

import { Section } from "../Section"

import projectsData from "./projectsData"
import { Project } from "./Project"
import { Container, Buttons, Button } from "./styles"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0])

  const renderButtons = projectsData.map((project, i) => (
    <Button
      key={i}
      onClick={() => setSelectedProject(projectsData[i])}
      selected={project === selectedProject}
    >
      {i + 1}
    </Button>
  ))

  return (
    <Section id="Projects" heading="- Projects" bgColor="#252734">
      <Container>
        <Buttons>{renderButtons}</Buttons>
        <Project project={selectedProject} />
      </Container>
    </Section>
  )
}

export { Projects }
