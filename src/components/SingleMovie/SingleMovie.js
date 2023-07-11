import "./SingleMovie.css";
import PropTypes from 'prop-types';

export default function SingleMovie({clickedMovie, goBack}) {
  return (
    <div className="single_movie_view">
      <img src={clickedMovie.backdrop_path} />
      <div className="overlay"> 
        <div className="movie_details">  
          <div className="movie_header">
            <h1>{clickedMovie.title}</h1>
            <button onClick={() => goBack()}>⬅</button>
          </div>
          <div className="details">
            {clickedMovie.tagling && <p>"{clickedMovie.tagline}"</p>}<br />
            <p>Overview: {clickedMovie.overview}</p><br />
            <p>Length: {clickedMovie.runtime} minutes.</p><br />
            <p>Average Rating: {clickedMovie.average_rating} ⭐️</p>
            <p>Release Date: {clickedMovie.release_date}</p><br />
            <p>Movie Budget: ${clickedMovie.budget}</p>
            <p>Movie Revenue: ${clickedMovie.revenue}</p>
          </div>  
        </div> 
      </div> 
    </div>
  )
}

SingleMovie.propTypes = {
  clickedMovie: PropTypes.object, 
  goBack: PropTypes.func
}