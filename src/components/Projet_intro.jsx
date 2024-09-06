import React from 'react';
import './projet_intro.css';

const Projet_intro = () => {
  const Projets = [
    {
      link: "https://neufmoisdemain.com/",
      title: "Neuf Mois Demain",
      image: './NeufMoisDemain.png'
    },
    {
      link: "https://lespaced1instant.com/",
      title: "L'espace d'un Instant",
      image: './lespaceduninstant.png'
    },
  ];

  const openLink = (index) => {
    const openLinkProjet = Projets[index].link;
    window.open(openLinkProjet, '_blank');
  }

  return (
    <section className='section_projet_intro'>
      <h2 id='projet_intro_title'>Nos dernières réalisations</h2>
      <section className='section_differents_projets'>
        {Projets.map((projet, index) => (
          <section 
            className='info_projet' 
            onClick={() => openLink(index)} 
            key={index}
          >
            <h3>{projet.title}</h3>
            <img className='image_projet' src={projet.image} alt={projet.title} />
          </section>
        ))}
      </section>
    </section>
  );
}

export default Projet_intro;
