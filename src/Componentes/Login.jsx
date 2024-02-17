import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Usuario:</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <Link to="/">
                  <button type="button" className="btn btn-primary btn-block">
                    Iniciar sesión
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
