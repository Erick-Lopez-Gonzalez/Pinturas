import React from 'react';

import Navbar from '../Componentes/Navbar';
import Sucursales from '../Componentes/Vistas/Sucursales';
import Footer from '../Componentes/Footer';

const MostrarSucursales = () => {
    return (
        <>
            <Navbar />
            <Sucursales />
            <Footer />
        </>
    );
}

export default MostrarSucursales