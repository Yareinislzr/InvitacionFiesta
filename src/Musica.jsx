import { useEffect } from "react";
import sonido from "./Dream.mp3";

export const Musica = () => {
  const sonar = () => {
    const audioElement = new Audio(sonido);
    audioElement.play();
  };

  useEffect(() => {
    sonar();
  }, []);

  return 
};
