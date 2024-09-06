import React from 'react'
import './contact_homepage.css'

const ContactHomepage = () => {
  return (
    <section className='footer_section'>
    <section className='contact_homepage'>
    <section className='contact_homepage_image'>
      <img id='image_footer' src='banner_image.jpg'></img></section>
      <section className='contact_homepage_informations'>
        <h2>Un Projet ? Nous contactez</h2>
        <ul>
        <li>650 rue isidore de pommery
            60400 CUTS
          </li><br></br>
          <li>06.27.57.59.07</li><br></br>
          <li>codemetasolutions@gmail.com</li>
        </ul>
        <section className='contact_icons_reseaux'>
        <a href="https://www.facebook.com/profile.php?id=61553609851196">
          <img alt="logo facebook" src='facebook.svg'></img></a>
          <a href="https://www.instagram.com/codemeta.solutions/">
          <img alt="logo instagram"  src='instagram.svg'></img></a>
          <a href='https://www.linkedin.com/in/steven-carneiro-moreira-742626264/'>
          <img alt='logo likedin' src='linkedin.svg'></img></a>
        </section>
        </section>
    </section>
            <section className='footer_top'>
      <img className='logo_banner_contact' src='codemeta_solutions.png'></img>
      <h2>Votre partenaire pour des solutions web sur mesure</h2>
      </section>
    </section>
  )
}

export default ContactHomepage