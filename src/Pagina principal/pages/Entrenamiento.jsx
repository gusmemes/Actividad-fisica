import React from 'react'
export const Entrenamiento = (props) => {
  return (
    <div className='container'>

    <h1>Entrenamiento</h1>
    <p className="fs-3">{props.nombre}</p>

    <img
           class="img-fluid" 
           src={require(`../../imagenes/${props.imagen}.png`)}
          alt='imagen'/>
    
    <br/>
   
    <p class="lh-lg">{props.descripcion}</p>
    </div>
  )
}
