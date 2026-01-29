import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Titlecard from '../../components/Titlecards/Titlecard';
import banner from '../../assets/hero_banner.jpg'
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={banner} alt="" className='hero__banner'/>
        <div className="hero__caption">
          <h1 className="hero__title">Welcome to Movie Mayhem!</h1>
          <p className="hero__description">America's most useful and enjoyable movie streaming service. Where you can browse for movies and shows you enjoy the most and enjoy your time with friends and family.</p>
        </div>
      </div>
      <div className="movie__section">
        <h1 className="movie__section--title">
          We have a variety of movies and shows
        </h1>
        <Titlecard title={"Top Picks"}/>
        <Titlecard title={"Coming Soon"}/>
        <Titlecard title={""}/>
        <Titlecard title={" Movies "}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home