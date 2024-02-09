// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Calculator App', () => {
  test('renders calculator without crashing', () => {
    render(<App />);
  });

  test('perform addition', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('current-operand').textContent).toBe('3');
  });

  test('perform subtraction', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('current-operand').textContent).toBe('3');
  });

  test('perform division', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByText('10'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('current-operand').textContent).toBe('5');
  });

  test('perform multiplication', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByText('10'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('current-operand').textContent).toBe('20');
  });
});
