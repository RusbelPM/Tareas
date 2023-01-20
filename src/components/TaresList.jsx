import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { eliminarTarea } from "../features/tareas/tareaSlice"

export const TaresList = () => {
  const dispatch =  useDispatch()

  const tareaState = useSelector(state => state.tareas)
  // atrapar el id
  const handleDelete = (id)=>{
      dispatch(eliminarTarea(id)) 
  }
  return (
    <div>
      <header>
        <h1> Tienes {tareaState.length} notas</h1>
        <Link className="crear" to="formulario">
        Crear una nueva tarea
        </Link>
      </header>
      <div id="notes-container">
  
            {tareaState.map(tarea => {
              return (
                <div className="notes" key={tarea.id}>
                  <h3>{tarea.titulo}</h3>
                  <hr/>
                  <br/>
                  <p>{tarea.descripcion}</p>
                  <div className="bots">
                    <button className="save1" onClick={()=>handleDelete(tarea.id)}>Eliminar</button>
                    <Link className="edit" to={`formulario/${tarea.id}`}>Editar</Link>
                  </div>
                </div>
              )
            })}
      </div>

    </div>
  )
}
