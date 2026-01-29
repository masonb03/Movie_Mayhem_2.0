import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Movie = () => {

  const [movie, setMovie] = useState([])
  const { id } = useParams();


  async function fetchMovie(movieId) {
    const { data } = await axios.get(`https://omdbapi.com/?i=${movieId || id}&page=1&apikey=4e75cc56`);
    setMovie(data);
  }

  useEffect(() => {
    fetchMovie();
  }, [])

  return (
    <>
      <div className="movie__container">
        <button className="back__btn">Back</button>
        {/* {movie.map((movie) => (
          <div className="movie" key={movie.imdbID}>
          <div className="movie__title">{movie.Title}</div>
          <div className="movie__year">{movie.Year}</div>
          <div className="movie__rated">{movie.Rated}</div>
          <div className="movie__released">{movie.Released}</div>
          <div className="movie__runtime">{movie.Runtime}</div>
        </div>
        ))} */}
      </div>
    </>
  )
}
