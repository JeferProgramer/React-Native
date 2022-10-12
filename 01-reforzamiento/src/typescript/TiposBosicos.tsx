import React from 'react'
import { ObjetosLiterales } from './ObjetosLiterales';

const TiposBosicos = () => {
  
  const nombre: string = "Jeferson Cañon";
  const edad: number = 35;
  const estaActivo: boolean = false;
  const poderes: string[] = [];

  return (
    <div>
      <h3><ObjetosLiterales/></h3>
      {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'No Activo' }
      <br />
      {poderes.join(', ')}
      <ObjetosLiterales/>
    </div>
  )
}

export default TiposBosicos
