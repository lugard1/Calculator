import PropTypes from 'prop-types';
import { ACTIONS } from './App';

export default function DigitButton({ dispatch, digit }) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
      {' '}
      {digit}
      {' '}
    </button>
  );
}

DigitButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  digit: PropTypes.string.isRequired,
};
