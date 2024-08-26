import React from 'react'
import './services_prix.css'

const ServicesPrix = () => {
  return (
    <section className='section_services_prix'>
        <h2 className='services_prix_title'>Nos Tarifs</h2>
        <h3 className='services_prix_subtitle'>Avec des plans abordables et flexibles, vous pouvez saisir les opportunités comme vous le souhaitez ou en avez besoin.</h3>
        <section className='section_card_services_prix'>
        <img className='section_card_services_prix_image' src='image_pc_pricing.jpg'></img>
        <section className='card_services_prix'>
        <h3>Site Vitrine</h3>
        <p>À partir de 500€</p>
        <p>Un site vitrine est conçu pour présenter votre entreprise et vos services de manière professionnelle.
        Idéal pour attirer de nouveaux clients et renforcer votre présence en ligne.</p>
        </section>
        <section className='card_services_prix'>
        <h3>Site E-commerce</h3>
        <p>À partir de 600€</p>
        <p>Un site e-commerce vous permet de vendre vos produits en ligne avec une plateforme sécurisée et facile à gérer.
        Parfait pour développer votre activité et atteindre une clientèle plus large.</p></section>
        <section className='card_services_prix'>
        <h3>Portfolio Professionnel</h3>
        <p>À partir de 500€</p>
        <p>Un portfolio professionnel met en valeur vos réalisations, compétences et projets passés.
        Essentiel pour les freelances, artistes et professionnels souhaitant montrer leur travail.</p></section>
        <section className='card_services_prix'>
        <h3>Site de Réservation de Services</h3>
        <p>À partir de 1000€</p>
        <p>Un site de réservation de services facilite la gestion des rendez-vous et des réservations en ligne.
        Idéal pour les salons de beauté, restaurants, coachs et autres prestataires de services.</p></section>
        <section className='card_services_prix'>
        <h3>Site sur Mesure</h3>
        <p>À partir de 1500€</p>
        <p>Un site sur mesure est entièrement personnalisé pour répondre à vos besoins spécifiques et uniques.
        Idéal pour les projets complexes nécessitant des fonctionnalités particulières et une personnalisation avancée.</p></section>
        </section>
    </section>
  )
}

export default ServicesPrix
