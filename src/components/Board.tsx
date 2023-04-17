import React, {useState, FC, useEffect} from 'react';
import Panel from './Panel';
import styled from 'styled-components';
import Grid from './Grid';
import Modal from './Modal';
import {isFilledBoard} from './utils';

const Board: FC = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [curPlayerCross, setCurPlayerCross] = useState(true); // default player_x first
  const [winner, setWinner] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // determine if the game is over
    console.log(board);
    const checkOver = () => {
      return isFilledBoard(board);
    };

    const isOver = checkOver();
    setShowModal(isOver);
  }, [board.toString()]);

  /*updating the board */
  const makeMoveHandler = (idx: number) => {
    const boardCopy = board;
    if (board[idx] === null) {
      boardCopy[idx] = curPlayerCross ? 'x' : 'o';
      setBoard(boardCopy);
      setCurPlayerCross(!curPlayerCross);
    }
  };

  /*clear the board and reset the current player to player_x*/
  const resetHandler = () => {
    setBoard(new Array(9).fill(null));
    setCurPlayerCross(true);
  };

  /* dismiss the modal */
  const cancelRestartHandler = () => {
    setShowModal(false);
  };

  const restartHandler = () => {
    setShowModal(false);
    setBoard(new Array(9).fill(null));
    setCurPlayerCross(true);
  };

  return (
    <BoardWrapper isDimmed={showModal}>
      <Panel isCross={curPlayerCross} resetHandler={resetHandler} />
      <Grid board={board} makeMoveHandler={makeMoveHandler} />
      {showModal && (
        <Modal
          title="Restart Game?"
          leftBtnText="No, Cancel"
          leftBtnHandler={cancelRestartHandler}
          rightBtnText="Yes, Restart"
          rightBtnHandler={restartHandler}
        ></Modal>
      )}
    </BoardWrapper>
  );
};

interface IBoardWrapper {
  isDimmed: boolean;
}

const BoardWrapper = styled.div<IBoardWrapper>`
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: center;
  gap: 19px;
`;

export default Board;
