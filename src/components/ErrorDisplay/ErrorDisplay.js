import './ErrorDisplay.css';
import PropTypes from 'prop-types';

function ErrorDisplay({error}) {
  console.log('err display: ', error)
  return (
    <div>
      <h1>{error}</h1>
    </div>
  )
}

export default ErrorDisplay;

Error.propTypes = {
  error: PropTypes.string
}

