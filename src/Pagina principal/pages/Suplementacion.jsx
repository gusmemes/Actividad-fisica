import React from 'react'
import Boton from '../../componentes/Boton'
import { Boton2 } from '../../componentes/Boton2'
import { Boton3 } from '../../componentes/Boton3'

export const Suplementacion = (props) => {

     const manejarClick = () => {

          console.log("click")

     }
           return (
               
          <div className='container'>

               <h1>Suplementacion</h1>
               <p class="fs-3">{props.nombre}</p>

               <div class="d-grid gap-2 d-md-flex justify-content-md">

                    <Boton
                         texto="Proteina"
                         esBotonDeClick={true}
                         manejarClick={manejarClick}
                    />

                    <Boton2
                         texto="Creatina"
                         esBotonDeClick={true}
                    />

                    <Boton3
                         texto="Quemadores"
                         esBotonDeClick={true}
                    />

               </div>

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










