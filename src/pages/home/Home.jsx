import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../assets/images/home-main.webp";
import Particle from "../../components/Particle";
import Introduction from "./Introduction";
import Typewriter from "./Typewriter";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUWANGUZI ALVIN KIGGUNDU</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", paddingBottom: 20 }}>
                <Typewriter />
              </div>

              <div style={{ paddingLeft: 50, textAlign: "left", display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <Button as={Link} to="/project" style={{ padding: "10px 24px", fontWeight: "600", backgroundColor: "#06b6d4", borderColor: "#06b6d4" }}>
                  View Projects
                </Button>
                <Button as={Link} to="/resume" variant="outline-dark" style={{ padding: "10px 24px", fontWeight: "600" }}>
                  View Resume
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-img"
                width="775"
                height="817"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Introduction />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="cyan">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons" style={{ display: "inline-flex", alignItems: "center" }}>
                <a
                  href="https://github.com/chunky152"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
                <span style={{ marginLeft: "10px", fontWeight: "600", fontSize: "1.2em", color: "black" }}>GitHub</span>
              </li>
              <li className="social-icons" style={{ display: "inline-flex", alignItems: "center" }}>
                <a
                  href="https://www.linkedin.com/in/muwanguzi-alvin-kiggundu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
                <span style={{ marginLeft: "10px", fontWeight: "600", fontSize: "1.2em", color: "black" }}>LinkedIn</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
