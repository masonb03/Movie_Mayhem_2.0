import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Movie.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <div id="movie__body">
    <Navbar />
    <main id="movie__main">
      <div className="container">
        <div className="row">
          <button className="back__btn" onClick={() => navigate(`/`)}>
            <FontAwesomeIcon icon="arrow-left" />
          </button>
            {movie && (
            <div className="movie" key={movie.imdbID}>
                  <img className='single__movie--poster' src={movie.Poster} alt="" />
                  <div className="single__movie--info">
                    <div className="single__movie--primary">
                      <div className="single__movie--title">{movie.Title} <div className="single__movie--rated">{movie.Rated}</div></div>
                      <div className="single__movie--director"><p>Directors</p> {movie.Director}</div>
                      <div className="single__movie--cast"><p>Cast</p> {movie.Actors}</div>
                      <div className="single__movie--plot"><p>Plot</p> {movie.Plot}</div>
                    </div>
                    <div className="single__movie--secondary">
                      <div className="single__movie--runtime"><p>Runtime</p> {movie.Runtime}</div>
                      <div className="single__movie--release"><p>Release Date</p> {movie.Released}</div>
                      <div className="single__movie--genre">{movie.Genre}</div>
                    </div>
                </div>
              </div>
            )}
            <hr />
            {movie && (
              <div className="movie__ratings" key={movie.imdbID}>
                <div className="movie__scores">Metascore: {movie.Metascore}</div>
                <div className="movie__scores">IMDB Rating: {movie.imdbRating}</div>
                <div className="movie__scores">Box Office: {movie.BoxOffice}</div>
              </div>
            )}
            
        </div>
      </div>
      </main>
    </div>
  )
}
