import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from "../../assets/bee_logo-removebg-preview.png"
import menu_icon from "../../assets/menu-icon.png"


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" width={30} className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500} onClick={() => setMobileMenu(false)}>Home</Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-150} duration={500} onClick={() => setMobileMenu(false)}>Program</Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-170} duration={500} onClick={() => setMobileMenu(false)}>About Us</Link>
        </li>
        <li>
          <Link to="admission" smooth={true} offset={-170} duration={500} onClick={() => setMobileMenu(false)}>Admission</Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} offset={-210} duration={500} onClick={() => setMobileMenu(false)}>Gallery</Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} offset={-210} duration={500} className="btn" onClick={() => setMobileMenu(false)}>Contact Us</Link>
        </li>
      </ul>

      <img src={menu_icon} alt="" className='menu-icon ' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
