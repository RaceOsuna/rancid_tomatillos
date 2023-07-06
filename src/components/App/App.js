import './App.css';
import Header from '../Header/Header';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import SingleMovie from '../SingleMovie/SingleMovie';
import { useState, useEffect } from 'react';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [showMovie, setShowMovie] = useState(false);
  const [clickedMovie, setClickedMovie] = useState([])

  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovieData(data.movies))
  }, []);

  function selectMovie(id) {
    console.log('here')
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => setClickedMovie(data.movie))


    setShowMovie(true)
  }

  function goBack() {
    setShowMovie(false)
  }

  return (
    <>
      {!showMovie && <Header />}
      {showMovie ? <SingleMovie clickedMovie={clickedMovie} goBack={goBack}/> : <MovieCardContainer movieData={movieData} selectMovie={selectMovie}/>}
    </>
  );
}

export default App;
