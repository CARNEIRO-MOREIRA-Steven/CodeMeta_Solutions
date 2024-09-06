import './banner.css';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from "framer-motion";

const Banner = () => {
  const [bannerVisible , bannerIsVisible] = useState(true);
  const titleControls = useAnimation();
  const imageControls = useAnimation();
  const aProposControls = useAnimation();
  const nosServicesControls = useAnimation();
  const asideRealisationControls= useAnimation();
  const asideContactControls = useAnimation();
  const bannerRef = useRef(null);

  useEffect(() => {
    const bannerTopOffset = bannerRef.current.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > bannerTopOffset - window.innerHeight / 2) {
        bannerIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const animateBanner = async () => {
      if (bannerVisible) {
        await titleControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.7 }
        });
        await imageControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1 }
        });
        await Promise.all([
          aProposControls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 }
          }),
          nosServicesControls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 }
          })
        ]);
        await asideContactControls.start({
          opacity : 1,
          y : 0,
          transition : { duration : 0.5, delay : 0.3},
        });
        await asideRealisationControls.start({
          opacity : 1,
          y : 0,
          transition : { duration : 0.5}
        });
      }
    };
    animateBanner();
  }, [titleControls, imageControls, bannerVisible, asideContactControls, asideRealisationControls, nosServicesControls, aProposControls]);

  return (
    <motion.section ref={bannerRef} className='banner'>
      <section className='banner_section'>
        <div className="banner_background"></div>
        <section className='banner_texte'>
          <motion.h1
            animate={titleControls}
            initial={{opacity : 0, y : -250}}
            className='banner_title'>
            Créons ensemble un site web qui fait la différence.
          </motion.h1>
          <aside className='aside_button'>
            <motion.button 
              animate={aProposControls}
              initial={{opacity : 0, x : -250}}
              className='button_banner'>
              <a href='/a_propos'>A Propos</a>
            </motion.button>
            <motion.button 
              animate={nosServicesControls}
              initial={{opacity : 0, x : 450}}
              className='button_banner'>
              <a href='/services'>Nos Services</a>
            </motion.button>
          </aside>
        </section>
        <section className='banner_aside_right'>
          <motion.a href='#projet_intro_title'
          animate={asideRealisationControls}
          initial={{opacity : 0, y : -250}}>
        <aside className='aside_realisation'>
          <img className='aside_image' src='Pc_NeufMoisDemain.png'></img>
          <h3>Nos dernières réalisations
            <img className='aside_image_chevron' src='caret-right-solid.svg'></img>
          </h3>
        </aside>
        </motion.a>
        <motion.a href='/contact'
        animate={asideContactControls}
        initial={{opacity : 0, y : -250}}>
        <aside className='aside_contact'>
        <img className='aside_image' src='image_contact.png'></img>
          <h3>Contactez-nous
          <img className='aside_image_chevron' src='caret-right-solid.svg'></img>
          </h3>
        </aside>
        </motion.a>
        </section>
      </section>
    </motion.section>
  );
}

export default Banner;
