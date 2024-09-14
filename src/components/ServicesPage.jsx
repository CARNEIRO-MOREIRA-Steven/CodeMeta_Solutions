"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./services_page.css";
import ServicesDescription from "./ServicesDescription";

const ServicesPage = () => {
  const serviceIntroTitle = useAnimation();
  const serviceIntroDescription = useAnimation();

  useEffect(() => {
    const animateIntro = async () => {
      await serviceIntroTitle.start({
        scale: 1,
        transition: { duration: 0.3, delay: 0.2 },
      });
      await serviceIntroDescription.start({
        x: 0,
        transition: { duration: 0.7, delay: 0.3 },
      });
    };

    animateIntro();
  }, [serviceIntroTitle, serviceIntroDescription]);

  //Effet Menu
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
      <aside className='intro_content'>
          <motion.h1 animate={serviceIntroTitle}
          initial={{ scale : 0 }}>Nos Services</motion.h1>
          <motion.p animate={serviceIntroDescription}
          initial = {{ x : -950}}>Nous proposons une gamme complète de services web pour aider votre entreprise à prospérer en ligne. Que vous ayez besoin d'un site vitrine, d'un site e-commerce,
             d'un portfolio professionnel, ou d'une solution entièrement sur mesure, nous avons ce qu'il vous faut. Découvrez nos services en détail ci-dessous.</motion.p>
      </aside>
      </section>
      <ServicesDescription />
    </section>
  );
}

export default ServicesPage;
