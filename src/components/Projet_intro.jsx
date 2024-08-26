import React from 'react'
import './projet_intro.css'

const Projet_intro = () => {
  return (
    <section className='section_projet_intro'>
      <h2 className='projet_intro_title'>Nos dernières réalisations</h2>
      <section className='section_differents_projets'>
      <section className='info_projet'>
        <h3>Neuf Mois Demain</h3>
        <img className='image_projet' src='./NeufMoisDemain.png'></img>
      </section>
      <section className='info_projet'>
        <h3>Coco & Co'</h3>
        <img className='image_projet' src='./lespaceduninstant.png'></img>
      </section>
      <section className='info_projet'>
        <h3>L'espace d'un Instant</h3>
        <img className='image_projet' src='./lespaceduninstant.png'></img>
      </section>
      </section>
    </section>
  )
}

export default Projet_intro
