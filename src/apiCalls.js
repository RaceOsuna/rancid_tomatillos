import {handleErrors} from './errorHandling';

function getData(path) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
  .then(response => {
    if (!response.ok) {
      let error = handleErrors(response);
      console.log('getData err: ', error)
      let fetchError= new Error(JSON.stringify(error));
      throw fetchError;
    }
    return response.json();
  })
}

export default getData;