"use client"
import React, { useEffect, useRef, useState } from 'react'
import './competences.css'
import {motion, useAnimation} from "framer-motion";

const Competences = () => {
  const [servicesVisible, servicesIsVisible] = useState(false);
  const servicesTitleControls = useAnimation();
  const servicesCard1Controls = useAnimation();
  const servicesCard2Controls = useAnimation();
  const servicesCard3Controls = useAnimation();
  const servicesRef = useRef(null);

  useEffect(() => {
    const servicesTopOffset = servicesRef.current.offsetTop

    const handleScroll = () => {
      if(window.scrollY > servicesTopOffset - window.innerHeight / 1.5){
        servicesIsVisible(true)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  useEffect(() => {
    const animateServices = async () => {
      if(servicesVisible){
        await servicesTitleControls.start({
          opacity : 1,
          y : 0,
          transition : { duration : 0.7 }
        });
        await servicesCard1Controls.start({
          opacity : 1,
          scale : 1,
          transition : { duration : 0.5}
        });
        await servicesCard2Controls.start({
          opacity : 1,
          scale : 1,
          transition : { duration : 0.5, delay : 0.2 }
        });
        await servicesCard3Controls.start({
          opacity : 1,
          scale : 1,
          transition : { duration : 0.5, delay : 0.2 }
        })
      }
    };
    animateServices();
  }, [servicesVisible, servicesTitleControls, servicesCard1Controls, servicesCard2Controls,
    servicesCard3Controls])

  return (
    <motion.section ref={servicesRef} className='homepage_services'>
      <motion.h2 
      animate={servicesTitleControls}
      initial={{opacity : 0, y : -250}}
      className='homepage_services_title'> 
      Débloquez le pouvoir du codage. Transformons vos idées en chefs-d'œuvre numériques.
      </motion.h2>
      <section className='homepage_services_container'>
        <motion.section
        animate={servicesCard1Controls}
        initial={{opacity : 0, scale : 0}}
        className='homepage_services_card'>
          <img className='banner_image' src='./code-solid.svg'></img>
          <h3 className='services_card_title'> En tant que Développeur front-end passionné </h3>
          <p> Nous mettons notre expertise au services de la création de site web qui allient esthétique et convivialité. </p>
        </motion.section>
        <motion.section
        animate={servicesCard2Controls}
        initial={{opacity : 0, scale : 0}}
        className='homepage_services_card'>
        <img className='banner_image' src='./code-solid.svg'></img>
          <h3 className='services_card_title'> Fortement versés dans des frameworks modernes </h3>
          <p> Tels que Next.js, nous sommes en mesure de créer des expériences web hautement dynamiques et interactives. </p>
        </motion.section>
        <motion.section 
        animate={servicesCard3Controls}
        initial={{opacity : 0, scale : 0}}
        className='homepage_services_card'>
        <img className='banner_image' src='./code-solid.svg'></img>
          <h3 className='services_card_title'> En combinant notre expertise </h3> 
          <p> En HTML, CSS, JavaScript et autres technologies front-end, nous sommes en mesure de créer des interfaces utilisateur 
          exceptionnelles qui captivent et engagent les utilisateurs. </p>
        </motion.section>
      </section>
    </motion.section>
  )
}

export default Competences