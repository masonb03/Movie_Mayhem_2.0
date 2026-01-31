import { useEffect, useRef, useState } from 'react';
import './Titlecard.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Titlecard = () => {

  const [movies, setMovies] = useState([]);
  const movieRef = useRef();
  let navigate = useNavigate();

  const scroll = (event) => {
    event.preventDefault();
    movieRef.current.scrollLeft += event.deltaY;
  }

  async function fetchMovies(title) {
    const { data } = await axios.get(`https://omdbapi.com/?s=${title}&page=1&apikey=4e75cc56`);
    setMovies(data.Search || [])
    console.log(data);
  }

  useEffect(() => {
    fetchMovies('Godzilla');
    movieRef.current.addEventListener('wheel', scroll)
  }, [])
  
  return (
    <>
    <div className="title__cards">
      <h2>Title Card</h2>
      <div className="movie__list" ref={movieRef}>
      {movies.map((movie) => (
        <div className="movie__card" key={movie.imdbID} onClick={() => navigate(`${movie.imdbID}`)}>
          <img src={movie.Poster} alt="" className="movie__poster" />
            <h2 className="movie__description movie__title">{movie.Title}</h2>
            <div className="movie__description movie__year">{movie.Year}</div>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Titlecard