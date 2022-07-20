import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";

import { PagPrincipal } from './PagPrincipal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  

    <PagPrincipal />


  </BrowserRouter>

  
);


