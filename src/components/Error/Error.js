import './Error.css';
import PropTypes from 'prop-types';

function Error({error}) {
  return (
    <div>
      <h1>{error}</h1>
    </div>
  )
}

export default Error;

Error.propTypes = {
  error: PropTypes.string
}

