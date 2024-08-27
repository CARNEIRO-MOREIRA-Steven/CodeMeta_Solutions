import React from 'react';
import { motion } from 'framer-motion';
import './logo_section.css'

const LogoRealisation = () => {
    const logos = [
        'logo_neufmoisdemain.png',
        'logo_cocoandco.png',
        'logo_lespaceduninstant.png',
    ]
    

    return (
        <section className="logos_section">
        <h2 className='logos_section_title'>Ils ont choisi notre expertise</h2>
        <motion.div
          className="logos_slider"
          animate={{ x: ['200%', '-100%'] }} // Animation de 0 à -100% du conteneur
          transition={{
            x: {
              repeat: Infinity, // Répétition infinie
              repeatType: 'loop',
              duration : 15,
              ease: 'linear' // Mouvement linéaire pour une transition fluide
            }
          }}
        >
          <div className="logos_container">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index}`} className="logo_image" />
            ))}
          </div>
        </motion.div>
      </section>
  )
}

export default LogoRealisation
