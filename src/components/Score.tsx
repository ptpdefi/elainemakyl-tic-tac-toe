import React, {FC} from 'react';
import styled from 'styled-components';

interface IProps {
  player: string;
  score: number;
  bgColor?: string;
  testid: string;
}

const Score: FC<IProps> = ({player, score, bgColor, testid}) => (
  <StatsContainer bgColor={bgColor}>
    <Player> {player} </Player>
    <ScoreSpan data-testid={testid}>{score}</ScoreSpan>
  </StatsContainer>
);

interface IStatsContainer {
  bgColor?: string;
}

const StatsContainer = styled.div<IStatsContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({bgColor}) => bgColor ?? '#fff'};
  border-radius: 15px;
  padding: 13px 48px;
`;

const ScoreSpan = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #1a2a33;
`;

const Player = styled(ScoreSpan)`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.875px;
`;

export default Score;
