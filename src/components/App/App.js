import './App.css';
import Header from '../Header/Header';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import SingleMovie from '../SingleMovie/SingleMovie';
import { useState, useEffect } from 'react';
import getData from '../../apiCalls';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [showMovie, setShowMovie] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorCode, setErrorCode] = useState(false);
  
  useEffect(() => {
    getData('/movi', setErrorCode)
    .then(data => {
      setMovieData(data.movies);
      return data;
    })
    .catch(err => {
      setErrorMessage(err.message);
    })
  }, []);

  function selectMovie(id) {
    getData(`/movies/${id}`)
    .then(data => setClickedMovie(data.movie))

    setShowMovie(true);
  }

  function goBack() {
    setShowMovie(false)
  }

  return (
    <div>
    {errorMessage ? <ErrorDisplay errorMessage={errorMessage} errorCode={errorCode}/> :
    <>
      {!showMovie && <Header />}
      {showMovie ? <SingleMovie clickedMovie={clickedMovie} goBack={goBack}/> : <MovieCardContainer movieData={movieData} selectMovie={selectMovie}/>}
    </>}
    </div>
  );
}

export default App;
