import { useState ,useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate ,useParams } from "react-router"
import { v4 as uuid} from "uuid"
import { añadirTarea, editarTarea } from "../features/tareas/tareaSlice"

const initialState = {
  // titulo y descripcion debe ser igual que el name="" del input y textare
  titulo:"",
  descripcion:""
}

export const FormularioTareas = () => {
  // el useDispatch lee la funcion del reducer slice
  // permite disparar eventos desde el slice 
  const dispatch =  useDispatch();

  const tareas = useSelector( state => state.tareas)

  const navigate = useNavigate();
  const params =  useParams();


  const [tarea, setTarea] = useState(initialState)


// el onchage permite captura el valor 
  const handleChange = (e)=>{
    setTarea({
      ...tarea,
// voy a utilizar el  |y|  como valor usare
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e)=>{
    // eviatr que de refresque la pagina e.preventDefault()
    e.preventDefault()

    if(params.id){
      dispatch(editarTarea(tarea))
    }else{

      dispatch(añadirTarea({
        ...tarea,
        id:uuid()
  
      }))
    }

    // el useNavigate es una funcion . una vez que se  termine de ejecutar el dispatch dirigime a "/"
    navigate("/")
  }

  useEffect(() => {
    if(params.id){
      setTarea(
      tareas.find(tarea => tarea.id === params.id)
      )
    }
  }, [params.id,tareas])
  
  return (
    <div className="add-notes-container">
      <div className="newNoteContainer">
        <h2>Agrega una nueva nota</h2>
      <form onSubmit={handleSubmit}>
        <input className="newNoteTitle" name="titulo" type="text" placeholder="título" value={tarea.titulo} onChange={handleChange}/>
        <textarea className="newNote" name="descripcion" placeholder="descripción" value={tarea.descripcion} onChange={handleChange}/>
          <div className="buttons">
            <button className="save" type="submit">Guadar</button>
            <button className="cancel">Cancelar</button>
          </div>
      </form>
      </div>
    </div>
  )
}
