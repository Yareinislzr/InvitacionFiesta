import React, { useEffect, useState } from "react";
import "./App.css";

export const RedaccionCuarto = () => {
  const [text, setText] = useState("");

  const message =`  
    Espero contar con tu compañía en esta celebración única en la vida
    con cariño.Laura Molero  `

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
