import './ErrorDisplay.css';
import PropTypes from 'prop-types';

function ErrorDisplay({errorMessage, errorCode}) {
  return (
    <div className='error-container'>
      <img src='https://em-content.zobj.net/source/skype/289/loudly-crying-face_1f62d.png' alt='crying face'/>
      <h1>{errorCode}</h1>
      <p>{errorMessage}</p>
    </div>
  )
}

export default ErrorDisplay;

Error.propTypes = {
  error: PropTypes.string
}

