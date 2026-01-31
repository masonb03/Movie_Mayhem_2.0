import React from 'react'
import {Link} from 'react-router-dom';
import search from '../../assets/search_icon.svg'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <Link to="/" className='nav__link'>Home</Link>
          <Link className='nav__link'>Browse</Link>
        </div>
        <div className="navbar__right">
          <div className="search__container">
          <input 
          type="text"
          placeholder='Search...'
          className="search__bar"/>
          <img src={search} alt="" className="icon" />
          </div>
          <Link className='nav__link nav__link--login'>Login</Link>
          <Link className='nav__link nav__link--signup'>Signup</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar