import React, { Component } from 'react';
import Game from './Game';
import HowToPlay from './HowToPlay';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Game/>
        <HowToPlay/>
      </div>
    );
  }
}

export default App;
