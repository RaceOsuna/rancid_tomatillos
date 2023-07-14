import './MovieCard.css';
import PropTypes from 'prop-types';

function MovieCard({poster_path, title, average_rating, release_date}) {
  return (
    <div className='card'>
      <div className="card-img">
        <img src={poster_path}/>
      </div>
      <div className='movie-details'>
        <h4>{title}</h4>
        <p>{average_rating} ⭐️</p>
        {/* <p>{release_date}</p> */}
      </div>
    </div>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  poster_path: PropTypes.string, 
  title: PropTypes.string, 
  average_rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
  release_date: PropTypes.string, 
}