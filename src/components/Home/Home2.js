import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="cyan"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Platform Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="cyan">
                  {" "}
                  JavaScript, Typescript, Node.js, Python{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="cyan">
                  {" "}
                  Web Applications, Mobile Applications, Backend systems, Cloud systems and DevOps{" "}
                </b>
              </i>
              and exploring new ways to optimize and improve development and deployment processes.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="cyan"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="cyan">React.js</b> and{" "}
                <b className="cyan">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
