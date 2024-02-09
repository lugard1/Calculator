// DigitButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DigitButton from '../DigitButton';

describe('DigitButton Component', () => {
  test('clicking on DigitButton calls dispatch with correct payload', () => {
    const dispatch = jest.fn();
    const { getByText } = render(<DigitButton dispatch={dispatch} digit="5" />);
    fireEvent.click(getByText('5'));
    expect(dispatch).toHaveBeenCalledWith({ type: 'add-digit', payload: { digit: '5' } });
  });
});
