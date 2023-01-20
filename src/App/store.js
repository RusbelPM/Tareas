import { configureStore } from '@reduxjs/toolkit'
import tareaReducer from '../features/tareas/tareaSlice'

export const store = configureStore({
  reducer: {

    tareas: tareaReducer,
  },
})