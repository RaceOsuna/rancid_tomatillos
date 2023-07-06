import "./SingleMovie.css"

export default function SingleMovie({clickedMovie, goBack}) {
  return (
    <div className="single_movie_view" style={{backgroundImage: `url(${clickedMovie.backdrop_path})`}}>
      <h1>{clickedMovie.title}</h1>
      <p>{clickedMovie.tagline}</p>
      <p>{clickedMovie.overview}</p>
      <p>{clickedMovie.budget}</p>
      <p>{clickedMovie.revenue}</p>
      <p>{clickedMovie.runtime}</p>
      <p>{clickedMovie.average_rating}</p>
      <p>{clickedMovie.release_date}</p>
      <button onClick={() => goBack()}>Back</button>
    </div>
  )
}