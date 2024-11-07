import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    numero: '',
    correo: '',
    fecha: '',
    hora: ''
  });

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleConfirmReservation = () => {
    
    window.location.href = `/reservaciones?nombre=${formData.nombre}&apellido=${formData.apellido}&numero=${formData.numero}&correo=${formData.correo}&fecha=${formData.fecha}&hora=${formData.hora}`;
  };

  const handleCancelReservation = () => {
    setIsModalOpen(false); 
  };

  return (
    <div>
      <div className="home-container">
        <h1>EL GOLOSO - CHICLAYO</h1>
        <p className="description">
          Disfruta de la mejor experiencia gastronómica en el corazón de Chiclayo. Nuestro equipo se enorgullece de ofrecer una fusión de sabores locales y una atmósfera acogedora.
        </p>
        <div className="info">
          <p><strong>Horario:</strong> Lunes a Domingo, 07:00 am - 11:00 pm</p>
          <p><strong>Dirección:</strong> 1427 Alfonso Ugarte</p>
        </div>
        <button className="reserve-button" onMouseDown={(e) => e.preventDefault()} onClick={() => setIsModalOpen(true)}>
          Reservar ahora
        </button>
      </div>

      <div className="content-section">
        <div className="text-content">
          <h2>EL GOLOSO</h2>
          <p className="subtitle">Restaurante</p>
          <div className="divider"></div>
          
          <p className={`description-text ${isExpanded ? 'expanded' : ''}`}>
            Somos un restaurante líder con más de 10 años de tradición, enfocado en preservar la sazón de la gastronomía peruana.
            El Goloso es más que un restaurante, es un hogar y lo demostramos en la calidez de nuestra atención en cada
            visita a esta casa y en los detalles de cada plato.
            
            {isExpanded && (
              <div className="expanded-text">
                Además, contamos con una variedad de platos exclusivos que combinan lo mejor de la cocina tradicional peruana con toques innovadores. Nos encanta sorprender a nuestros clientes con experiencias culinarias únicas.
              </div>
            )}
          </p>
          
          <button 
            className="read-more-button" 
            onClick={toggleContent}
            onMouseDown={(e) => e.preventDefault()}
          >
            {isExpanded ? 'Leer menos' : 'Leer más'}
          </button>
        </div>

        <div className="image-gallery">
          <img 
            className="main-image" 
            src="https://www.eltrinche.com/wp-content/uploads/2023/07/cebiche-3.jpeg" 
            alt="Main Dish" 
            onClick={() => openImageModal('https://www.eltrinche.com/wp-content/uploads/2023/07/cebiche-3.jpeg')}
          />
          <div className="side-images">
            <img 
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5f/1a/57/nuestra-terraza.jpg?w=1200&h=-1&s=1" 
              alt="Side Dish 1" 
              onClick={() => openImageModal('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5f/1a/57/nuestra-terraza.jpg?w=1200&h=-1&s=1')} 
            />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <span className="close-button" onClick={closeImageModal}>X</span>
          </div>
        </div>
      )}


      {isModalOpen && (
        <div className="reservation-form">
          <div className="form-container">
            <h2>Formulario de Reserva</h2>
            <form>
              <input 
                type="text" 
                name="nombre" 
                placeholder="Nombre" 
                value={formData.nombre} 
                onChange={handleInputChange} 
              />
              <input 
                type="text" 
                name="apellido" 
                placeholder="Apellido" 
                value={formData.apellido} 
                onChange={handleInputChange} 
              />
              <input 
                type="text" 
                name="numero" 
                placeholder="Número de teléfono" 
                value={formData.numero} 
                onChange={handleInputChange} 
              />
              <input 
                type="email" 
                name="correo" 
                placeholder="Correo electrónico" 
                value={formData.correo} 
                onChange={handleInputChange} 
              />
              <input 
                type="date" 
                name="fecha" 
                value={formData.fecha} 
                onChange={handleInputChange} 
              />
              <input 
                type="time" 
                name="hora" 
                value={formData.hora} 
                onChange={handleInputChange} 
              />
            </form>
            <div className="form-buttons">
              <button className="confirm-button" onClick={handleConfirmReservation}>Confirmar reserva</button>
              <button className="cancel-button" onClick={handleCancelReservation}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
