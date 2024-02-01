/* eslint-disable react/no-unknown-property */

import React, { useReducer } from 'react';
import DigitButton from './DigitButton';

import OperationButton from './OperationButton';

import { calculatorReducer } from './calculatorReducer';

import './App.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(calculatorReducer, {
    currentOperand: '',
    previousOperand: '',
    operation: null,
  });

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          (state.previousOperand) (state.operation)
        </div>
        <div className="current-operand">(state.currentOperand)</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />

      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
