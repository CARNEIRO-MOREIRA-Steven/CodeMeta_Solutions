"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePath(window.location.pathname);
    };

    handleRouteChange();

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushState', handleRouteChange);
    window.addEventListener('replaceState', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushState', handleRouteChange);
      window.removeEventListener('replaceState', handleRouteChange);
    };
  }, []);

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
        <Link href='/' className={activePath === '/' ? 'active' : ''}>Accueil</Link>
        <Link href='/a_propos' className={activePath === '/a_propos' ? 'active' : ''}>À propos</Link>
        <Link href='/services' className={activePath === '/services' ? 'active' : ''}>Services</Link>
        {/* <Link href='/projets' className={activePath === '/projets' ? 'active' : ''}>Projets</Link> */}
        <Link href='/temoignages' className={activePath === '/temoignages' ? 'active' : ''}>Témoignages</Link>
        <Link href='/contact' className={activePath === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
      <div className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className={isMenuOpen ? 'open' : ''}>
            <li><Link href='/' className={activePath === '/' ? 'active' : ''}>Accueil</Link></li>
            <li><Link href='/a_propos' className={activePath === '/a_propos' ? 'active' : ''}>À propos</Link></li>
            <li><Link href='/services' className={activePath === '/services' ? 'active' : ''}>Services</Link></li>
            {/* <li><Link href='/projets' className={activePath === '/projets' ? 'active' : ''}>Projets</Link></li> */}
            <li><Link href='/temoignages' className={activePath === '/temoignages' ? 'active' : ''}>Témoignages</Link></li>
            <li><Link href='/contact' className={activePath === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </div>
      </div>
      <img className='header_logo' src='./codemeta_solutions.png' alt='logo entreprise'></img>
    </header>
  );
};

export default Header;
