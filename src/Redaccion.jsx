import React, { useEffect, useState } from "react";
import "./App.css";

export const Redaccion = () => {
  const [text, setText] = useState("");

  const message = `  Te invito a mi fiesta de 15 años   `

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + message[index]);
      index++;
      if (index === message.trim().length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
  
    <div className="diseño">
        
      <h1 className="animated-text">{text}</h1>
    </div>
  );
};
