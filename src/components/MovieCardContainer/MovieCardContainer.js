import './MovieCardContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import getData from '../../apiCalls';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function MovieCardContainer({getFetchError}) {
  const [movieData, setMovieData] = useState([]);
  const [formData, setFormData] = useState({
    search: ''
  });
  const [searchParams, setSearchParms] = useSearchParams();

  useEffect(() => {
    getData('/movies')
    .then(data => setMovieData(data.movies))
    .catch(err => getFetchError(err))
  },[])

  function handleChange(event) {
    setFormData(() => {
      return {
        [event.target.name]: event.target.value
      }
    })
    setSearchParms({[event.target.name]: event.target.value})
  }

  const movieFilter = searchParams.get('search')

  const displayMovies = movieFilter ? movieData.filter(movie => movie.title.toLowerCase().includes(movieFilter)) : movieData

  const movieElements = displayMovies.map(movie => (
    <Link to={`/${movie.id}`} key={movie.id}>
      <MovieCard 
        id={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
      />
    </Link>
  ));

  return (
  <div> 
    <div className='form-container'>
      <form>
        <input 
        name='search' 
        type="text" 
        placeholder='Search Titles' 
        value={formData.search} 
        onChange={handleChange}>
        </input>
      </form>
    </div>
    <section className='movie_card_section'>
      {movieElements}
    </section>
  </div>  
  );
}

export default MovieCardContainer;

MovieCardContainer.propTypes = {
  getFetchError: PropTypes.func
}