import React from 'react';
import styled from 'styled-components';
import {ReactComponent as CrossIcon} from './svg/cross.svg';
import {ReactComponent as CircleIcon} from './svg/circle.svg';
import {ReactComponent as ReloadIcon} from './svg/reload.svg';
import Button from './Button';

interface IProps {
  isCross: boolean;
}

const Panel = (props: IProps) => {
  const {isCross} = props;
  return (
    <PanelWrapper>
      <LogoWrapper>
        <CrossIcon width="32px" height="32px" />
        <CircleIcon width="32px" height="32px" />
      </LogoWrapper>

      <CurrentPlayerWrapper>
        {isCross ? (
          <CrossIcon width="22px" height="22px" />
        ) : (
          <CircleIcon width="22px" height="22xpx" />
        )}
        <span>Turn</span>
      </CurrentPlayerWrapper>

      <Button
        handler={() => {}}
        styleOpt="padding: 16px; box-shadow: inset 0px -4px 0px #6B8997;"
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

// const CrossIcon = styled.span`
//   width: 32px;
//   height: 32px;
//   opacity: 1;

//   &:before,
//   &:after {
//     position: absolute;
//     left: 16px;
//     content: ' ';
//     height: 33px;
//     width: 2px;
//     background-color: #fff;
//   }

//   &:before {
//     transform: rotate(45deg);
//   }

//   &:after {
//     transform: rotate(-45deg);
//   }
// `;
export default Panel;
