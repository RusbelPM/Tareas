import { createSlice } from '@reduxjs/toolkit'

const initialState = [

  // se puede accerder a este arreglo de objetos desde cualquier parte

  {
    id:"1",
    titulo:"Lunes",
    descripcion:"- Cita médica 10am - Llevar mascotas al veterinario.- Comprar comestibles",
  },
]

export const tareaSlice = createSlice({
  name: 'tarea',  
  initialState,

  reducers: {
    // crear funcion
    // puede ser llamado desde cualquier parte
    añadirTarea:(state ,action)=>{
      // la accion recibe el payload 
      state.push(action.payload)

      // el state es para acceder al arreglo que tenemos actual mente 
      // el action es dato que le vamos a estar pasando 
    },
    editarTarea:(state ,action)=>{
      const {id,titulo,descripcion} = action.payload;

      const tareaEncontrada = state.find( tarea => tarea.id === id)

      if(tareaEncontrada){
        tareaEncontrada.titulo = titulo;
        tareaEncontrada.descripcion = descripcion;
      }
    },
    eliminarTarea:(state , action)=>{
      const tareaEliminada = state.find( tarea => tarea.id === action.payload)

      if(tareaEliminada){
        state.splice(state.indexOf(eliminarTarea),1)
      }

    }

  },
})

// Action creators are generated for each case reducer function
export const {añadirTarea, eliminarTarea,editarTarea} = tareaSlice.actions

export default tareaSlice.reducer