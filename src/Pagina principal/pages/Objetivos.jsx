import React from 'react'
import "../../estilos/estilos-AppObjetivos.css"
import { ListaDeTareas } from '../components/ListaDeTareas'

export const Objetivos = () => {
  return (
    <div className='aplicacion-tareas'>

      <div className='tareas-lista-principal'>
        <p className='objetivos'>Mis objetivos del entrenamiento de hoy</p>
        <ListaDeTareas />

      </div>

    </div>
  )
}
