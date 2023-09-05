import React, { useState } from 'react'
import data from './data.json'
export const Invitados=()=> {
  const [contar, setContar]=useState(data)
  console.log(contar)

  return (
    <div>
      {
        contar.map((it, index)=>{
          return(
            <div key={index}>
              https://invitacion-cumplea-os-de-laura.netlify.app/?name={it.nombre.replaceAll(" ","%20")}&pases={it.numero}
            </div>
           
          )
        })
      }
    </div>
  )
}
