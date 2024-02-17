import React from 'react';

import Navbar from '../Componentes/Navbar';
import Pinturas from '../Componentes/Vistas/Pinturas';
import Footer from '../Componentes/Footer';

const MostrarPinturas = () => {
  return (
    <>
      <Navbar />
      <Pinturas />
      <Footer />
    </>
  );
}

export default MostrarPinturas