import React, {FC} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import {ReactComponent as CircleIcon} from '../components/svg/circle.svg';
import {ReactComponent as CrossIcon} from '../components/svg/cross.svg';

interface IProps {
  winner: string | null;
  leftBtnText: string;
  leftBtnHandler: () => void;
  rightBtnText: string;
  rightBtnHandler: () => void;
}

const Modal: FC<IProps> = ({
  winner,
  leftBtnText,
  leftBtnHandler,
  rightBtnText,
  rightBtnHandler,
}) => {
  const determineHeading = () => {
    if (winner === 'tie') return null;
    const player = winner === 'x' ? 1 : 2;
    return `Player ${player} wins!`;
  };

  const determineTitle = () => {
    if (winner === 'tie') return 'Round Tied';
    return 'Takes the round';
  };

  const determineIcon = () => {
    if (winner === 'tie') return null;
    return winner === 'o' ? <CircleIcon /> : <CrossIcon />;
  };

  return (
    <ModalContainer>
      <ModalBody>
        <Heading>{determineHeading()}</Heading>

        <MessageWrapper>
          {determineIcon()}
          {determineTitle()}
        </MessageWrapper>

        <ButtonWrapper>
          <Button
            text={leftBtnText}
            handler={leftBtnHandler}
            styleOpt={`
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 1px;
            padding: 16px;
            background: #A8BFC9;
            box-shadow: inset 0px -4px 0px #6B8997;
            border-radius: 10px;
          `}
          />
          <Button
            text={rightBtnText}
            handler={rightBtnHandler}
            styleOpt={`
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 1px;
          padding: 16px;
          background: #F2B137;
          box-shadow: inset 0px -4px 0px #CC8B13;
          border-radius: 10px;
        `}
          />
        </ButtonWrapper>
      </ModalBody>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  z-index: 99;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  transform: translateX(-50%) translateY(-50%);
  background-color: #1f3641;
  padding: 67px;
  width: 100%;
`;

const MessageWrapper = styled.div`
  display: flex;
  color: #a8bfc9;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 2.5px;
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Heading = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #a8bfc9;
  margin-bottom: 16px;
`;

export default Modal;
