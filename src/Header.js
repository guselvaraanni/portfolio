import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import the icon component
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close the menu after clicking on a link
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='nav'>
      <div className='menu-icon' onClick={toggleMenu}>
          <FaBars /> 
        </div>
        <div onClick={() => scrollToSection('home')} className='site-title'>
          My Portfolio
        </div>
        
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li onClick={() => scrollToSection('home')}>
            <Link to='/home'>Home</Link>
          </li>
          <li onClick={() => scrollToSection('about')}>
            <Link to='/about'>About</Link>
          </li>
          <li onClick={() => scrollToSection('skills')}>
            <Link to='/skills'>Skills</Link>
          </li>
          <li onClick={() => scrollToSection('experience')}>
            <Link to='/experience'>Experience</Link>
          </li>
          <li onClick={() => scrollToSection('education')}>
            <Link to='/education'>Education</Link>
          </li>
          <li onClick={() => scrollToSection('projects')}>
            <Link to='/projects'>Projects</Link>
          </li>
          <li onClick={() => scrollToSection('contact')}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
