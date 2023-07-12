import './MovieCardContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import getData from '../../apiCalls';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import handleErrors from '../../errorHandling';

function MovieCardContainer() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getData('/mov')
    .then(data => setMovieData(data.movies))
    .catch()
  },[])


  const movieElements = movieData.map(movie => (
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
    <section className='movie_card_section'>
      {movieElements}
    </section>
  );
}

export default MovieCardContainer;

MovieCardContainer.propTypes = {
  movieData: PropTypes.arrayOf(PropTypes.object), 
}