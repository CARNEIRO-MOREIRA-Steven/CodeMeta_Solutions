"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Empêche le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <header>
      <nav className="desktop-nav">
        <Link href='/'>Accueil</Link>
        <Link href='/a_propos'>À propos</Link>
        <Link href='/services'>Services</Link>
        {/* <Link href='/projets'>Projets</Link> */}
        <Link href='/temoignages'>Témoignages</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
      <div className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className={isMenuOpen ? 'open' : ''}>
            <li><Link href='/'>Accueil</Link></li>
            <li><Link href='/a_propos'>À propos</Link></li>
            <li><Link href='/services'>Services</Link></li>
            {/* <li><Link href='/projets'>Projets</Link></li> */}
            <li><Link href='/temoignages'>Témoignages</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
      <img className='header_logo' src='./codemeta_solutions.png' alt='logo entreprise'></img>
    </header>
  );
};

export default Header;
