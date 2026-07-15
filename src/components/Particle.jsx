import React from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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
      value: { min: 0.2, max: 0.6 },
      animation: {
        enable: true,
        speed: 1,
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
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
}

export default Particle;
