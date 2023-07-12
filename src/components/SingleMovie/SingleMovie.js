import "./SingleMovie.css";
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getData from '../../apiCalls';
import { Link } from 'react-router-dom';

export default function SingleMovie({getFetchError}) {
  const {id} = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    getData(`/movies/${id}`)
    .then(data => setMovie(data.movie))
    .catch(err => getFetchError(err))
  }, [])

  return (
    <div className="single_movie_view">
      <img src={movie.backdrop_path} />
      <div className="overlay"> 
        <div className="movie_details">  
          <div className="movie_header">
            <h1>{movie.title}</h1>
            <Link to='/'>
              <button>⬅</button>
            </Link>
          </div>
          <div className="details">
            {movie.tagline && <p>"{movie.tagline}"</p>}<br />
            <p>Overview: {movie.overview}</p><br />
            <p>Length: {movie.runtime} minutes.</p><br />
            <p>Average Rating: {movie.average_rating} ⭐️</p>
            <p>Release Date: {movie.release_date}</p><br />
            <p>Movie Budget: ${movie.budget}</p>
            <p>Movie Revenue: ${movie.revenue}</p>
          </div>  
        </div> 
      </div> 
    </div>
  )
}

SingleMovie.propTypes = {
  getFetchError: PropTypes.func
}