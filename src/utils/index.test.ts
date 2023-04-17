import {isFilledBoard, determineWinner} from './index';

describe('isFilledBoard', () => {
  it('should return true for a filled board', () => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    expect(isFilledBoard(board)).toBe(true);
  });

  it('should return false for an unfilled board', () => {
    const board = ['X', null, 'O', 'X', 'O', 'X', null, null, null];
    expect(isFilledBoard(board)).toBe(false);
  });
});

describe('determineWinner', () => {
  it('should return the correct winner for a horizontal win', () => {
    const board = ['X', 'X', 'X', null, 'O', null, 'O', null, null];
    expect(determineWinner(board)).toBe('X');
  });

  it('should return the correct winner for a vertical win', () => {
    const board = ['X', 'O', 'O', 'X', 'O', null, 'X', null, null];
    expect(determineWinner(board)).toBe('X');
  });

  it('should return the correct winner for a diagonal win', () => {
    const board = ['O', null, 'X', null, 'O', 'X', 'X', null, 'O'];
    expect(determineWinner(board)).toBe('O');
  });

  it('should return null for an unfilled board', () => {
    const board = ['X', null, 'O', 'X', 'O', 'X', null, null, null];
    expect(determineWinner(board)).toBe(null);
  });

  it('should return "tie" for a filled board with no winner', () => {
    const board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    expect(determineWinner(board)).toBe('tie');
  });
});
