import './ErrorDisplay.css';
import PropTypes from 'prop-types';

function ErrorDisplay({fetchError}) {
  if (fetchError) {
    fetchError = JSON.parse(fetchError.message)
  }

  return (
    <div className='error-container'>
      <img src='https://em-content.zobj.net/source/skype/289/loudly-crying-face_1f62d.png' alt='crying face'/>
      <h1>{fetchError ? fetchError.statusCode :'Error!!!'}</h1>
      <p>{fetchError ? fetchError.message : 'Page Not Found!'}</p>
    </div>
  )
}

export default ErrorDisplay;

Error.propTypes = {
  fetchError: PropTypes.string
}

