import {handleErrors} from './errorHandling';

function getData(path) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
  .then(response => {
    if (!response.ok) {
      let error = handleErrors(response);
      throw new Error(error);
    }
    return response.json();
  })
}

export default getData;