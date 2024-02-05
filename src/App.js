/* eslint-disable default-case */
/* eslint-disable react/no-unknown-property */

import React, { useReducer } from 'react';
// eslint-disable-next-line import/no-cycle
import DigitButton from './DigitButton';

import OperationButton from './OperationButton';

import { calculatorReducer, ACTIONS } from './calculatorReducer';

import './App.css';

export function evaluate({ currentOperand, previousOperand, operation }) {
  const pre = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (Number.isNaN(pre) || Number.isNaN(current)) return '';
  let computation = '';
  switch (operation) {
    case '+':
      computation = pre + current;
      break;
    case '-':
      computation = pre - current;
      break;
    case '*':
      computation = pre * current;
      break;
    case '÷':
      computation = pre / current;
      break;
  }
  return computation.toString();
}

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calculatorReducer,
    {},
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          { previousOperand }
          { operation }
        </div>
        <div className="current-operand">{ currentOperand }</div>
      </div>
      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
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
      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
    </div>
  );
}

export default App;
