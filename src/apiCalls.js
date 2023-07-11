import handleErrors from './errorHandling'
// function getData(path) {
//   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
//   .then(response => response.json())
// }


function getData() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/vies').
  then(response => {
    if (!response.ok) {
      let errMessage = handleErrors(response);
      // setError(errMessage)
      throw new Error(errMessage)
    }
    return response.json()
  })
}

export default getData;