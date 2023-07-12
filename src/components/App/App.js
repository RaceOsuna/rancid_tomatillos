import './App.css';
import Header from '../Header/Header';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import SingleMovie from '../SingleMovie/SingleMovie';
import { useState, useEffect } from 'react';
import getData from '../../apiCalls';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [error, setError] = useState(false);

  function getError(response) {
    setError(response);
  }

  return (
    <Routes>
      <Route path='/' element={error ? <ErrorDisplay error={error}/> : <><Header /><MovieCardContainer getError={getError}/></>}/>
      <Route path='/:id' element={error ? <ErrorDisplay error={error}/> : <SingleMovie getError={getError}/>}/>
      <Route path='*' element={<ErrorDisplay />} />
    </Routes>
  );
}

export default App;
