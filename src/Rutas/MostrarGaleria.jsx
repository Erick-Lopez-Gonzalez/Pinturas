import React from 'react';

import Navbar from '../Componentes/Navbar';
import Galeria from '../Componentes/Vistas/Galeria';
import Footer from '../Componentes/Footer';

const MostrarGaleria = () => {
    return (
        <>
            <Navbar />
            <Galeria />
            <Footer />
        </>
    );
}

export default MostrarGaleria