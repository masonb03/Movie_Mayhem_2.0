import { useEffect, useRef, useState } from 'react';
import './Titlecard.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import noImage from '../../assets/no-image.jpg'


const Titlecard = () => {

  const [movies, setMovies] = useState([]);
  const movieRef = useRef();
  let navigate = useNavigate();

  const scroll = (event) => {
    event.preventDefault();
    movieRef.current.scrollLeft += event.deltaY;
  }

  async function fetchMovies() {

    const searchTerms = [
      'love', 'war', 'king', 'life', 'dark', 'last', 'lost', 'time', 
      'world', 'night', 'day', 'star', 'hero', 'dream', 'blood', 'fire',
      'fight', 'death', 'magic', 'space', 'future', 'past', 'secret', 'power'
    ];
    
    const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
    const randomPage = Math.floor(Math.random() * 10) + 1;

    const { data } = await axios.get(`https://omdbapi.com/?s=${randomTerm}&page=${randomPage}&apikey=6a64f8a0`);
    setMovies(data.Search || [])

    if (data.Search) {
      const uniqueMovies = Array.from(new Map(data.Search.map(movie => [movie.imdbID, movie])).values()
    );
    setMovies(uniqueMovies);
    }
    console.log(data);
  }

  useEffect(() => {
    movieRef.current.addEventListener('wheel', scroll)
    fetchMovies();
  }, [])
  
  return (
    <>
    <div className="title__cards">
      <div className="movie__caption">
        <h2>Check out some random movies/shows</h2>
        <button className="refresh" onClick={fetchMovies}>
          <FontAwesomeIcon icon="arrows-rotate" />
        </button>
      </div>
      <div className="movie__list" ref={movieRef}>
      {movies.map((movie) => (
        <div className="movie__card" key={movie.imdbID} onClick={() => navigate(`${movie.imdbID}`)}>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : noImage} alt="" className="movie__poster" />
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