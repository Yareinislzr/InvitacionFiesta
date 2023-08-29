import React, { useEffect, useRef, useState } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { Redaccion } from './Redaccion';

export const Invitar=()=>{
    return(
        <div>Te invito a mi fieta Laura</div>
    )
  }

export default function Invitacion() {
    const[nombre, setNombre]=useState(false)
    
  const confettiRef = useRef(null);
  console.log(confettiRef)

  const getInstance = (instance) => {
    // guardar la instancia en una propiedad interna
    confettiRef.current = instance;
  };

  const onClickDefault = () => {
    // comenzando la animación
    confettiRef.current();
  };

  const onClickCustom = () => {
    // iniciar la animación con configuraciones personalizadas
    confettiRef.current({ particleCount: Math.ceil(Math.random() * 3000), spread: 360  });
  };

  const onClickCallback = () => {
    // llamando a console.log después de que finalice la animación
    confettiRef.current().then(() => {
        setNombre('Laura')
    });
  };

  const onClickReset = () => {
    // limpiando el lienzo
    confettiRef.current.reset();
  };

  const estilo = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: -1
  };
  useEffect(()=>{
    onClickCustom()
    const timer = setTimeout(()=>{
setNombre(true)
    },2000);
    return()=> clearTimeout(timer)
    
},[]);



  return (
    <>
      <ReactCanvasConfetti
        // configure los estilos como para un componente de reacción habitual
        style={estilo}
        // establezca el nombre de la clase como para un componente de reacción habitual
        className={'yourClassName'}
        // configure la devolución de llamada para obtener la instancia. La devolución de llamada se llamará después de la inicialización del componente ReactCanvasConfetti
        refConfetti={getInstance}
      />

      
      <div>
       
      {nombre? <Redaccion />:''}
</div>
    </>
  );
}
