import React from 'react';
import styled from 'styled-components';

interface IProps {
  text: string;
  bgColor?: string;
  handler: () => void;
}

interface IButtonWrapper {
  bgColor?: string;
}

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
`;

const Button = (props: IProps) => {
  const {text, bgColor, handler} = props;
  return (
    <ButtonWrapper bgColor={bgColor} onClick={handler}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;
