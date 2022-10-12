import React from 'react'

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

export const ObjetosLiterales = () => {

  const person: Persona = {
    nombreCompleto: "Fernando",
    edad: 35,
    direccion:{
        pais: "Canada",
        casaNo: 615
    }
  }
  return (
    <div>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </code>
    </div>
  )
}
