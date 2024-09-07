"use client"
import React, {  useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './services_page.css';

const ServicesPage = () => {

  // const [activeImage, setActiveImage] = useState('user-tie-solid.svg'); // Image par défaut
  // const { scrollYProgress } = useScroll();

  // // const scale = useTransform(scrollYProgress, [0, 1], [1, 2]); 
  // const y = useTransform(scrollYProgress, [0, 1.5], ['0%', '100%']); 

  // useEffect(() => {
  //   scrollYProgress.onChange((progress) => {
  //     // Change l'image en fonction du scroll
  //     if (progress > 0.14 && progress < 0.29) {
  //       setActiveImage('user-tie-solid.svg');
  //     } else if (progress >= 0.29 && progress < 0.44) {
  //       setActiveImage('store-solid.svg');
  //     } else if (progress >= 0.44 && progress < 0.59){
  //       setActiveImage('gear-solid.svg');
  //     } else if (progress >= 0.59 && progress < 0.74){
  //       setActiveImage('code-solid_blue.svg');
  //     } else if (progress >= 0.74 && progress < 0.89){
  //       setActiveImage('gear-solid.svg');
  //     } else if (progress >= 0.89 && progress < 0.99){
  //       setActiveImage('user-tie-solid.svg');
  //     }
       
  //   });
  // }, [scrollYProgress]);

  useEffect(() => {
    const handleMenuClick = () => {
      if (window.innerWidth <= 768) {
        document.querySelector('.side-menu').classList.toggle('open');
      }
    };

    const handleOutsideClick = (event) => {
      if (window.innerWidth <= 768) {
        const menu = document.querySelector('.side-menu');
        if (!menu.contains(event.target) && !menu.classList.contains('open')) {
          menu.classList.remove('open');
        }
      }
    };

    document.querySelectorAll('.side-menu ul li a').forEach(link => {
      link.addEventListener('click', handleMenuClick);
    });

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.querySelectorAll('.side-menu ul li a').forEach(link => {
        link.removeEventListener('click', handleMenuClick);
      });
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <section className='container_services'>
      {/* <motion.img
        src={activeImage}
        alt="Image Dynamique"
        style={{
          position: 'fixed', // Fixe l'image pour qu'elle reste en vue lors du scroll
          top: '20%', // Position initiale
          left: '50%',
          transform: 'translateX(-50%)', // Centrer horizontalement
          // scale,
          y, // Applique le déplacement vertical
          width: '200px', // Taille de l'image
          height: 'auto',
        }}
      /> */}
      <aside className='side-menu'>
        <ul>
          <li>
            <img src='./store-solid.svg' className="icon-vitrine" alt="Vitrine"/>
            <a href="#site-vitrine">
              <span className="menu-text">Site Vitrine</span>
            </a>
          </li>
          <li>
            <img src='./basket-shopping-solid.svg' className="icon-ecommerce" alt="E-commerce"/>
            <a href="#site-e-commerce">
              <span className="menu-text">Site E-commerce</span>
            </a>
          </li>
          <li>
            <img src='./user-tie-solid.svg' className="icon-portfolio" alt="Portfolio"/>
            <a href="#portfolio-professionnel">
              <span className="menu-text">Portfolio Professionnel</span>
            </a>
          </li>
          <li>
            <img src='./calendar-day-solid.svg' className="icon-reservation" alt="Réservation"/>
            <a href="#site-de-réservation-de-services">
              <span className="menu-text">Site de Réservation</span>
            </a>
          </li>
          <li>
            <img src='./code-solid_blue.svg' className="icon-surmesure" alt="Sur Mesure"/>
            <a href="#site-sur-mesure">
              <span className="menu-text">Site sur Mesure</span>
            </a>
          </li>
          <li>
            <img src='./gear-solid.svg' className="icon-supplementaires" alt="Supplémentaires"/>
            <a href="#services-supplementaires">
              <span className="menu-text">Services Supplémentaires</span>
            </a>
          </li>
        </ul>
      </aside>
      <section className='services_intro'>
      <div className='intro_content'>
          <h1>Nos Services</h1>
          <p>Nous proposons une gamme complète de services web pour aider votre entreprise à prospérer en ligne. Que vous ayez besoin d'un site vitrine, d'un site e-commerce, d'un portfolio professionnel, ou d'une solution entièrement sur mesure, nous avons ce qu'il vous faut. Découvrez nos services en détail ci-dessous.</p>
      </div>
      </section>
      <section className='service' id="site-vitrine">
        <section className='service_description'>
        <h2>Site Vitrine</h2>
        <p>
          Un site vitrine est conçu pour présenter votre entreprise et vos services de manière professionnelle. Idéal pour attirer de nouveaux clients et renforcer votre présence en ligne.
        </p>
        <ul>
          <li>Présentation de l'entreprise</li>
          <li>Formulaire de contact</li>
          <li>Section blog pour les actualités</li>
        </ul>
        <p>À partir de <strong>800€</strong></p>
        </section>
        <img className='service_image' src="vitrine.jpg" alt="Exemple de Site Vitrine" />
      </section>
      <section className='service' id="site-e-commerce">
      <section className='service_description'>
        <h2>Site E-commerce</h2>
        <p>
          Un site e-commerce vous permet de vendre vos produits en ligne avec une plateforme sécurisée et facile à gérer. Parfait pour développer votre activité et atteindre une clientèle plus large.
        </p>
        <ul>
          <li>Gestion de catalogue produit</li>
          <li>Options de paiement en ligne</li>
          <li>Gestion des commandes et livraisons</li>
        </ul>
        <p>À partir de <strong>1000€</strong></p>
        </section>
        <img className='service_image' src="e_commerce.jpg" alt="Exemple de Site Vitrine" />
      </section>
      <section className='service' id="portfolio-professionnel">
      <section className='service_description'>
        <h2>Portfolio Professionnel</h2>
        <p>
          Un portfolio professionnel met en valeur vos réalisations, compétences et projets passés. Essentiel pour les freelances, artistes et professionnels souhaitant montrer leur travail.
        </p>
        <ul>
          <li>Galeries d'images et vidéos</li>
          <li>Témoignages et recommandations clients</li>
          <li>Section "À propos" détaillée</li>
        </ul>
        <p>À partir de <strong>800€</strong></p>
        </section>
        <img className='service_image' src="portfolio_pro.jpg" alt="Exemple de Site Vitrine" />
      </section>
      <section className='service' id='site-de-réservation-de-services'>
      <section className='service_description'>
        <h2>Site de Réservation de Services</h2>
        <p>
          Un site de réservation de services facilite la gestion des rendez-vous et des réservations en ligne. Idéal pour les salons de beauté, restaurants, coachs et autres prestataires de services.
        </p>
        <ul>
          <li>Calendrier de réservation en ligne</li>
          <li>Système de paiement sécurisé</li>
          <li>Notifications automatiques</li>
        </ul>
        <p>À partir de <strong>1500€</strong></p>
        </section>
        <img className='service_image' src="reservation.jpg" alt="Exemple de Site Vitrine" />
      </section>
      <section className='service' id='site-sur-mesure'>
      <section className='service_description'>
        <h2>Site sur Mesure</h2>
        <p>
          Un site sur mesure est entièrement personnalisé pour répondre à vos besoins spécifiques et uniques. Idéal pour les projets complexes nécessitant des fonctionnalités particulières et une personnalisation avancée.
        </p>
        <ul>
          <li>Design et fonctionnalités personnalisées</li>
          <li>Intégration de systèmes tiers (CRM, ERP, etc.)</li>
          <li>Développement de fonctionnalités spécifiques</li>
        </ul>
        <p>À partir de <strong>1500€</strong></p>
        </section>
        <img className='service_image' src="sur_mesure.jpg" alt="Exemple de Site Vitrine" />
      </section>
      <section className='service' id='services-supplementaires'>
      <section className='service_description'>
        <h2>Autres Services</h2>
        <p>En plus de la création de sites web, nous offrons également :</p>
        <ul>
          <li>Conception de maquettes sur mesure</li>
          <li>Gestion de l'hébergement et du nom de domaine</li>
          <li>Maintenance et mise à jour régulière du site</li>
        </ul>
      </section>
      <img className='service_image' src="pexels-tranmautritam-326515.jpg" alt="Exemple de Site Vitrine" />
      </section>
    </section>
  );
}

export default ServicesPage;
