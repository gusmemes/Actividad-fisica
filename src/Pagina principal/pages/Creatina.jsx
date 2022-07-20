import React from 'react'

export const Creatina = () => {
  
  return (
    <div className='container'>
      
    <h1>Creatina </h1>
    <p class="fs-3">Es la encargada de nuestro combustible <b>energico</b></p>
    <img  class="img-fluid" 
          src = {require( "../../imagenes/creatina.png")}
          alt='imagen'/>
   
   <br/>
    <p>
    <b> ¿Qué es la Creatina?</b>
    <br/>
    El cuerpo almacena la creatina como fosfocreatina principalmente en los músculos, donde se usa para obtener energía. Como resultado, las personas toman creatina por vía oral para mejorar el desempeño atlético y aumentar la masa muscular.
    </p>
    </div>
  )
}