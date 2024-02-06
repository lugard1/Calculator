import PropTypes from 'prop-types';
import React from 'react';
import { ACTIONS } from './calculatorReducer';

const DigitButton = ({ dispatch, digit }) => (
  <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
    {digit}
  </button>
);

DigitButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  digit: PropTypes.string.isRequired,
};

export default DigitButton;
