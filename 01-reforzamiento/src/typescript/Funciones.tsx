import React from 'react'

const Funciones = () => {

  const sumar  = (a:number, b:number):number => {
    return a+b
  }
  return (
    <div>
      <h3>Funciones</h3>
      <span>el Resultado es : { sumar(2,5) }</span>
    </div>
  )
}

export default Funciones
