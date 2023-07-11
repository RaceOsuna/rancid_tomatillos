function handleErrors(response) {
  const errType = response.status.toString().charAt(0);
  if (errType === '3') {
    return `${response.statusText}! It seems that this page has been moved to somewhere else...`;
  } else if (errType === '4') {
    return `${response.statusText}! This Page does not exist, please try a differnt url...`;
  } else if (errType === '5') {
    return `${response.statusText}! Ooops, it seems that the server is down...`;
  } 
}

export {handleErrors};