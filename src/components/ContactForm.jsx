"use client"
import React, {useState} from 'react'
import './contact_form.css'



const ContactForm= () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState ({
      name : "",
      email : "",
      tel : "",
      subject : "",
      message : "",
  });

  const [isSuccess, setIsSucces] = useState(false)

  const closeSend = (e) => {
    setIsSucces(false)
  }

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      console.log(formData);
  
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log("Message envoyé avec succès !");
          setIsSucces(true)
          setFormData({
            name: "",
            email : "",
            subject: "",
            tel: "",
            message: "",
          });
        } else {
          console.error(
            "Une erreur s'est produite lors de l'envoi du formulaire :",
            response.status, 
            response.statusText         
            );
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de l'envoi du formulaire :",
          error
        );
      } finally {
        setIsSubmitting(false);
      }
    };

  
  return (
    <section className='contact_page'>
      <div className='carte_entreprise'>
      <iframe title='localisationEntreprise' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6159.0724115089415!2d3.106510818616488!3d49.53037514714615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29a8ded827512eff%3A0xdac6c0f8bfbd9757!2sCodeMeta%20Solutions!5e0!3m2!1sfr!2sfr!4v1703525162909!5m2!1sfr!2sfr"></iframe>
      </div>
      <section className='contact_section'>
      <aside className='aside_form'>
      <h3>- Comment me joindre ?</h3> 
      <div className='info_contact'>
      <img alt='icon maison' src='./images/house-solid.svg'></img>
      <p>SIEGE : <br></br> 650 rue Isidore de Pommery<br></br>60400C CUTS</p>
      </div>
      <div className='info_contact'>
      <img alt='icon envelope' src='./images/envelope-solid.svg'></img>
      <p>EMAIL : codemetasolutions@gmail.com</p>
      </div>
      <div className='info_contact'>
      <img alt='icon telephone' src='./images/phone-solid.svg'></img>
      <p>TEL : <br></br> 06.27.57.59.07</p>
      </div>
      <div className='info_contact'>
      <img alt='icon card contact' src='./images/address-card-solid.svg'></img>
      <p>SIRET : <br></br>98234189300013</p>
      </div>
      </aside>
      <section className='container_form'>
      <section className='forms'>
      <form className='form_content' onSubmit={handleSubmit}>
      <div className='name'>
      <label htmlFor='name'></label>
      <input id='name' type='text' name='name' value={formData.name} placeholder='Nom / Prénom' required onChange={handleChange}></input>
    </div>
    <div className='email'>
          <label htmlFor='email'></label>
          <input autoComplete="email" id='email' type='email' name='email' value={formData.email} placeholder='Email' required onChange={handleChange}></input>
        </div>
    <div className='tel'>
      <div className='tel'>
        <label htmlFor='tel'></label>
        <input id='tel' type='text' name='tel' value={formData.tel} placeholder='Téléphone' required onChange={handleChange}></input>
      </div>
    </div>
        <div className='subject'>
        <label htmlFor="subject"></label>
        <input type="text" id="subject" name="subject" value={formData.subject} placeholder="Objet" onChange={handleChange}></input>
        </div>
        <div className='message'>
          <label htmlFor='message'></label>
          <textarea id='message' rows="10" name='message' value={formData.message} placeholder='Message' maxLength={1000} onChange={handleChange}></textarea>
        </div>
        <button type='submit' className='form_button'>{isSubmitting ? <>En cours...</> : "Envoyer"}</button>
        </form>
      </section>
      <section className='form_complement'>
      <p> Nous sommes ravis de pouvoir échanger avec vous et de répondre à toutes vos questions.
        Notre entreprise est idéalement située à Cuts, dans le département de l'Oise (60400)</p>
      <h4>Distance depuis notre emplacement :</h4>
      <ul>
      <li>Noyon : 11 km</li>
      <li>Chauny : 16 km</li>
      <li>Compiègne : 28 km</li>
      <li>Soissons : 30 km</li>
      </ul>
      </section>
      </section>
      </section>
    </section>
  )
}

export default ContactForm