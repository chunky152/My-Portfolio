import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const options = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  pauseOnBlur: true,
  particles: {
    color: {
      value: "#06b6d4",
    },
    number: {
      value: 80,
      density: {
        enable: true,
        area: 1500,
      },
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      direction: "right",
      speed: 0.05,
    },
    size: {
      value: 3,
    },
    opacity: {
      value: 0.6,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.2,
        sync: false,
      },
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 1,
      },
    },
  },
  detectRetina: true,
};

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}

export default Particle;
