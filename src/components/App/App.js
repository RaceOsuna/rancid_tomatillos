import './App.css';
import Header from '../Header/Header';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import Error from '../Error/Error';
import SingleMovie from '../SingleMovie/SingleMovie';
import { useState, useEffect } from 'react';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [showMovie, setShowMovie] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        let errMessage = handleErrors(response);
        setError(errMessage)
      }
      return response.json()
    })
    .then(data => {
      console.log('data not catching')
      setMovieData(data.movies)
      return data
    })
    .catch(err => {
      console.log('error: ', err)
    })
  }, []);


  function handleErrors(response) {
    console.log('let us handle errors')
    const errType = response.status.toString().charAt(0);
    console.log(typeof errType)
    if (errType === '4') {
      return `${response.status} Error! This Page does not exist, please try a differnt url.`
    } else if (errType === '5') {
      return `${response.status} Error! Ooops, it seems that the server is down...`
    } else {
      return `${response.status} Error!`
    }
  }

  function selectMovie(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => setClickedMovie(data.movie))


    setShowMovie(true)
  }

  function goBack() {
    setShowMovie(false)
  }

  return (
    <div>
    {error ? <Error error={error} /> :
    <>
      {!showMovie && <Header />}
      {showMovie ? <SingleMovie clickedMovie={clickedMovie} goBack={goBack}/> : <MovieCardContainer movieData={movieData} selectMovie={selectMovie}/>}
    </>}
    </div>
  );
}

export default App;
