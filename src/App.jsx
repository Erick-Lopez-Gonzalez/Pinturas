import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import MostrarInicio from './Rutas/MostrarInicio';
import MostrarLogin from './Rutas/MostrarLogin';

import MostrarServicios from './Rutas/MostrarServicios';
import MostrarPinturas from './Rutas/MostrarPinturas';
import MostrarSucursales from './Rutas/MostrarSucursales';
import MostrarNosotros from './Rutas/MostrarNosotros';
import MostrarGaleria from './Rutas/MostrarGaleria';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<MostrarInicio />} />
        <Route path="/Servicios" element={<MostrarServicios />} />
        <Route path="/Pinturas" element={<MostrarPinturas />} />
        <Route path="/Sucursales" element={<MostrarSucursales />} />
        <Route path="/Nosotros" element={<MostrarNosotros />} />
        <Route path="/Galeria" element={<MostrarGaleria />} />
        
        <Route path="/Login" element={<MostrarLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
