import './App.css';
import Header from '../Header/Header';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import SingleMovie from '../SingleMovie/SingleMovie';
import { useState, useEffect } from 'react';
import getData from '../../apiCalls';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [movieData, setMovieData] = useState([]);
  // const [showMovie, setShowMovie] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorCode, setErrorCode] = useState(false);
  
  // useEffect(() => {
  //   getData('/movies', setErrorCode)
  //   .then(data => {
  //     setMovieData(data.movies);
  //     return data;
  //   })
  //   .catch(err => {
  //     setErrorMessage(err.message);
  //   })
  // }, []);

  return (
    <Routes>
      <Route path='/' element={<><Header /><MovieCardContainer /></>}/>
      <Route path='/:id' element={<SingleMovie />}/>
      <Route path='*' element={<ErrorDisplay />} />
    </Routes>
  );
}

export default App;
