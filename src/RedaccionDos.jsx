import React, { useEffect, useState } from "react";
import "./App.css";

export const RedaccionDos = () => {
  const [text, setText] = useState("");

  const message =`  Me encantaria que estuvieras presente para compartir este momento tan significativo en mi vida.
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
