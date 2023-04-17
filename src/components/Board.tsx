import React, {useState, FC, useEffect} from 'react';
import Panel from './Panel';
import styled from 'styled-components';
import Grid from './Grid';
import Modal from './Modal';
import {determineWinner} from './utils';

const Board: FC = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [curPlayerCross, setCurPlayerCross] = useState(true); // default player_x first
  const [winner, setWinner] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isOver, setOver] = useState(false);

  /* convert the board array to a string is easier to compare state change */
  useEffect(() => {
    // determine if the game is over
    const finalWinner = determineWinner(board);
    if (finalWinner) {
      setWinner(finalWinner);
      setOver(true);
      setShowModal(true);
    }
  }, [board.toString()]);

  /*updating the board */
  const makeMoveHandler = (idx: number) => {
    const boardCopy = board;
    if (!isOver && board[idx] === null) {
      boardCopy[idx] = curPlayerCross ? 'x' : 'o';
      setBoard(boardCopy);
      setCurPlayerCross(!curPlayerCross);
    }
  };

  /*clear the board and reset the current player to player_x*/
  const resetHandler = () => {
    setBoard(new Array(9).fill(null));
    setCurPlayerCross(true);
    setOver(false);
  };

  /* dismiss the modal */
  const cancelRestartHandler = () => {
    setShowModal(false);
  };

  const restartHandler = () => {
    setShowModal(false);
    setBoard(new Array(9).fill(null));
    setCurPlayerCross(true);
    setOver(false);
  };

  return (
    <BoardWrapper isDimmed={showModal}>
      <Panel isCross={curPlayerCross} resetHandler={resetHandler} />
      <Grid board={board} makeMoveHandler={makeMoveHandler} />
      {showModal && (
        <Modal
          winner={winner}
          leftBtnText="Quit"
          leftBtnHandler={cancelRestartHandler}
          rightBtnText="Next Round"
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
