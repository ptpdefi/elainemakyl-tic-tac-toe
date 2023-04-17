import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Grid from '../Grid';

const board = new Array(9).fill(null);

test('renders the grid', () => {
  render(<Grid board={board} makeMoveHandler={() => {}} />);
  const boardElement = screen.getByTestId('ele_0');
  expect(boardElement).toBeInTheDocument();
});

test('calls the makeMoveHandler when a cell is clicked', () => {
  const makeMoveHandler = jest.fn();
  render(<Grid board={board} makeMoveHandler={makeMoveHandler} />);
  const cellElement = screen.getByTestId('ele_0');
  fireEvent.click(cellElement);
  expect(makeMoveHandler).toHaveBeenCalled();
});

test('clicking on a cell updates the game board', () => {
  render(
    <Grid
      board={board}
      makeMoveHandler={() => {
        board[0] = 'x';
      }}
    />
  );
  const cellElement = screen.getByTestId('ele_0');
  fireEvent.click(cellElement);
  expect(board[0]).toBe('x');
});
