import React from 'react';

import Navbar from '../Componentes/Navbar';
import Inicio from '../Componentes/Vistas/Inicio';
import Footer from '../Componentes/Footer';


const MostrarInicio = () => {
    return (
        <>
            <Navbar />
            <Inicio />
            <Footer />
        </>
    );
}

export default MostrarInicio