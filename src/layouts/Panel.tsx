import React, {FC} from 'react';
import styled from 'styled-components';
import {ReactComponent as CrossIcon} from '../components/svg/cross.svg';
import {ReactComponent as CircleIcon} from '../components/svg/circle.svg';
import {ReactComponent as ReloadIcon} from '../components/svg/reload.svg';
import Button from '../components/Button';

interface IProps {
  isCross: boolean;
  resetHandler: () => void;
}

const Panel: FC<IProps> = ({isCross, resetHandler}) => {
  return (
    <PanelWrapper>
      <LogoWrapper>
        <CrossIcon width="32px" height="32px" />
        <CircleIcon width="32px" height="32px" />
      </LogoWrapper>

      <CurrentPlayerWrapper>
        {isCross ? (
          <CrossIcon
            width="22px"
            height="22px"
            data-testid="current-player-icon"
            data-icon="cross"
          />
        ) : (
          <CircleIcon
            width="22px"
            height="22px"
            data-testid="current-player-icon"
            data-icon="circle"
          />
        )}
        <span>Turn</span>
      </CurrentPlayerWrapper>

      <Button
        handler={resetHandler}
        styleOpt={`
          padding: 16px;
          box-shadow: inset 0px -4px 0px #6B8997;
          font-size:0px;
          line-height: 0px;
        `}
      >
        <ReloadIcon />
      </Button>
    </PanelWrapper>
  );
};

const PanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const CurrentPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  padding: 13px 30px;
  background: #1f3641;
  box-shadow: inset 0px -4px 0px #10212a;
  border-radius: 10px;

  & span:last-child {
    display: flex;
    align-items: center;
    color: #a8bfc9;
    font-weight: 700;
    font-size: 16px;
    lint-height: 20px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-text-stroke: 1px black;
  }

  & svg path {
    fill: #a8bfc9;
  }
`;

export default Panel;
