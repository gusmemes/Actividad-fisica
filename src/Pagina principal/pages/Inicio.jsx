import React from 'react'
import { Slider } from '../components/Slider'
import "../../estilos/redes.css"


export const Inicio = (props) => {

  return (
    <div className='container'>

      <div className='contenedor-texto' >
        <h1> Actividad fisica y salud</h1>
        <p className='texto descriptivo mt-10'>{props.nombre}</p>

      </div>

      <div class="flutter" >
        <Slider></Slider>

      </div>
      <p className="lh-lg">{props.descripcion}</p>
      <br />



      <footer id='contacto'>
        <div className='footer-content'>
          <div className='contacto-us'>
            <h2 className='brand'>Gustavo Moro</h2>
          </div>
          <div className='social-media'>
            <a href='/' className='social-media-icon'>
              <i class='bx bxl-facebook'></i>
            </a>

            <a href='/' className='social-media-icon'>
              <i class='bx bxl-twitter'></i>

            </a>

            <a href='/' className='social-media-icon'>
              <i class='bx bxl-instagram'></i>
            </a>
          </div>
        </div>

      </footer>
    </div>


  )
}












