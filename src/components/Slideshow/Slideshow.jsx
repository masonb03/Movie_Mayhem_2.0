import React, { useState, useEffect } from 'react'
import banner1 from '../../assets/Fnaf_banner.jpg'
import banner2 from '../../assets/hero_banner.jpg'
import banner3 from '../../assets/invincible_banner.jpg'
import banner4 from '../../assets/stranger_banner.jpg'
import banner5 from '../../assets/wednesday_banner.jpg'
import "./Slideshow.css"

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const banners = [banner1, banner2, banner3, banner4, banner5];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="slideshow__container">
      <div className="hero__banner">
        {banners.map((banner, index) => (
          <img 
            key={index}
            src={banner} 
            alt={`Banner ${index + 1}`}
            className={`mySlides ${index === slideIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow