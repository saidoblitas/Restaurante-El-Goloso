import React from 'react';
import './TeBrindamosPage.css';

const TeBrindamosPage = () => {
  return (
    <div className="te-brindamos-container">
      <div className="banner-section">
        <div className="banner-text">TE BRINDAMOS</div>
        <img
          className="banner-image"
          src="https://www.joseantonio.com.pe/wp-content/uploads/2015/06/galeria-9.jpg"
          alt="Banner de El Goloso"
        />
      </div>

      <main className="content-section">
        <div className="content-container">
          <p>
            En <span className="highlight">El Goloso</span> nos dedicamos a ofrecer experiencias culinarias excepcionales. Te brindamos platos elaborados con ingredientes frescos y seleccionados, preparados con recetas tradicionales y el mejor sabor para ti y tu familia.
          </p>
          <p>
            Nuestro objetivo es proporcionarte una experiencia única, donde la calidad, el sabor y la atención personalizada son nuestra prioridad. Te invitamos a descubrir nuestro menú variado, ideal para todas las ocasiones, ya sea una comida en familia, reuniones con amigos o eventos especiales.
          </p>
        </div>

        <div className="events-section">
        <div className="benefit">
            <h3>Sabor peruano en cada plato</h3>
            <p>
            Experiencia, calidad y sabor en cada plato. ¡Te esperamos para que lo descubras! </p>
            <img
              className="benefit-image"
              src="https://lh3.googleusercontent.com/p/AF1QipMm3qzfKq8N_IZ-_VOAv8qs0yu_krRPiww8cLL-=s1600-w640"
              alt="Catering Personalizado"
            />
          </div>

          <div className="benefit">
            <h3>Eventos Especiales</h3>
            <p>
              Organizamos eventos personalizados para cumpleaños, bodas, reuniones empresariales y celebraciones especiales. ¡Haz tu reserva con anticipación!
            </p>
            <img
              className="benefit-image"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgX6VZZL7U_D1O0LhV6zNuZmrXdN7ILAs8Wk2ZaeRNvt4WzmKAozaxhwdDWEdOiWP8f6fivvqvfRbFN585N09YzkHFG4h-XV6x8NmRFkMP4c-_0nie8UjwUs-8KDK_vEeA2LiyI10Xvu2g/s980/EVENTOS.jpg"
              alt="Eventos Especiales"
            />
          </div>

          <div className="benefit">
            <h3>Buffet con Reserva</h3>
            <p>
              Ofrecemos una experiencia de buffet con opciones variadas para tu comodidad. Disponibilidad sujeta a reserva previa.
            </p>
            <img
              className="benefit-image"
              src="https://img.restaurantguru.com/c44c-Restaurant-El-Goloso-Campus-photo.jpg"
              alt="Buffet con Reserva"
            />
          </div>

        </div>
      </main>
    </div>
  );
};

export default TeBrindamosPage;
