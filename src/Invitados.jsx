import React, { useState } from 'react'
import data from './data.json'
export const Invitados=()=> {
  const [contar, setContar]=useState(data)
  console.log(contar)

  return (
    <div>
      {
        contar.map((it)=>{
          return(
            <div>
              https://mi-cumple15.netlify.app/?name={it.nombre}&pases={it.numero}
            </div>
           
          )
        })
      }
    </div>
  )
}
