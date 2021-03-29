import React from 'react';
import TicTacToe from './TicTacToe';
import Cross from './Cross';
import Circle from './Circle';
const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';
export default function Square({ position, value }) {
  return (
    <div className="square">
      {value === CIRCLE && <Circle />}
      {value === CROSS && <Cross />}
    </div>
  );
}
