import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Inspira Pintor</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">

            {/* Inicio */}
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>

            {/* Servicios */}
            <li className="nav-item">
              <a className="nav-link" href="/Servicios">Servicios</a>
            </li>

            {/* Pinturas */}
            <li className="nav-item">
              <a className="nav-link" href="/Pinturas">Pinturas</a>
            </li>

            {/* Sucursales */}
            <li className="nav-item">
              <a className="nav-link" href="/Sucursales">Sucursales</a>
            </li>

            {/* Nosotros */}
            <li className="nav-item">
              <a className="nav-link" href="/Nosotros">Nosotros</a>
            </li>

            {/* Galeria */}
            <li className="nav-item">
              <a className="nav-link" href="/Galeria">Galeria</a>
            </li>

            {/* Cerrar Sesion */}
            <li className="nav-item">
              <a className="nav-link" href="/login">Cerrar Sesion</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
