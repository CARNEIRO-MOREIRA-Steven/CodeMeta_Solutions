"use client"
import React, {useEffect, useRef, useState} from 'react'
import './services_intro.css'
import {motion, useAnimation} from "framer-motion";


const ServicesIntro = () => {
  const [portefolioVisible , portefolioIsVisible] = useState(false);
  const projetContainer = useAnimation();
  const portefolioImage = useAnimation();
  const sectionTitle = useAnimation();
  const imageProjet = useAnimation();
  const controlsButtonLeft = useAnimation();
  const controlsButtonRight = useAnimation();
  const asideProjet = useAnimation();
  const portefolioRef = useRef(null)

  useEffect (() =>{
    const portefolioTopOffset = portefolioRef.current.offsetTop; 
    
    const handleScroll = () => {
      if(window.scrollY > portefolioTopOffset - window.innerHeight / 1.5){
        portefolioIsVisible(true)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  useEffect(() => {
    const animatePortefolio = async () => {
      if(portefolioVisible){
        await Promise.all ([
        portefolioImage.start({
          opacity : 1, 
          scale : 1,
          transition : { duration : 0.7 }
        }),
        sectionTitle.start({
        opacity : 1, 
        scale : 1,
        transition : { duration : 0.7 }
      }),
      ])
        await imageProjet.start({
          opacity : 1,
          scale : 1
          })
        await controlsButtonLeft.start({
          y : 0,
          opacity : 1,
        })
        await controlsButtonRight.start({
          y : 0,
          opacity : 1,
        })
        await asideProjet.start({
          opacity : 1,
          scale : 1,
          transition : { duration : 1 }
        })
      }
    }; animatePortefolio();

  },[portefolioVisible, portefolioImage, imageProjet, controlsButtonLeft, controlsButtonRight, sectionTitle,] ) 

  const [slideProjet, setSlideProjet] = useState(0);

  const Projet = [
    {
      name : "Site vitirne",
      description : "Un site vitrine est conçu pour présenter votre entreprise et vos services de manière professionnelle. Idéal pour attirer de nouveaux clients et renforcer votre présence en ligne.",
      tarif : "A partir de 800€",
      image : "vitrine.jpg",
    },
    {
      name : "Site E-commerce",
      description : "Un site e-commerce vous permet de vendre vos produits en ligne avec une plateforme sécurisée et facile à gérer. Parfait pour développer votre activité et atteindre une clientèle plus large.",
      tarif : "A partir de 1000€",
      image : "e_commerce.jpg",
    },
    {
      name : "Portfolio Professionnel",
      description : "Un portfolio professionnel met en valeur vos réalisations, compétences et projets passés.Essentiel pour les freelances, artistes et professionnels souhaitant montrer leur travail.",
      tarif : "A partir de 800€",
      image : "portfolio_pro.jpg",
    },
    {
      name : "Site de Réservation de Services",
      description : "Un site de réservation de services facilite la gestion des rendez-vous et des réservations en ligne. Idéal pour les salons de beauté, restaurants, coachs et autres prestataires de services.",
      tarif : "A partir de 1500€",
      image : "reservation.jpg",
    },
    {
      name : "Site sur Mesure",
      description : "Un site sur mesure est entièrement personnalisé pour répondre à vos besoins spécifiques et uniques. Idéal pour les projets complexes nécessitant des fonctionnalités particulières et une personnalisation avancée.",
      tarif : "A partir de 1500€",
      image : "sur_mesure.jpg",
    },
  ] 

  const openLink = () => {
    const sectionId = `#${Projet[slideProjet].name.replace(/\s+/g, '-').toLowerCase()}`;
    window.location.href = `/services${sectionId}`;
  };
  
  

  const prevSlide = async () => {
    // Désactive le défilement
    document.body.classList.add('no-scroll');
  
    await imageProjet.start({ scale: 0 });
    await projetContainer.start({ x: '200%', transition: { duration: 0.2 } });
    setSlideProjet((slideProjet - 1 + Projet.length) % Projet.length);
    await controlsButtonLeft.start({ x: '-100px' });
    await controlsButtonRight.start({ x: '100px' });
    await imageProjet.start({ x: '-100px' });
    await projetContainer.start({ x: '0%', transition: { duration: 0.2 } });
    await imageProjet.start({ scale: 1, x: 0 });
    await controlsButtonLeft.start({ x: '0px' });
    await controlsButtonRight.start({ x: '0px' });
  
    // Réactive le défilement
    document.body.classList.remove('no-scroll');
  };
  
  const nextSlide = async () => {
    // Désactive le défilement
    document.body.classList.add('no-scroll');
  
    await imageProjet.start({ scale: 0 });
    await projetContainer.start({ x: '200%', transition: { duration: 0.2 } });
    setSlideProjet((slideProjet + 1) % Projet.length);
    await imageProjet.start({ x: '-100px' });
    await controlsButtonRight.start({ x: '100px' });
    await controlsButtonLeft.start({ x: '-100px' });
    await projetContainer.start({ x: '0%', transition: { duration: 0.2 } });
    await imageProjet.start({ scale: 1, x: 0 });
    await controlsButtonLeft.start({ x: '0px' });
    await controlsButtonRight.start({ x: '0px' });
  
    // Réactive le défilement
    document.body.classList.remove('no-scroll');
  };
  
  const projetActuel = Projet[slideProjet];

  return (
    <motion.section className='homepage_portfolio' ref={portefolioRef}>
       <motion.button
          animate={controlsButtonLeft}
          initial={{y : 250, opacity : 0}}
          className='prev_projet' type='submit' onClick={prevSlide}><img className='chevron' src='./chevron-left-solid.svg'></img></motion.button>
          <motion.button
          animate={controlsButtonRight}
          initial={{y : 250, opacity : 0}}
          className='next_projet' type='submit' onClick={nextSlide}><img className='chevron' src='./chevron-right-solid.svg'></img></motion.button>
          <motion.section className='image_section'>          
          <motion.section
          animate={portefolioImage}
          initial={{scale : 0,opacity : 0}}
          className='projet_visualisation'>
          <motion.img className='projet_capture'
          animate={imageProjet}
          initial={{opacity : 0, scale : 1.5}}
          src={projetActuel.image}></motion.img>
          </motion.section></motion.section>
          <motion.section className='projet_container'
          animate={projetContainer}
          initial={{x :0}}>
          <section className='projet_description'>
          <motion.h2
          animate={sectionTitle}
          initial={{scale : 0,opacity : 0}}
          className='homepage_portfolio_title'>Explorez nos services.</motion.h2>
          <motion.aside
          animate={asideProjet}
          initial={{scale : 0, opacity:0}}
          className='projet_informations'>
          <h2>{projetActuel.name}</h2>
          <p>{projetActuel.description}</p>
          <p>{projetActuel.tarif}</p>
          <button className='link_button' onClick={openLink}>En savoir plus sur ce service</button>
          </motion.aside>
          </section>
          </motion.section>
    </motion.section>
  )
}

export default ServicesIntro