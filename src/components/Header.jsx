import React from 'react'
import Link from 'next/link'
import './header.css'

const Header = () => {
  return (
    <header>
      <h1>CodeMeta Solutions</h1>
        <nav>
          <Link href='/'>Acceuil</Link>
          <Link href='/a_propos'>A propos</Link>
          <Link href='/services'>Services</Link>
          <Link href='/projets'>Projets</Link>
          <Link href='/temoignages'>Témoignages</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
        <img className='header_logo' src='./codemeta_solutions.png' alt='logo entreprise'></img>
        </header>
  )
}

export default Header