import React, {FC} from 'react';
import styled from 'styled-components';
import {ReactComponent as CrossIcon} from './svg/cross.svg';
import {ReactComponent as CircleIcon} from './svg/circle.svg';

interface IProps {
  sign: string | null;
  makeMoveHandler: (idx: number) => void;
  idx: number;
}

const Square: FC<IProps> = ({sign, makeMoveHandler, idx}) => {
  if (!sign) {
    return <SquareButton onClick={() => makeMoveHandler(idx)} />;
  }
  return (
    <SquareButton onClick={() => makeMoveHandler(idx)}>
      {sign === 'x' ? <CrossIcon /> : <CircleIcon />}
    </SquareButton>
  );
};

const SquareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1f3641;
  box-shadow: inset 0px -8px 0px #10212a;
  border-radius: 15px;
  width: 140px;
  height: 140px;
  border: none;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
export default Square;
