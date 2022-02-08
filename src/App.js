import {useEffect,useState} from 'react';


function App() {


  const [personajes, setPersonajes] = useState(null);
  const [nombre, setNombre] = useState('maikol');
  const [valor, setValor] = useState('');

  const fetchApi = async() => {
  const peticion = await fetch('https://rickandmortyapi.com/api/character')
  const resultado = await peticion.json()
  const characters = resultado.results
  setPersonajes(characters)
  }
  
  useEffect(() => {
    console.log(personajes)
  }, []);
  
  return (
    <div className="App">
      {nombre}
      <input placeholder='Escribe Tu Nombre' onChange={(e)=>{setValor(e.target.value)}}></input>
      <button onClick={()=>{
        setNombre(valor) 
        setValor('')}
        } >Cambiar nombre</button>
      <h1>Api</h1>
      {personajes === null ? null : personajes.map((personaje)=> (<h1 key={personaje.name}> {personaje.name} </h1>))}


      {personajes === null ?  <button onClick={()=>{fetchApi()}}>Ver Personajes</button> : null}
    
    </div>
  );
}

export default App;
