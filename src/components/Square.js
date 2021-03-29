import React from 'react';
import TicTacToe from './TicTacToe';
import Cross from './Cross';
import Circle from './Circle';
const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';
export default function Square({ position, value, takeTurn }) {
  function handleClick(event) {
    if (value === EMPTY) takeTurn(position);
  }

  return (
    <div className="square" onClick={handleClick}>
      {value === CIRCLE && <Circle />}
      {value === CROSS && <Cross />}
    </div>
  );
}
