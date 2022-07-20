import React, { useState } from 'react'
import "../../estilos/TareaForm.css"
import { v4 as uuidv4 } from 'uuid';

export const TareaForm = (props) => {

  const [input, setInput] = useState("");

  const manejarCambio = e => {
    setInput(e.target.value);

  }

  const manejarEnvio = e => {
    e.preventDefault();
    e.target.reset()


    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,

    }

    props.onSubmit(tareaNueva)

  }


  return (
    <form className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type="text"
        placeholder="Escribe un objetivo"
        name="texto"
        onChange={manejarCambio}
      />

      <button className='btn btn-warning p-3'> Agregar</button>

    </form>
  )
}
