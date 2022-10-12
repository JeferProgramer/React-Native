import React from 'react'

const TiposBosicos = () => {
  
  const nombre: string = "Jeferson Cañon";
  const edad: number = 35;
  const estaActivo: boolean = false;
  const poderes: string[] = [];

  return (
    <div>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'No Activo' }
    </div>
  )
}

export default TiposBosicos
