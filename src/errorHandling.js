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

export default handleErrors;