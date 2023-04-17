import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Stats from '../Stats';

test('renders WinLossTie component without crashing', () => {
  render(<Stats winner={null} />);
});

test('displays correct initial win/loss/tie values with no localStorage data', () => {
  const {getByTestId} = render(<Stats winner={null} />);
  const xWinsValue = getByTestId('xWins');
  const oWinsValue = getByTestId('oWins');
  const tieValue = getByTestId('ties');

  expect(xWinsValue.textContent).toBe('0');
  expect(oWinsValue.textContent).toBe('0');
  expect(tieValue.textContent).toBe('0');
});
