import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919443574716'; // Your number in international format (91 is India's code)
    const message = 'Hello, I would like to explore more about your education services!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='hero container'> 
      <div className="hero-text">
        <h1>We ensure better Education for a better world</h1>
        <button className='btn explore-btn' onClick={handleWhatsAppClick}>
          Whats app<img src={dark_arrow} alt="" className="arrow-icon" />
        </button>
        <h2>Hello world</h2>
      </div>
    </div>
  )
}

export default Hero