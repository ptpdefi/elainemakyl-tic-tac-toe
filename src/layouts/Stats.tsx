import React, {useState, FC, useEffect} from 'react';
import styled from 'styled-components';
import Score from '../components/Score';
import {setLocalItem, getLocalItem} from '../utils/localStorage';

const X_WINS_KEY = 'x_wins';
const O_WINS_KEY = 'o_wins';
const TIES_KEY = 'ties';

interface IProps {
  winner: string | null;
}

const Board: FC<IProps> = ({winner}) => {
  const [xWins, setXWins] = useState<number>(0);
  const [ties, setTies] = useState<number>(0);
  const [oWins, setOWins] = useState<number>(0);

  useEffect(() => {
    // Retrieve previous win/loss/tie data from localStorage
    const localXWins = getLocalItem(X_WINS_KEY);
    const localOWins = getLocalItem(O_WINS_KEY);
    const localTies = getLocalItem(TIES_KEY);

    if (localXWins && localOWins && localTies) {
      setXWins(Number(localXWins));
      setOWins(Number(localOWins));
      setTies(Number(localTies));
    }
  }, []);

  useEffect(() => {
    console.log('update local storage');
    // Update localStorage with new win/loss/tie data
    setLocalItem('X_WINS_KEY', String(xWins));
    setLocalItem('O_WINS_KEY', String(oWins));
    setLocalItem('TIES_KEY', String(ties));
  }, [xWins, oWins, ties]);

  useEffect(() => {
    // Update win/loss/tie statistics based on current game outcome
    if (winner === 'x') {
      setXWins(xWins + 1);
    } else if (winner === 'o') {
      setOWins(oWins + 1);
    } else if (winner === 'tie') {
      setTies(ties + 1);
    }
  }, [winner]);

  return (
    <StatsWrapper>
      <Score player="X (P1)" score={xWins} bgColor="#31C3BD"></Score>
      <Score player="Ties" score={ties} bgColor="#A8BFC9"></Score>
      <Score player="O (P2)" score={oWins} bgColor="#F2B137;"></Score>
    </StatsWrapper>
  );
};

const StatsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
export default Board;
