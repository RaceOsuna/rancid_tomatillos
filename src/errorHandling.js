function handleErrors(response) {
  const errType = response.status.toString().charAt(0);
  let output = {};
  output.statusCode = response.status;
  output.statusText = response.statusText;
  if (errType === '3') {
    output.message = `${response.statusText}! It seems that this page has been moved to somewhere else...`;
  } else if (errType === '4') {
    output.message = `${response.statusText}! This Page does not exist, please try a differnt url...`;
  } else if (errType === '5') {
    output.message = `${response.statusText}! Ooops, it seems that the server is down...`;
  } 

  return output;
}

export {handleErrors};