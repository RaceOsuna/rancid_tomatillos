import './App.css';
import Header from '../Header/Header';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import { useState, useEffect } from 'react';

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovieData(data.movies))
  }, []);

  return (
    <>
      <Header />
      <MovieCardContainer movieData={movieData}/>
    </>
  );
}

export default App;
