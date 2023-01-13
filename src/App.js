import React from 'react';
import './App.css';
import { Boton } from './components/Boton';
import { Contador } from './components/Contador';
// import logo from './images/freecodecamp-logo.png'
import { useState } from 'react';


function App() {
  
  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics +1)
    // console.log('click')
  }
  const reiniciarContador = () => {
    setNumClics(0)
    // console.log('Reiniciar')
  }
  return (
    <div className="App">
      <div className='free-logo-con' >
        {/* <img className='free-logo' src={logo} alt='logo' /> */}
        <h3 className='titulo'>Contador de clics</h3>
      </div>

    <div className='principal'>
      <Contador numClics={numClics} />
      <Boton texto='Click' botonClic={true} manejarClic={manejarClic} />
      <Boton texto='Reiniciar' botonClic ={false} manejarClic={reiniciarContador} />
    </div>

    </div>
  );
}

export default App;
