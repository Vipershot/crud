import Navbar from './components/Navbar';
import ApiPersonajes from './components/Api-personajes';
import Tabla from './components/Tabla';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>  
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<ApiPersonajes/>}></Route>
      <Route path='/tabla' element={<Tabla/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
