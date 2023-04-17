import React, {FC} from 'react';
import styled from 'styled-components';
import Square from '../components/Square';

interface IProps {
  board: Array<string | null>;
  makeMoveHandler: (idx: number) => void;
}

const Grid: FC<IProps> = ({board, makeMoveHandler}) => {
  return (
    <GridWrapper>
      {board.map((ele, i) => (
        <Square
          key={`ele_${i}`}
          sign={ele}
          makeMoveHandler={makeMoveHandler}
          idx={i}
        />
      ))}
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
`;
export default Grid;
