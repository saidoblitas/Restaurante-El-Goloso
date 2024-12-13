import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-image">
      <img
          src="https://media.admagazine.com/photos/651aeed9da5f4d9a3844a94b/4:3/w_2660,h_1995,c_limit/Porten%CC%83o-restaurante-1.jpg"
          alt="Platos de comida"
        />
      </div>

     
      <div className="login-form">
        <div className="form-container">
          {/* Título */}
          <h1 className="login-title">LOGIN</h1>

          {/* Campos de entrada */}
          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="Usuario"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Contraseña"
                className="form-input"
              />
            </div>

            {/* Botón de entrada */}
            <button type="submit" className="form-button">
              ENTRAR
            </button>

            {/* Enlace de recuperación de contraseña */}
            <div className="form-link">
              <a href="/forgot-password">Olvide contraseña</a>
            </div>
          </form>

          {/* Enlace de registro */}
          <div className="register-link">
            ¿No tienes una cuenta?{' '}
            <a href="/register">Regístrate</a>
          </div>
        </div>

        {/* Firma */}
        <footer className="footer">
          <em>El Goloso</em>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
