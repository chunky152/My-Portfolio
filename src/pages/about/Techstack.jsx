import React from "react";
import { Col, Row } from "react-bootstrap";
import Kubernates from "../../assets/tech-icons/Kubernates.svg";
import Docker from "../../assets/tech-icons/Docker.svg";
import GCP from "../../assets/tech-icons/Google Cloud.svg";
import Linux from "../../assets/tech-icons/Linux.svg";
import Go from "../../assets/tech-icons/go.svg";
import Python from "../../assets/tech-icons/Python.svg";
import Kafka from "../../assets/tech-icons/Kafka.svg";
import SQL from "../../assets/tech-icons/SQL.svg";
import Redis from "../../assets/tech-icons/Redis.svg";
import Node from "../../assets/tech-icons/Node.svg";
import Typescript from "../../assets/tech-icons/Typescript.svg";
import Git from "../../assets/tech-icons/Git.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="kubernetes" className="tech-icon-images" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={GCP} alt="GCP" className="tech-icon-images" />
        <div className="tech-icons-text">GCP</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt="Go" className="tech-icon-images" />
        <div className="tech-icons-text">Go</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" className="tech-icon-images" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Kafka} alt="Kafka" className="tech-icon-images" />
        <div className="tech-icons-text">Kafka</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" className="tech-icon-images" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="redis" className="tech-icon-images" />
        <div className="tech-icons-text">Redis</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" className="tech-icon-images" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" className="tech-icon-images" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
