import React from 'react'

export const Nutricion = (props) => {
  return (
    <div className='container'>

      <h1>Nutricion</h1>
      <p class="fs-3">{props.nombre}</p>

      <img
        class="img-fluid"
        src={require(`../../imagenes/${props.imagen}.png`)}
        alt='imagen' />

      <br />
      <br />
      <p class="lh-lg">{props.descripcion}</p>
    </div>
  )
}
