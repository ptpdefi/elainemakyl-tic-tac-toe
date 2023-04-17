import React, {FC} from 'react';
import styled from 'styled-components';
import Button from './Button';
import {ReactComponent as CircleIcon} from './svg/circle.svg';
import {ReactComponent as CrossIcon} from './svg/cross.svg';

interface IProps {
  heading?: string;
  icon?: string;
  title: string;
  leftBtnText: string;
  leftBtnHandler: () => void;
  rightBtnText: string;
  rightBtnHandler: () => void;
}

const Modal: FC<IProps> = ({
  heading,
  icon,
  title,
  leftBtnText,
  leftBtnHandler,
  rightBtnText,
  rightBtnHandler,
}) => {
  return (
    <ModalContainer>
      <ModalBody>
        {heading}

        <MessageWrapper>
          {icon === 'circle' && <CircleIcon />}
          {icon === 'cross' && <CrossIcon />}
          {title}
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
  gap: 31px;
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default Modal;
