import React from 'react';
import {useEffect,useState} from 'react';
import Card from './Card';

const ApiPersonajes = () => {
    
    

  const [personajes, setPersonajes] = useState(null);
  const [nombre, setNombre] = useState('maikol');
  const [valor, setValor] = useState('');

  const fetchApi = async() => {
  const peticion = await fetch('https://rickandmortyapi.com/api/character')
  const resultado = await peticion.json()
  const characters = resultado.results
  setPersonajes(characters)
  console.log(characters)
  }
  
  useEffect(() => {
    console.log(personajes)
  }, []);
  
    
    return (
    <div>
     {nombre}
      <input placeholder='Escribe Tu Nombre' onChange={(e)=>{setValor(e.target.value)}}></input>
      <button onClick={()=>{
        setNombre(valor) 
        setValor('')}
        } >Cambiar nombre</button>
      <h1>Api</h1>
      <div className='container'>
          <div className='row'>
          {personajes === null ? null : personajes.map((personaje)=> (<Card name={personaje.name} img={personaje.image} location={personaje.location.name} key={personaje.name}/>))}
          </div>
      </div>


      {personajes === null ?  <button onClick={()=>{fetchApi()}}>Ver Personajes</button> : null}
    </div>
    );
}

export default ApiPersonajes;
