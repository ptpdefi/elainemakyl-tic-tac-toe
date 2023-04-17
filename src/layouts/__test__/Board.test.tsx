import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from '../Board';

jest.mock('../Panel', () => 'div');

test('renders the game board', () => {
  render(<Board />);
  const boardElement = screen.getByTestId('board');
  expect(boardElement).toBeInTheDocument();
});

// test('clicking on cells alternates between X and O', () => {
//   render(<Board />);
//   const cell1Element = screen.getByTestId('ele_0');
//   const cell2Element = screen.getByTestId('ele_1');
//   fireEvent.click(cell1Element);
//   fireEvent.click(cell2Element);
//   expect(cell1Element.textContent).toBe('X');
//   expect(cell2Element.textContent).toBe('O');
// });
