import React from 'react';
import Square from './Square';

const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

export default function TicTacToe() {
  const [state, setState] = React.useState({
    player: CIRCLE,
    positions: [
      EMPTY,
      EMPTY,
      CIRCLE,
      EMPTY,
      CROSS,
      EMPTY,
      EMPTY,
      CIRCLE,
      EMPTY,
    ],
  });

  return (
    <div className="grid">
      <Square position={0} value={state.positions[0]} />
      <Square position={1} value={state.positions[1]} />
      <Square position={2} value={state.positions[2]} />
      <Square position={3} value={state.positions[3]} />
      <Square position={4} value={state.positions[4]} />
      <Square position={5} value={state.positions[5]} />
      <Square position={6} value={state.positions[6]} />
      <Square position={7} value={state.positions[7]} />
      <Square position={8} value={state.positions[8]} />
    </div>
  );
}
