import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import injectGlobal from './global-styles';

import TicTacToe from './views/tic-tac-toe/tic-tac-toe.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          Welcome to Tic-tac-toe game
        </p>

        <div className="Games">
          <TicTacToe />
        </div>
      </div>
    );
  }
}

export default App;
