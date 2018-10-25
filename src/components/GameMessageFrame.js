import React from 'react';

const GameMessageFrame = ({gameStatusMessage, resetGame}) => {
  return (
    <div className="text-center">
      <h2>{gameStatusMessage}</h2>
      <button
        onClick={resetGame}
        className="btn btn-outline-secondary btn-sm">Play Again
      </button>
    </div>
   );
}

export default GameMessageFrame;
