import React, { Component } from 'react';
import _ from 'lodash';


import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import GameMessageFrame from './GameMessageFrame';

import possibleCombinationSum from '../helper/possibleCombinationSum';

class Game extends Component {
  static generateRandomNumber = () => Math.floor((Math.random() * 9) + 1);
  static initialState = () => ({
    selectedNumbers: [],
    usedNumbers: [],
    randomNumberOfStars: Game.generateRandomNumber(),
    isAnswerCorrect: null,
    numberOfRedrawsLeft: 5,
    gameStatusMessage: null
  })
  state = Game.initialState();

  onNumberSelected = (selectedNumber) => {
    if (this.state.usedNumbers.includes(selectedNumber)) return;
    if (!this.state.selectedNumbers.includes(selectedNumber)) {
      this.setState(prevState => ({
        isAnswerCorrect: null,
        selectedNumbers: prevState.selectedNumbers.concat(selectedNumber)
      }));
    }
  }

  onNumberRemoved = (removedNumber) => {
      this.setState(prevState => ({
        isAnswerCorrect: null,
        selectedNumbers: prevState.selectedNumbers
          .filter(number => number !== removedNumber)
      }));
  }

  onAnswerSubmit = () => {
    this.setState(prevState => ({
      isAnswerCorrect: prevState.randomNumberOfStars ===
        prevState.selectedNumbers.reduce((a, b) => a + b, 0)
    }))
  }

  storeUsedNumbers = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      isAnswerCorrect: null,
      randomNumberOfStars: Game.generateRandomNumber()
    }), this.updateGameStatus);
  }

  reDrawRandomStars = () => {
    if (this.state.numberOfRedrawsLeft > 0) {
      this.setState(prevState => ({
        randomNumberOfStars: Game.generateRandomNumber(),
        selectedNumbers: [],
        isAnswerCorrect: null,
        numberOfRedrawsLeft: prevState.numberOfRedrawsLeft - 1
      }), this.updateGameStatus);
    }
  }

  possibleSolutions = ({ randomNumberOfStars, usedNumbers }) => {
    const possibleNumbers = _.range(1, 10).filter(number => !usedNumbers.includes(number));

    return possibleCombinationSum(possibleNumbers, randomNumberOfStars)
  }

  updateGameStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { gameStatusMessage: 'Hurray. You Win!'}
      }

      if (prevState.numberOfRedrawsLeft === 0 && !this.possibleSolutions(prevState)) {
        return { gameStatusMessage: 'Game Over!'}
      }
    })
  }

  resetGame = () => this.setState(Game.initialState());

  render () {
    const {
      selectedNumbers,
      randomNumberOfStars,
      isAnswerCorrect,
      usedNumbers,
      numberOfRedrawsLeft,
      gameStatusMessage } = this.state;
    return (
      <div className="container">
        <h3 className="header">Play Nine</h3>
        <hr/>
        <div className="row">
          <Stars randomNumberOfStars={randomNumberOfStars}/>
          <Button
            selectedNumbers={selectedNumbers}
            isAnswerCorrect={isAnswerCorrect}
            onAnswerSubmit={this.onAnswerSubmit}
            storeUsedNumbers={this.storeUsedNumbers}
            reDrawRandomStars={this.reDrawRandomStars}
            numberOfRedrawsLeft={numberOfRedrawsLeft}
            gameStatusMessage={gameStatusMessage}/>
          <Answer
            selectedNumbers={selectedNumbers}
            onNumberRemoved={this.onNumberRemoved}/>
        </div>
        <br/>
        {!gameStatusMessage
          ?
            <Numbers
              selectedNumbers={selectedNumbers}
              usedNumbers={usedNumbers}
              onNumberSelected={this.onNumberSelected}/>
           :
            <GameMessageFrame
              gameStatusMessage={gameStatusMessage}
              resetGame={this.resetGame}/>
        }
      </div>
     );
  }
}

export default Game;
