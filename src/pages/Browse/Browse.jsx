import React from 'react'
import './Browse.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Browse = () => {


    let navigate = useNavigate();

  return (
    <>
    <button className="back__btn" onClick={() => navigate(`/`)}>
        <FontAwesomeIcon icon="arrow-left" />
    </button>
    </>
  )
}

export default Browse