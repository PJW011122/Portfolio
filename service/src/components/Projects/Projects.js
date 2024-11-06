import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Landing Page"
              description=""
              ghLink="https://github.com/PJW011122/"
              demoLink="https://paaran.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio"
              description="네이버에서 제공하는 나눔 고딕 글꼴이 적용되었습니다"
              ghLink="https://github.com/PJW011122/Portfolio"
              demoLink="https://pjw.paaran.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog"
              description=""
              ghLink="https://github.com/PJW011122/Portfolio"
              demoLink="https://blog.paaran.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="파아란 코스"
              description=""
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://course.paaran.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
