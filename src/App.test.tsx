import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the initial app', () => {
  render(<App />);
  const linkElement = screen.getByText(/New Game/i);
  expect(linkElement).toBeInTheDocument();
});
