import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { Redaccion } from "./Redaccion";
import { RedaccionDos } from "./RedaccionDos";
import { RedaccionTres } from "./RedaccionTres";
import { RedaccionCuarto } from "./RedaccionCuarto";
import { Final } from "./Final";
import { Musica } from "./Musica";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function getAnimationSettings(originXA, originXB) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}

export default function Invi() {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();
  const [step, setStep] = useState(0);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  useEffect(() => {
    return () => {
      startAnimation();
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 5000),
      setTimeout(() => setStep(3), 12000),
      setTimeout(() => setStep(4), 26000),
      setTimeout(() => setStep(5), 35000),
    ];

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const Renderizar = () => {
    return (
      <>
        <Musica />
        {step === 1 && <Redaccion />}
        {step === 2 && <RedaccionDos />}
        {step === 3 && <RedaccionTres />}
        {step === 4 && <RedaccionCuarto />}
        {step === 5 && <Final />}
      </>
    );
  };

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div className="render">
        {Renderizar()}
      </div>
    </>
  );
}
