import './banner.css';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from "framer-motion";

const Banner = () => {
  const [bannerVisible , bannerIsVisible] = useState(true);
  const titleControls = useAnimation();
  const imageControls = useAnimation();
  const aProposControls = useAnimation();
  const nosServicesControls = useAnimation();
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
      }
    };
    animateBanner();
  }, [titleControls, imageControls, bannerVisible]);

  return (
    <motion.section ref={bannerRef} className='banner'>
      <section className='banner_section'>
        <div className="banner_background"></div>
        <section className='banner_texte'>
          <motion.h1
            animate={titleControls}
            initial={{opacity : 0, y : -250}}
            className='banner_title'>
            Création web sur mesure. Votre vision, notre expertise.
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
              initial={{opacity : 0, x : 250}}
              className='button_banner'>
              <a href='/services'>Nos Services</a>
            </motion.button>
          </aside>
        </section>
      </section>
    </motion.section>
  );
}

export default Banner;
