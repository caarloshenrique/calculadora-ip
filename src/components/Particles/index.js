import React from 'react';
import Particles from 'react-particles-js'

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

export default function ParticlesContainer() {
  return (
      <div
          style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
          }}
      >
          <Particles params={particleOpt} />
    </div>
  );
}
