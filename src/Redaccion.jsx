import React, { useEffect, useState } from "react";
import "./App.css";

export function Redaccion() {
  const [text, setText] = useState("");

  const message = "T e invito a mi fiesta de 15 años";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < message.length) {
        setText(prevText => [...prevText, message[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="diseño">
      {text.length > 0 && <h1 className="animated-text">{text}</h1>}
    </div>
  );
}

