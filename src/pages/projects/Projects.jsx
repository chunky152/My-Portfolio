import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../../components/Particle";
import bitsOfCode from "../../assets/projects/Askmak.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="cyan">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AskMakChatbot"
              description="A full-stack chatbot application that allows users to sign up, log in, and engage in real-time conversations with an AI assistant. The system features secure authentication, message history, role-based chat interactions, and a clean, responsive user interface. Built with modern web technologies, AskMakChatbot provides an efficient and interactive platform for AI-assisted communication."
              ghLink="https://github.com/chunky152/askmakchatbot.git"
              demoLink="http://147.224.178.246/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
