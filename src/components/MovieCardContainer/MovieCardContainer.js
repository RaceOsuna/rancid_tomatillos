import './MovieCardContainer.css';
import MovieCard from '../MovieCard/MovieCard';

function MovieCardContainer({movieData}) {
  // id, poster_path, title, average_rating, release_date, key
  const movieElements = movieData.map(movie => (
    <MovieCard 
      key={movie.id}
      id={movie.id}
      poster_path={movie.poster_path}
      title={movie.title}
      average_rating={movie.average_rating}
      release_date={movie.release_date}
    />
  ));

  return (
    <section className='movie_card_section'>
      {movieElements}
    </section>
  );
}

export default MovieCardContainer;