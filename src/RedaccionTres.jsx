import React, { useEffect, useState } from "react";
import "./App.css";

export const RedaccionTres = () => {
  const [text, setText] = useState("");

  const message =`  Dia sábado, 15 de septiembre
    Hora 7:00pm Salón de Eventos "Agustino"
    ubicado en Jiron Ancash 2418.(frente a Tottus)
    Tu presencia en este día tan especial para mí sería un honor y una alegría inmensa.
`

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + message[index]);
      index++;
      if (index === message.trim().length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
  
    <div className="diseño">
        
      <h1 className="animated-text">{text}</h1>
    </div>
  );
};
