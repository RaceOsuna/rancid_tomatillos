import './MovieCard.css';

function MovieCard({poster_path, title, average_rating, release_date, id, selectMovie}) {
  return (
    <div className='card' onClick={() => selectMovie(id)}>
      <img src={poster_path}/>
      <div className='movie-details'>
        <h4>{title}</h4>
        <p>{average_rating} ⭐️</p>
        <p>{release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;