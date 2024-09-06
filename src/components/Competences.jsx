"use client"
import React, { useEffect, useRef, useState } from 'react'
import './competences.css'
import {motion, useAnimation} from "framer-motion";

const Competences = () => {
  const [competenceVisible, competenceIsVisible] = useState(false);
  const competenceTitleControls = useAnimation();
  const competenceTitleh3Controls = useAnimation();
  const competenceCard1Controls = useAnimation();
  const imageCard1 = useAnimation();
  const competenceCard2Controls = useAnimation();
  const imageCard2 = useAnimation();
  const competenceCard3Controls = useAnimation();
  const imageCard3 = useAnimation();
  const competenceRef = useRef(null);

  useEffect(() => {
    const competenceTopOffset = competenceRef.current.offsetTop

    const handleScroll = () => {
      if(window.scrollY > competenceTopOffset - window.innerHeight / 1.5){
        competenceIsVisible(true)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  useEffect(() => {
    const animateServices = async () => {
      if(competenceVisible){
        await competenceTitleControls.start({
          opacity : 1,
          y : 0,
          transition : { duration : 0.7 }
        });
        await competenceTitleh3Controls.start({
          opacity : 1,
          y : 0,
          transition : { duration : 0.5 }
        });
        await imageCard1.start({
          opacity : 1,
        });
        await competenceCard1Controls.start({
          opacity : 1,
          scale : 1,
          transition : { duration : 0.5, delay : 0.2}
        });
        await imageCard2.start({
          opacity : 1,
        });
        await competenceCard2Controls.start({
          opacity : 1,
          scale : 1,
          transition : { duration : 0.5, delay : 0.2 }
        });
        await imageCard3.start({
          opacity : 1,
        });
        await competenceCard3Controls.start({
          opacity : 1,
          scale : 1,
          transition : { duration : 0.5, delay : 0.2 }
        });
      }
    };
    animateServices();
  }, [competenceVisible, competenceTitleControls,imageCard1, competenceCard1Controls, imageCard2, competenceCard2Controls, imageCard3,
    competenceCard3Controls])

  return (
    <motion.section ref={competenceRef} className='homepage_competence'>
      <motion.h2 
      animate={competenceTitleControls}
      initial={{opacity : 0, y : -250}}
      className='homepage_competence_title'> 
      Débloquez le pouvoir du codage.<br></br> Transformons vos idées en chefs-d'œuvre numériques.
      </motion.h2>
      <motion.h3
      animate={competenceTitleh3Controls}
      initial={{opacity : 0, y : 100}}
      className='homepage_competence_h3'>
      En tant que développeurs front-end passionnés, nous mettons notre expertise au service de la création de sites web qui allient esthétique et convivialité.</motion.h3>
      <section className='homepage_competence_container'>
        <section
        className='homepage_competence_card'>
          <motion.img
          animate={imageCard1}
          initial={{opacity:0}} className='competence_image' src='./swatchbook-solid.svg'></motion.img>
          <motion.section className='homepage_card_description'
          animate={competenceCard1Controls}
          initial={{opacity : 0, scale : 0}}>
          <h3 className='competence_card_title'> Conception Moderne et Intuitive</h3>
          <p> Nous croyons que chaque projet mérite une interface qui captive et engage les utilisateurs. Grâce à notre maîtrise des technologies comme HTML, CSS, et JavaScript, Next.Js
            nous créons des expériences web qui allient design attrayant et performance. </p>
          </motion.section>
        </section>
        <section className='homepage_competence_card'>
        <motion.img animate={imageCard2}
          initial={{opacity:0}} className='competence_image' src='./connectdevelop-brands-solid.svg'></motion.img>
        <motion.section className='homepage_card_description'
        animate={competenceCard2Controls}
        initial={{opacity : 0, scale : 0}}>
          <h3 className='competence_card_title'> Frameworks de Pointe pour des Sites Web Dynamiques </h3>
          <p> Nous utilisons une large gamme de frameworks modernes, comme Next.js, React, pour développer des sites web dynamiques et interactifs, parfaitement adaptés aux besoins de
            votre entreprise et de vos utilisateurs. </p>
        </motion.section>
        </section>
        <section
        className='homepage_competence_card'>
        <motion.img animate={imageCard3}
          initial={{opacity:0}} className='competence_image' src='./users-solid.svg'></motion.img>
        <motion.section className='homepage_card_description'
        animate={competenceCard3Controls}
        initial={{opacity : 0, scale : 0}}>
          <h3 className='competence_card_title'> Approche Centrée sur l'Utilisateur </h3> 
          <p> En combinant notre expertise technique avec une compréhension approfondie des besoins de vos utilisateurs, nous concevons des interfaces utilisateur exceptionnelles qui
            transforment chaque visite en une expérience mémorable et engageante. </p>
        </motion.section>
        </section>
      </section>
    </motion.section>
  )
}

export default Competences