import React, {useState, FC} from 'react';
import Panel from './Panel';
import styled from 'styled-components';
import Grid from './Grid';

const Board: FC = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [curPlayerCross, setCurPlayerCross] = useState(true); // default player_x first
  const [winner, setWinner] = useState();
  const [showModal, setShowModal] = useState(false);

  const makeMoveHandler = (idx: number) => {
    const boardCopy = board;
    if (board[idx] === null) {
      boardCopy[idx] = curPlayerCross ? 'x' : 'o';
      setBoard(boardCopy);
      setCurPlayerCross(!curPlayerCross);
    }
  };

  return (
    <BoardWrapper>
      <Panel isCross={curPlayerCross} />
      <Grid board={board} makeMoveHandler={makeMoveHandler} />
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: center;
  gap: 19px;
`;

export default Board;
