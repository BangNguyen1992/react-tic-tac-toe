import React from 'react';

import Board from '../../components/board/board';
import './tic-tac-toe.css';

class TicTacToe extends React.Component {
  render() {
    return (
      <div className="tic-tac-toe">
        <div className="">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default TicTacToe;