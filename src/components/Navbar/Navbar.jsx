import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import search_icon from '../../assets/search_icon.svg'
import './Navbar.css'

const Navbar = () => {

const [search, setSearch] = useState();
let navigate = useNavigate();

function handleSearch() {
  if (search.trim()) {
    navigate(`/browse?search=${(search)}`);
    setSearch('');
  }
}

  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <Link to="/" className='nav__link'>Home</Link>
          <Link to="/browse" className='nav__link'>Browse</Link>
        </div>
        <div className="navbar__right">
          <div className="search__container">
          <input 
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' && handleSearch()}
          placeholder='Search...'
          className="search__bar"/>
          <img src={search_icon} alt="" className="icon" onClick={() => handleSearch()} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar