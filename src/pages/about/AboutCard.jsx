import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "justify" }}>
            <p style={{ marginBottom: "15px" }}>
              Hi Everyone, I am <span className="cyan">Muwanguzi Alvin Kiggundu</span> from <span className="cyan">Kampala, Uganda</span>.
            </p>
            <p style={{ marginBottom: "15px" }}>
              I am a dedicated <span className="cyan">Platform Engineer</span> currently working at <span className="cyan">AIBOS Uganda Limited</span>. I specialize in designing, building, and maintaining scalable cloud infrastructure and automation pipelines that empower development teams to deliver software efficiently.
            </p>
            <p style={{ marginBottom: "15px" }}>
              I hold a Bachelor's Degree in <span className="cyan">Information Systems and Technology</span> from <span className="cyan">Makerere University</span>, which laid the foundation for my passion for distributed systems, cloud computing, and modern DevOps practices.
            </p>
            <p style={{ marginBottom: "15px" }}>
              Beyond the terminal, I believe in maintaining a balanced lifestyle. When I'm not architecting platforms, you can find me:
            </p>
          </div>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring interactive media and strategy gaming 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading up on emerging tech trends and architectures 📖
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and experiencing diverse cultures 🌍
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
