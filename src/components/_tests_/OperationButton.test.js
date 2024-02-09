// OperationButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OperationButton from '../OperationButton';

describe('OperationButton Component', () => {
  test('clicking on OperationButton calls dispatch with correct payload', () => {
    const dispatch = jest.fn();
    const { getByText } = render(<OperationButton dispatch={dispatch} operation="+" />);
    fireEvent.click(getByText('+'));
    expect(dispatch)
      .toHaveBeenCalledWith({ type: 'choose-operation', payload: { operation: '+' } });
  });
});
