import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

interface IProps {
  text?: string;
  bgColor?: string;
  handler: () => void;
  children?: ReactNode;
  styleOpt?: string;
}

interface IButtonWrapper {
  bgColor?: string;
  styleOpt?: string;
}

const Button: FC<IProps> = ({text, bgColor, handler, children, styleOpt}) => {
  return (
    <ButtonWrapper bgColor={bgColor} onClick={handler} styleOpt={styleOpt}>
      {text}
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<IButtonWrapper>`
  background-color: ${({bgColor: bg}) => bg};
  box-shadow: inset 0px -8px 0px #118c87;
  border-radius: 15px;
  padding: 17px 170px 25px;
  border: none;
  line-height: 24px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  ${({styleOpt}) => styleOpt}
`;

export default Button;
