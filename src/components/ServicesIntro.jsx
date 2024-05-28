import React, { useState } from 'react';
import './services.css';

const ServicesIntro = () => {
  // State pour stocker l'URL de l'image actuellement survolée
  const [hoveredImage, setHoveredImage] = useState('banner_image.jpg');

  // Fonction pour mettre à jour l'image survolée
  const handleCategoryHover = (image) => {
    setHoveredImage(image);
  };

  return (
    <section className='services_intro'>
      <section className='categories_services'>
        <section className='categories_services_titles'>
        <h2 className='services_title'>Nos différents Services</h2>
          <h3
            className='title_site vitrine'
            onMouseEnter={() => handleCategoryHover('vitrine.jpg')}
            onMouseLeave={() => handleCategoryHover('banner_image.jpg')}
          >
            <img src='vitrine.jpg' alt='Site Vitrine'></img>Site Vitrine
          </h3>
          <h3
            className='title_site e-commerce'
            onMouseEnter={() => handleCategoryHover('e_commerce.jpg')}
            onMouseLeave={() => handleCategoryHover('banner_image.jpg')}
          >
            <img src='e_commerce.jpg' alt='Site e-commerce'></img>Site e-commerce
          </h3>
          <h3
            className='title_site portfolio'
            onMouseEnter={() => handleCategoryHover('portfolio_pro.jpg')}
            onMouseLeave={() => handleCategoryHover('banner_image.jpg')}
          >
            <img src='portfolio_pro.jpg' alt='Portfolio professionnel'></img>Portfolio professionnel
          </h3>
          <h3
            className='title_site reservation'
            onMouseEnter={() => handleCategoryHover('reservation.jpg')}
            onMouseLeave={() => handleCategoryHover('banner_image.jpg')}
          >
            <img src='reservation.jpg' alt='Site de réservation de services'></img>Site de réservation de services
          </h3>
          <h3
            className='title_site sur-mesure'
            onMouseEnter={() => handleCategoryHover('sur_mesure.jpg')}
            onMouseLeave={() => handleCategoryHover('banner_image.jpg')}
          >
            <img src='sur_mesure.jpg' alt='Site sur mesure'></img>Site sur mesure
          </h3>
        </section>
        <img className='categories_services_image' src={hoveredImage} alt='Banner'></img>
      </section>
    </section>
  );
};

export default ServicesIntro;