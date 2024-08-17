"use client"
import React from 'react'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Competences from '@/components/Competences'
import ServicesIntro from '@/components/ServicesIntro'
import ContactHomepage from '@/components/ContactHomepage'
import Projet_intro from '@/components/Projet_intro'


const page = () => {
  return (
      <section className='page'>
        <Header />
        <Banner />
        <Competences />
        <ServicesIntro />
        <Projet_intro />
        <ContactHomepage />
      </section>
    )
}

export default page