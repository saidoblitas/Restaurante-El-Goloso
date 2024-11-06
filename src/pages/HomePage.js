import React from 'react';
import './HomePage.css';

const HomePage = () => {
  const backgroundImage = 'https://www.eltrinche.com/wp-content/uploads/2023/07/cebiche-3.jpeg';

  return (
    <div>
      <div 
        className="home-container" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1>EL GOLOSO - LIMA</h1>
        <p className="description">Disfruta de la mejor experiencia gastronómica en el corazón de Lima. Nuestro equipo se enorgullece de ofrecer una fusión de sabores locales y una atmósfera acogedora.</p>
        <div className="info">
          <p><strong>Horario:</strong> Lunes a Domingo, 07:00 am - 11:00 pm</p>
          <p><strong>Dirección:</strong> Av. Principal 123, Lima</p>
        </div>
        <button className="reserve-button">Reservar ahora</button>
      </div>

    
      <div className="content-section">
        <div className="text-content">
          <h2>EL GOLOSO</h2>
          <p className="subtitle">Restaurante</p>
          <div className="divider"></div>
          <p className="description-text">
            Somos un restaurante líder con 5 años de tradición, enfocado en preservar la sazón de la gastronomía peruana.
            El Goloso es más que un restaurante, es un hogar y lo demostramos en la calidez de nuestra atención en cada
            visita a esta casa y en los detalles de cada plato.
          </p>
          <button className="read-more-button">Leer Más</button>
        </div>

    
        <div className="image-gallery">
          <img className="main-image" src="https://www.eltrinche.com/wp-content/uploads/2023/07/cebiche-3.jpeg" alt="Main Dish" />
          <div className="side-images">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5f/1a/57/nuestra-terraza.jpg?w=1200&h=-1&s=1" alt="Side Dish 1" />
            <img src="https://files.123inventatuweb.com/91/21/9121a47e-c03a-4ef3-b057-d8bcca85a907.jpg" alt="Side Dish 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
