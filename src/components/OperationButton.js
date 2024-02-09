import PropTypes from 'prop-types';
import React from 'react';
import { ACTIONS } from './calculatorReducer';

const OperationButton = ({ dispatch, operation }) => (
  <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
    {operation}
  </button>
);

OperationButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  operation: PropTypes.string.isRequired,
};

export default OperationButton;
