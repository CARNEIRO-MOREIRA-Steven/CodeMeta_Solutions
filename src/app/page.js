"use client"
import React from 'react'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Competences from '@/components/Competences'
import PortfolioIntro from '@/components/PortfolioIntro'
import ServicesIntro from '@/components/ServicesIntro'
import ContactHomepage from '@/components/ContactHomepage'
import ServicesPrix from '@/components/ServicesPrix'


const page = () => {
  return (
      <section className='page'>
        <Header />
        <Banner />
        <Competences />
        <PortfolioIntro />
        <ServicesIntro />
        <ServicesPrix />
        <ContactHomepage />
      </section>
    )
}

export default page