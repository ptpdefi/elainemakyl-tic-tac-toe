const WINNING_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const isFilledBoard = (board: Array<string | null>) => {
  return board.every(el => el !== null);
};

export const determineWinner = (board: Array<string | null>): string | null => {
  let winner: string | null = null;

  for (let i = 0; i < WINNING_COMBO.length; i++) {
    const combo = WINNING_COMBO[i];
    if (
      board[combo[0]] !== null &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]]
    ) {
      winner = board[combo[0]];
      break;
    } else if (isFilledBoard(board)) {
      winner = 'tie';
    }
  }
  console.log('WINNIER', winner);
  return winner;
};
