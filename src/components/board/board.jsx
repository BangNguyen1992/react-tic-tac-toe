import React from 'react';

import Square from "../square/square";

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null), // Create an array with 9 null items
    isXCurrent: true,
  }

  renderSquare = (i) => {
    return  <Square
              value={this.state.squares[i]}
              onClickHandler={() => this.onClickHandler(i)}
            />
  }

  onClickHandler = (i) => {
    // Make a copy of state squares
    const squares = [...this.state.squares];

    // Prevent continuing the game if found out the winner or the board is filled
    if (this.findingWinner(squares) || squares[i]) return null;

    // Change the position i depend on player
    squares[i] = this.state.isXCurrent ? 'X' : 'O';

    // Aplly to the state
    this.setState({ squares, isXCurrent: !this.state.isXCurrent });
  }

  status = () => {
    return `Current player: ${this.state.isXCurrent ? 'X' : 'O'}`
  }

  findingWinner = (squares) => {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const winningCondition of winningConditions) {
      const [a, b, c] = winningCondition;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }

    return null;
  }

  checkBoardSlot = (squares) => {
    return squares.every(square => square !== null);
  }

  restartGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      isXCurrent: true
    });
  }

  render() {
    const winner = this.findingWinner(this.state.squares);
    const isBoardFull = this.checkBoardSlot(this.state.squares);

    if (winner) {
      return (
        <div className="game-container">
          <div className="status">{`THE WINNER IS: ${winner}`}</div>
          <div className="game-board">
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
          <div className="btn-restart" onClick={this.restartGame}></div>

        </div>
      );
    } else if (isBoardFull && !winner) {
      return (
        <div className="game-container">
          <div className="status">{`THERE IS NO WINNER THIS ROUND`}</div>
          <div className="btn-restart" onClick={this.restartGame}></div>
        </div>
      )
    } else {
      return (
        <div className="game-container">
          <div className="status">{this.status()}</div>

          <div className="game-board">
            {/* The number is the index in state square array */}
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
          <div className="btn-restart" onClick={this.restartGame}></div>

        </div>
      );
    }
  }
}

export default Board;