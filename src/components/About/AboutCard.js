import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="cyan">Muwanguzi Alvin Kiggundu</span>{" "}
            from <span className="cyan">Uganda</span>.
            <br />
            I’m currently working as a{" "}
            <span className="cyan">Platform Engineer</span> at{" "}
            <span className="cyan">AIBOS Uganda Limited</span>.
            <br />I hold a Bachelors Degree in{" "}
            <span className="cyan">Information Systems and Technology</span> from{" "}
            <span className="cyan">Makerere University, Uganda</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
