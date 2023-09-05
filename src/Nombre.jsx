import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Nombre() {
  const [params] = useSearchParams();
  const name = params.get("name") || "";
  const pases = params.get("pases") || "";

  return (
    <div className='nombre'>
      <span>Mis 15 Años</span>
      <span>Laura Molero</span>
      <div>
        {"Invitacion Para: " + name + (pases ? " " + pases + " pases" : "")}
      </div>
    </div>
  );
}
