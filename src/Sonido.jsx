import React, { useEffect, useRef } from 'react';
import soundFile from './soundFile.mp3'

function Sonido() {
  const audioRef = useRef();

  const reproducirSonido = () => {
    audioRef.current.play();
  }
  useEffect(()=>{
reproducirSonido(soundFile)
  },[])

  return (
    <div>
      <audio ref={audioRef}>
        <source src={soundFile} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Sonido;

