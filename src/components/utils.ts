export const isFilledBoard = (board: Array<string | null>) => {
  const test = board.every(el => el !== null);
  return test;
};
