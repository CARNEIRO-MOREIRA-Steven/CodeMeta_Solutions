"use client"
import React, {useEffect, useRef, useState} from 'react'
import './portfolio_intro.css'
import {motion, useAnimation} from "framer-motion";


const PortfolioIntro = () => {
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
      name : "Mon Portefolio",
      objectif : "Créer et publier mon portefolio de développeur",
      tags : [ "HTML", "CSS", "NEXT"],
      github :"https://github.com/Squaad6z/portefolio",
      link: "https://portefolio-carneiro-moreira.vercel.app/",
      iphone : "./portefolio_capture.png",
    },
    {
      name : "Ohmyfood",
      objectif : "Améliorez l'interface d'un site mobile avec des animations CSS",
      tags : ["HTML", "CSS"],
      github :"https://github.com/Squaad6z/Ohmyfood",
      link : "https://CARNEIRO-MOREIRA-Steven.github.io/Ohmyfood/",
      iphone : "./ohmyfood_iphone.webp",
    },
    {
      name : "L'espace d'un Instant",
      objectif : "Développer le site web d'une maison d'hote",
      tags : ["WordPress"],
      link : "https://lespaced1instant.com/",
      iphone : "./lespaced1instant.png"
    }
  ] 

  const openLink = () => {
    const openLinkIphone = Projet[slideProjet].link;
    window.open(openLinkIphone, '_blank');
  };
  

  const prevSlide = async () => {
    await imageProjet.start({scale : 0})
    await projetContainer.start({ x: '200%', transition: { duration: 0.5 } }),
    setSlideProjet((slideProjet - 1 + Projet.length) % Projet.length);
    await controlsButtonLeft.start({x : '-100px'})
    await controlsButtonRight.start({x : '100px'})
    await imageProjet.start({x:'-100px'})
    await projetContainer.start({ x: '0%', transition: { duration: 0.5 } });
    await imageProjet.start({scale : 1})
  };

  const nextSlide = async () => {
    await imageProjet.start({scale : 0,})
    await projetContainer.start({ x: '200%', transition: { duration: 0.5 } });
    setSlideProjet((slideProjet + 1) % Projet.length);
    await imageProjet.start({x:'-100px'})
    await controlsButtonRight.start({x : '100px'})
    await controlsButtonLeft.start({x : '-100px'})
    await projetContainer.start({ x: '0%', transition: { duration: 0.5 } });
    await imageProjet.start({scale : 1})
  };
  const projetActuel = Projet[slideProjet];

  return (
    <motion.section className='homepage_portfolio' ref={portefolioRef}>
          <motion.section className='projet_container'
          animate={projetContainer}
          initial={{x :0}}>
          <motion.button
          animate={controlsButtonLeft}
          initial={{y : 250, opacity : 0}}
          className='prev_projet' type='submit' onClick={prevSlide}><img className='chevron' src='./chevron-left-solid.svg'></img></motion.button>
          <motion.button
          animate={controlsButtonRight}
          initial={{y : 250, opacity : 0}}
          className='next_projet' type='submit' onClick={nextSlide}><img className='chevron' src='./chevron-right-solid.svg'></img></motion.button>
          <motion.section
          animate={portefolioImage}
          initial={{scale : 0,opacity : 0}}
          className='projet_visualisation'>
          <img className='image_iphone' src='./iphone.png'></img>
          <motion.img className='projet_capture'
          animate={imageProjet}
          initial={{opacity : 0, scale : 1.5}}
          src={projetActuel.iphone}></motion.img>
          </motion.section>
          <section className='projet_description'>
          <motion.h2
          animate={sectionTitle}
          initial={{scale : 0,opacity : 0}}
          className='homepage_portfolio_title'>Explorez nos projets, le reflet de notre expertise en action.</motion.h2>
          <motion.aside
          animate={asideProjet}
          initial={{scale : 0, opacity:0}}
          className='projet_informations'>
          <h2>{projetActuel.name}</h2>
          <p>{projetActuel.objectif}</p>
          <ul className='tag_liste'>{projetActuel.tags.map((tag, index) => (
          <li key={index} className={`tag tag_${tag.toLowerCase()}`}>{tag}</li>
          ))}</ul>
          <button className='link_button' onClick={openLink}>Consultez le site</button>
          </motion.aside>
          </section>
          </motion.section>
    </motion.section>
  )
}

export default PortfolioIntro