import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  
  const [contador, setContador] = useState(0);
  const [input, setValor] = useState();



  return (
    <div className="App">



      <h1>Esto es mi priemra prueba con REACT</h1>
      <h3>Contador = {contador}</h3>

      <button onClick={() => {
        setContador(contador+1)
        console.log(contador);

      }}>
        Aumentar
    </button>
    <button onClick={() => {
        setContador(contador-1)
        console.log(contador);

      }}>
        Decrementr
    </button>

    <button onClick={() => {
        setContador(0)
        console.log(contador);

      }}>
        Reiniciar
    </button>


    <input type='numbre' placeholder='introduce valor a resetear'
    onChange={(e)=>{
      setValor(e.target.value)
      console.log(input);
    }}></input>
     <button onClick={(e) => {
      
      setContador(input)

      }}>
        Fijar vaalor 
    </button>

    


    </div >
  );
}

export default App;
