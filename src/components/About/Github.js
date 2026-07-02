import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "black",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="cyan">Code</strong>
      </h1>
      <div 
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 15px rgba(6, 182, 212, 0.15)",
          borderRadius: "15px",
          padding: "30px",
          marginTop: "20px",
          width: "fit-content",
          margin: "0 auto"
        }}
      >
        <GitHubCalendar
          username="chunky152"
          blockSize={15}
          blockMargin={5}
          color="#06b6d4"
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
