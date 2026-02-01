import React, { useEffect, useState } from 'react'
import './Browse.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import noImage from '../../assets/no-image.jpg'

const Browse = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    let navigate = useNavigate();

    const search = searchParams.get('search');

    async function fetchMovies(searchTerm = null) {
        setLoading(true);
        
        let term;
        let page = 1;

        if (searchTerm) {
            term = searchTerm;
        } else {
            const searchTerms = [
          'love', 'war', 'king', 'life', 'dark', 'last', 'lost', 'time', 
          'world', 'night', 'day', 'star', 'hero', 'dream', 'blood', 'fire',
          'fight', 'death', 'magic', 'space', 'future', 'past', 'secret', 'power'
        ];
        term = searchTerms[Math.floor(Math.random() * searchTerms.length)];
        page = Math.floor(Math.random() * 10) + 1;
        }

        try {
            const { data } = await axios.get(`https://omdbapi.com/?s=${term}&page=${page}&apikey=6a64f8a0`)

                if(data.Search) {
                    const detailedMovies = await Promise.all(
                    data.Search.slice(0, 20).map(async (movie) => {
                        try {
                            const details = await axios.get(`https://omdbapi.com/?i=${movie.imdbID}&apikey=6a64f8a0`);
                            return details.data;
                        } catch (error) {
                            console.error(`Error fetching details for ${movie.imdbID}:`, error);
                            return movie;
                        }
                    })
                );
                setMovies(detailedMovies);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies([]);
        }
        
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies(search);
    }, [search])
    
    return (
        <>
        <button className="back__btn" onClick={() => navigate(`/`)}>
            <FontAwesomeIcon icon="arrow-left" />
        </button>

        {
            search && (
                <h2 className="search__title">Search for: "{search}"</h2>
            )}
        
        {loading ? (
            <div className="loading">Loading movies...
            <FontAwesomeIcon icon="fa-spinner"/></div>
        ) : movies.length === 0 ? (
            <div className="no__result">No movies found. Try a different search.</div>
        ) : (
            <div className="movies__grid">
                {movies.map((movie) => (
                    <div className="movie__display" key={movie.imdbID}>
                      <div className="movie__img--wrapper">
                        <img 
                            src={movie.Poster !== 'N/A' ? movie.Poster : noImage} 
                            alt={movie.Title} 
                            className="movie__img" 
                            onClick={() => navigate(`/${movie.imdbID}`)}
                        />
                      </div>
                      <h3 className="movie__name">{movie.Title}</h3>
                      <div className="movie__caption--facts">
                        <ul className="movie__facts">
                          <li className='movie__fact'>{movie.Runtime !== 'N/A' ? movie.Runtime : 'N/A'} |</li>
                          <li className='movie__fact'>{movie.Rated !== 'N/A' ? movie.Rated : 'N/A'}</li>
                        </ul>
                        <p className="movie__release--date">Released {movie.Released !== 'N/A' ? movie.Released : 'N/A'}</p>
                      </div>
                    </div>
                ))}
            </div>
        )}
        </>
    )
}

export default Browse