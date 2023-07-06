import './MovieCardContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';

function MovieCardContainer({movieData, selectMovie}) {
  const movieElements = movieData.map(movie => (
    <MovieCard 
      key={movie.id}
      id={movie.id}
      poster_path={movie.poster_path}
      title={movie.title}
      average_rating={movie.average_rating}
      release_date={movie.release_date}
      selectMovie={selectMovie}
    />
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
  selectMovie: PropTypes.func
}