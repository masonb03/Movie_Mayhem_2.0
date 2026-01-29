import './Footer.css'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <div className="row">
        <ul className="social__list">
          <li className="social__link">
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li className="social__link">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className="social__link">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </ul>
         <ul className='footer__list'>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
      </ul>
      </div>
    </div>
  )
}

export default Footer