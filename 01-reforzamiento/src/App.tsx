import React from 'react'
import Formularios from './components/Formularios';
// import TiposBosicos from './typescript/TiposBosicos'
// import Contador from './components/Contador';
// import ContadorConHook from './components/ContadorConHook';
// import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion en typescript</h1>
      <hr />
      {/* <TiposBosicos/> */}
      {/* <Contador/>
      <ContadorConHook/>
      <Login/> */}
      {/* <Usuarios/> */}
      <Formularios/>
    </div>
  )
}

export default App