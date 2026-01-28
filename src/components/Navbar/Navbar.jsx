import React from 'react'
import './Navbar.css'
import search from '../../assets/search_icon.svg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__left">
        <div className="nav__list">
          <Link className="nav__link">Home</Link>
          <Link className="nav__link">About</Link>
          <Link className="nav__link">Browse</Link>
        </div>
        <div className="search__container">
          <input type="text"
          className="search__bar"
          placeholder='Search'/>
          <img src={search} alt="" className="icon" />
         </div>
      </div>
      <div className="navbar__right">
        <div className="nav__list">
          <Link className="nav__link nav__link--login">Login</Link>
          <Link className="nav__link nav__link--signup">Signup</Link>
        </div>
      </div>
    </div>
  )
}
