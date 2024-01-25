import React, { useReducer } from 'react';
import DigitButton from './DigitButton';
// eslint-disable-next-line no-unused-vars
import { calculatorReducer, ACTIONS } from './calculatorReducer';

import './App.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(
    calculatorReducer,
    {},
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          (previousOperand) (operation)
        </div>
        <div className="current-operand">(currentOperand)</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <DigitButton digit="÷" dispatch={dispatch} />
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
