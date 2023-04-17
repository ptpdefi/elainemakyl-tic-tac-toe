// import React from 'react';
// import Panel from '../Panel';
// import {render, fireEvent, screen} from '@testing-library/react';
// import '@testing-library/jest-dom';

// describe('Panel', () => {
//   jest.mock('../../components/svg/circle.svg', () => 'div');
//   jest.mock('../../components/svg/cross.svg', () => 'div');
//   jest.mock('../../components/svg/reload.svg', () => 'div');

//   test('renders the current player icon based on the isCross prop', () => {
//     const resetHandler = jest.fn();

//     render(<Panel isCross={true} resetHandler={() => {}} />);
//     expect(screen.getByTestId('current-player-icon')).toHaveAttribute(
//       'data-icon',
//       'cross'
//     );

//     expect(screen.getByTestId('current-player-icon')).toHaveAttribute(
//       'data-icon',
//       'circle'
//     );
//   });
// });
