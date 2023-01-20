// import { useSelector } from 'react-redux'
import './App.css'
import { FormularioTareas } from './components/FormularioTareas'
import { TaresList } from './components/TaresList'
import logo from './logo.svg'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";



export const App = () => {
  
    // useSelector llama al estado 
    /*con useSelector se puede acceder al estado desde cualquier componente*/

  // ejemplo con el useSelecto se puede accerder al stado del slice
  // const estadito = useSelector(state => state.tareas)
  // console.log(estadito)

  return (
    <BrowserRouter>
      <div className="main-container">
        <div className="top">
          <h1>Notas hecho con ReactJS</h1>
        </div>
          <img src={logo} className="App-logo"alt="React"/>

            <Routes>

            <Route path="/" element={<TaresList/>}/>
            <Route path="formulario" element={<FormularioTareas/>}/>
            <Route path="formulario/:id" element={<FormularioTareas/>}/>

            <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
      </div>
    </BrowserRouter>
          
    )
    
}
