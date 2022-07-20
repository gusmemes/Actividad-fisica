import React from 'react'
import { Slider } from '../components/Slider'
import {ImFacebook2} from "react-icons/im";
import {FaInstagram} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import "../../estilos/redes.css"


export const Inicio = (props) => {

  return (
    <div className='contenedor'>
    
      <div className= 'contenedor-texto' >
      <h1> Actividad fisica y salud</h1>
      <p className='texto descriptivo mt-10'>{props.nombre}</p>

  </div>

  <div class="flutter" >
    <Slider></Slider>
          
  </div>
  <p className ="lh-lg">{props.descripcion}</p>
   <br/>
  <button className='facebook'> <ImFacebook2 className='icono' /></button> 
  <button className='instagram'> <FaInstagram className='icono2' /></button>
  <button className='twiter'> <BsTwitter className='icono3' /></button>

  
     </div>
   

      
    )
  }
