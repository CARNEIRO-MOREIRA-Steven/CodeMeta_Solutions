"use client"
import React, { useEffect, useRef, useState } from 'react';
import './projet_intro.css';
import { motion, useAnimation } from 'framer-motion';

const Projet_intro = () => {
  const [projetIntroVisible, projetIntroIsVisible] = useState(false);
  const projetIntroRef = useRef(null);
  const projetIntroTitle = useAnimation();
  
  const Projets = [
    {
      link: "https://neufmoisdemain.com/",
      title: "Neuf Mois Demain",
      image: './NeufMoisDemain.png',
    },
    {
      link: "https://lespaced1instant.com/",
      title: "L'espace d'un Instant",
      image: './lespaceduninstant.png',
    },
  ];

  const projetAnimationsTitle = Projets.map(() => useAnimation());
  const projetAnimationsImage = Projets.map(() => useAnimation());

  useEffect(() => {
    const projetIntroTopOffset = projetIntroRef.current.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > projetIntroTopOffset - window.innerHeight / 1.5) {
        projetIntroIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const animateProjetIntro = async () => {
      if (projetIntroVisible) {
        await projetIntroTitle.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 1 },
        });

        for (let i = 0; i < Projets.length; i++) {
          await Promise.all([
          projetAnimationsTitle[i].start({
            y : 0,
            opacity: 1,
            transition: { duration: 0.4, delay: i * 0.5 },
          }),
          projetAnimationsImage[i].start({
            opacity : 1,
            y: 0,
            transition : { duration : 0.7, delay : i*0.5}
          })
        ])
        }
      }
    };
    animateProjetIntro();
  }, [projetIntroVisible, projetIntroTitle, projetAnimationsTitle, projetAnimationsImage]);

  const openLink = (index) => {
    const openLinkProjet = Projets[index].link;
    window.open(openLinkProjet, '_blank');
  };

  return (
    <motion.section ref={projetIntroRef} className='section_projet_intro'>
      <motion.h2
        id='projet_intro_title'
        animate={projetIntroTitle}
        initial={{ opacity: 0, scale: 0 }}
      >
        Nos dernières réalisations
      </motion.h2>
      <section className='section_differents_projets'>
        {Projets.map((projet, index) => (
          <section
            className='info_projet'
            onClick={() => openLink(index)}
            key={index}
          >
            <motion.h3
              animate={projetAnimationsTitle[index]}
              initial={{ y : -50, opacity: 0 }}
            >
              {projet.title}
            </motion.h3>
            <motion.img
              className='image_projet'
              animate={projetAnimationsImage[index]}
              initial={{opacity : 0, y: 100}}
              src={projet.image}
              alt={projet.title}
            />
          </section>
        ))}
      </section>
    </motion.section>
  );
};

export default Projet_intro;
