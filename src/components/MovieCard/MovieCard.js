import './MovieCard.css';

function MovieCard({poster_path, title, average_rating, release_date}) {
  return (
    <div>
      <img src={poster_path}/>
      <div>
        <h4>{title}</h4>
        <p>{average_rating}</p>
        <p>{release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;