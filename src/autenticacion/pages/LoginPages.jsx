import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPages = () => {

   const navigate = useNavigate();


   const handleLogin = () => {

      navigate('/', {
         replace: true

      })


   }

   return (
      <div className='container mt-5 '>
         
         <h1 className="text-dark">Actividad fisica y salud</h1>
            
         <hr />
         <button
            className='btn btn-secondary btn-lg'
            onClick={handleLogin}
         >
            Ingresar!

         </button>
      </div>
   )
}