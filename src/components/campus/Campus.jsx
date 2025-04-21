import React, { useRef, useState, useEffect } from 'react';
import "./Campus.css";
import gallery_2 from '../../assets/WhatsAppImage2.jpg';
import gallery_3 from '../../assets/WhatsAppImage3.jpg';
import gallery_4 from '../../assets/WhatsAppImage4.jpg';
import gallery_5 from '../../assets/WhatsAppImage5.jpg';
/* import white_arrow from '../../assets/white-arrow.png';
 */import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';

import user_1 from '../../assets/photo1.jpg';
import user_2 from '../../assets/photo2.jpg';
import user_3 from '../../assets/photo3.jpg';
import user_4 from '../../assets/photo4.jpg';
import user_5 from '../../assets/photo5.jpg';
import user_6 from '../../assets/photo6.jpg';
import user_7 from '../../assets/photo7.jpg';
import user_8 from '../../assets/photo8.jpg';
import user_9 from '../../assets/photo9.jpg';
import user_10 from '../../assets/photo10.jpg';
import user_11 from '../../assets/photo11.jpg';
import user_12 from '../../assets/photo12.jpg';
import user_13 from '../../assets/photo13.jpg';
import user_14 from '../../assets/photo14.jpg';
import user_15 from '../../assets/photo15.jpg';
import user_16 from '../../assets/photo16.jpg';
import user_17 from '../../assets/photo17.jpg';
import user_18 from '../../assets/photo18.jpg';
import user_19 from '../../assets/photo19.jpg';
import user_20 from '../../assets/photo20.jpg';

const Campus = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [user_1, user_2, user_3, user_4, user_5, user_6, user_7, user_8, user_9, 
    user_10, user_11, user_12, user_13, user_14, user_15, user_16, user_17, user_18, user_19, user_20
  ];

  // Auto-advance slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  const handlePrev = () => {
    const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  return (
    <>
      <div className='campus'>
        <p>Gallery</p>
        <h2>Campus Photos</h2>
        <div className="gallery">
        <img src={user_20} alt="Campus auditorium" />
        <img src={gallery_3} alt="Campus library" />
          <img src={gallery_4} alt="Campus garden" />
          <img src={gallery_5} alt="Campus auditorium" />
        </div>
        <button className='btn dark-btn'>
          See more here 
        </button>
      </div>

      <div className="testimonials">
        <button className='back-btn' onClick={handlePrev}>
          <img src={back_icon} alt="Previous slide" />
        </button>
        <button className='next-btn' onClick={handleNext}>
          <img src={next_icon} alt="Next slide" />
        </button>
        
        <div className="slider-container">
          <div className="slider" ref={sliderRef} style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <div className="user-info">
                  <img 
                    src={slide} 
                    alt={`Campus photo ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Campus;





