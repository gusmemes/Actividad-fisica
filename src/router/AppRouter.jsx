import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPages } from '../autenticacion/pages/LoginPages'
import { LoginRouter } from '../Pagina principal/routes/LoginRouter'


export const AppRouter = () => {
  return (

    <>


      <Routes>

        <Route path="login" element={<LoginPages />} />
        <Route path="/*" element={<LoginRouter />} />


      </Routes>

    </>
  )
}
