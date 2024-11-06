import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/nuestra-carta" className="nav-link">Nuestra carta</Link>
        </li>
        <li className="nav-item">
          <Link to="/te-brindamos" className="nav-link">Te brindamos</Link>
        </li>
        <li className="nav-item">
          <Link to="/nuestras-casas" className="nav-link">Nuestras casas</Link>
        </li>
        <li className="nav-item">
          <Link to="/galeria" className="nav-link">Galería</Link>
        </li>
        <li className="nav-item">
          <Link to="/nuestra-historia" className="nav-link">Nuestra historia</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactanos" className="nav-link">Contáctanos</Link>
        </li>
        <li className="nav-item">
          <Link to="/reservaciones" className="nav-link">Reservaciones</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
