import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGithubactions,
  SiUbuntu,
  SiNaver,
  SiDocker,
  SiKubernetes,
  SiArgo,
  SiNotion,
  SiSelenium,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VSCode" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiGitlab />, name: "GitLab" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiSelenium />, name: "Selenium" },
    { icon: <SiUbuntu />, name: "Ubuntu" },
    { icon: <SiNaver />, name: "NCP" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiArgo />, name: "ArgoCD" },
    { icon: <SiNotion />, name: "Notion" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          style={{ textAlign: "center" }}
        >
          {tool.icon}
          <p style={{ fontSize: "14px", marginTop: "10px" }}>{tool.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
