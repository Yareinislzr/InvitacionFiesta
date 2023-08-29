import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { Redaccion } from "./Redaccion";
import { RedaccionDos } from "./RedaccionDos";
import { RedaccionTres } from "./RedaccionTres";
import { RedaccionCuarto } from "./RedaccionCuarto";
  
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
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
      y: Math.random() - 0.2
    }
  };
}

export default function Invi() {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();
  const[primero, setPrimero]=useState(false)
  const[segundo, setSegundo]=useState(false)
  const[tercero, setTercero]=useState(false)
  const[cuarto, setCuarto]=useState(false)

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

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(()=>{
    startAnimation()
    const uno = setTimeout(()=>{
setPrimero(true)
stopAnimation()
    },1000);
    return()=> clearTimeout(uno)
},[]);

useEffect(()=>{
  const dos = setTimeout(()=>{
setPrimero(false)
setSegundo(true)

  },5000);
  return()=> clearTimeout(dos)
},[]);

useEffect(()=>{
  const tres = setTimeout(()=>{
setSegundo(false)
setTercero(true)

  },12000);
  return()=> clearTimeout(tres)
},[]);

useEffect(()=>{
  const cuatro = setTimeout(()=>{
setTercero(false)
setCuarto(true)

  },26000);
  return()=> clearTimeout(cuatro)
},[]);

const Renderizar=()=>{
  if(primero){
    return<Redaccion />
  }else if(segundo){
    return <RedaccionDos />
  }else if(tercero){
    return <RedaccionTres />
  }else(cuarto)
    return <RedaccionCuarto />
}

  return (
    <>
     
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div>
      {Renderizar()}
</div>
    </>
  );
}
