import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { Redaccion } from "./Redaccion";
import { RedaccionDos } from "./RedaccionDos";
import { RedaccionTres } from "./RedaccionTres";
import { RedaccionCuarto } from "./RedaccionCuarto";
import { Final } from "./Final";
import { Musica } from "./Musica";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

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
  const [primero, setPrimero] = useState(false);
  const [segundo, setSegundo] = useState(false);
  const [tercero, setTercero] = useState(false);
  const [cuarto, setCuarto] = useState(false);
  const [final, setFinal] = useState(false);

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
    const uno = setTimeout(() => {
      setPrimero(true);
    }, 1000);
    return () => clearTimeout(uno);
  }, [intervalId]);

  useEffect(() => {
    const dos = setTimeout(() => {
      setPrimero(false);
      setSegundo(true);
    }, 5000);
    return () => clearTimeout(dos);
  }, [intervalId]);

  useEffect(() => {
    const tres = setTimeout(() => {
      setSegundo(false);
      setTercero(true);
    }, 12000);
    return () => clearTimeout(tres);
  }, [intervalId]);

  useEffect(() => {
    const cuatro = setTimeout(() => {
      setTercero(false);
      setCuarto(true);
    }, 26000);
    return () => clearTimeout(cuatro);
  }, [intervalId]);

  useEffect(() => {
    const final = setTimeout(() => {
      setCuarto(false);
      setFinal(true);
    }, 35000);
    return () => clearTimeout(final);
  }, [intervalId]);

  const Renderizar = () => {
    if (primero) {
      return <Redaccion />;
    } else if (segundo) {
      return <RedaccionDos />;
    } else if (tercero) {
      return <RedaccionTres />;
    } else if (cuarto) {
      return <RedaccionCuarto />;
    } else if (final) {
      return <Final />;
    }
  };

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div className="render">
        {Renderizar()}
        <Musica />
      </div>
    </>
  );
}
