import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Movie.css'

export const Movie = () => {

  const [movie, setMovie] = useState()
  const { id } = useParams();
  let navigate = useNavigate();


  async function fetchMovie() {
    const { data } = await axios.get(`https://omdbapi.com/?i=${id}&page=1&apikey=4e75cc56`);
    setMovie(data);
  }

  useEffect(() => {
    fetchMovie();
  }, [id])

  return (
    <>
      <div className="container">
        <div className="row">
        <button className="back__btn" onClick={() => navigate(`/`)}>Back</button>
        {movie && (
        <div className="movie" key={movie.imdbID}>
              <img className='movie__poster' src={movie.Poster} alt="" />
              <div className="movie__info">
              <div className="movie__title">{movie.Title}</div>
              <div className="movie__year">{movie.Year}</div>
              <div className="movie__rated">{movie.Rated}</div>
              <div className="movie__released">{movie.Released}</div>
              <div className="movie__runtime">{movie.Runtime}</div>
              <div className="movie__plot">{movie.Plot}</div>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  )
}
