import handleErrors from './errorHandling'

function getData() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/vies').
  then(response => {
    if (!response.ok) {
      let errMessage = handleErrors(response);
      throw new Error(errMessage)
    }
    return response.json()
  })
}

export default getData;