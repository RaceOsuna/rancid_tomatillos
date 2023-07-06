import "./SingleMovie.css"

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
            <p>{clickedMovie.overview}</p><br />
            <p>{clickedMovie.runtime} minutes</p><br />
            <p>{clickedMovie.average_rating} ⭐️</p>
            <p>{clickedMovie.release_date}</p><br />
            <p>{clickedMovie.budget}</p>
            <p>{clickedMovie.revenue}</p>
          </div>  
        </div> 
      </div> 
    </div>
  )
}