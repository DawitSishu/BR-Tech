import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects we've worked on recently.
          currenty not available but stay tuned!!
        </p>
        
      </Container>
    </Container>
  );
}

export default Projects;
