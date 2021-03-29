import React from 'react';
import TicTacToe from './TicTacToe';

const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';
export default function Result({ winner, reset }) {
  return (
    <div className="result">
      {winner === CIRCLE && 'Circle won the game'}
      {winner === CROSS && 'Cross won the game'}
      {winner === 'It is a a tie' && 'It is a a tie'}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
