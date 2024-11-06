import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiNginx,
} from "react-icons/di";
import { SiPostgresql, SiSpring, SiFastapi } from "react-icons/si";

function Techstack() {
  const techStack = [
    { icon: <DiHtml5 />, name: "HTML" },
    { icon: <DiCss3 />, name: "CSS" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiSpring />, name: "Spring" },
    { icon: <DiNginx />, name: "NginX" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          style={{ textAlign: "center" }}
        >
          {tech.icon}
          <p style={{ marginTop: "10px", fontSize: "14px" }}>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
