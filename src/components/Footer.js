import React from 'react';
import { Link } from 'react-router-dom';  
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import logo from '../images/logo.png';

function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0); 
  };

  return (
    <footer className="footer">
      <div className="footer-content">
      
        <div className="footer-section logo-section">
          <img 
            src={logo} 
            alt="Logo Goloso" 
            className="footer-logo" 
            onClick={handleLogoClick} 
          />
          <p className="footer-text">
            Goloso Restaurante: donde la buena comida se encuentra con la calidez del hogar.
          </p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section site-map">
          <h4>Mapa del Sitio</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nuestra-historia">Nuestra historia</Link></li>
            <li><Link to="/nuestra-carta">Nuestra carta</Link></li>
            <li><Link to="/te-brindamos">Te brindamos</Link></li>
            <li><Link to="/nuestras-casas">Nuestras casas</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/contactanos">Contáctanos</Link></li>
            <li><Link to="/reservaciones">Reservaciones</Link></li>
          </ul>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section contact-section">
          <h4>LOCALES</h4>
          <div className="contact">
            <h5>Local La Victoria</h5>
            <p>Av. los Incas 145, La Victoria 14007. Chiclayo - Peru</p>
            <p>Teléfono: 956 789 654</p>
            <p>Email: <a href="mailto:lavictoria@elgoloso.pe">lavictoria@elgoloso.pe</a></p>
          </div>
          <div className="contact">
            <h5>Local Chiclayo</h5>
            <p>1427 Alfonso Ugarte, Chiclayo - Perú</p>
            <p>Teléfono: 01 348 7802</p>
            <p>Email: <a href="mailto:chiclayo@elgoloso.pe">chiclayo@elgoloso.pe</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2024 Goloso Restaurante. Todos los derechos reservados.</p>
        <p className="footer-text">Síguenos en nuestras redes sociales.</p>
      </div>
    </footer>
  );
}

export default Footer;
