import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';  
import logo from '../images/logo.png';  // Ruta correcta a la imagen en la carpeta 'src/images'

function Navbar() {
  const location = useLocation(); 
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/nuestra-carta" 
            className={`nav-link ${location.pathname === '/nuestra-carta' ? 'active' : ''}`}
          >
            Nuestra carta
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/te-brindamos" 
            className={`nav-link ${location.pathname === '/te-brindamos' ? 'active' : ''}`}
          >
            Te brindamos
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/nuestras-casas" 
            className={`nav-link ${location.pathname === '/nuestras-casas' ? 'active' : ''}`}
          >
            Nuestras casas
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/galeria" 
            className={`nav-link ${location.pathname === '/galeria' ? 'active' : ''}`}
          >
            Galería
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/nuestra-historia" 
            className={`nav-link ${location.pathname === '/nuestra-historia' ? 'active' : ''}`}
          >
            Nuestra historia
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/contactanos" 
            className={`nav-link ${location.pathname === '/contactanos' ? 'active' : ''}`}
          >
            Contáctanos
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/reservaciones" 
            className={`nav-link ${location.pathname === '/reservaciones' ? 'active' : ''}`}
          >
            Reservaciones
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
