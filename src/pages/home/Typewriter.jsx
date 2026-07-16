import React from "react";
import TypewriterEffect from "typewriter-effect";

function Typewriter() {
  return (
    <TypewriterEffect
      options={{
        strings: [
          "Platform Engineer",
          "Software Developer",
          "DevOps Engineer",
          "MERN Stack Developer",
          "Cloud Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typewriter;
