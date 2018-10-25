import React from 'react';

const Button = ({ selectedNumbers, isAnswerCorrect, onAnswerSubmit, storeUsedNumbers, reDrawRandomStars, numberOfRedrawsLeft, gameStatusMessage }) => {
  let button;
  const renderCheckAnswerButton = () => {
    switch (isAnswerCorrect) {
      case true:
        button = <button
            className="btn btn-success confirm-answer"
            onClick={storeUsedNumbers}>
            <i className="fa fa-check"></i>
          </button>
        break;
      case false:
        button = <button
            className="btn btn-danger confirm-answer">
            <i className="fa fa-times"></i>
          </button>
        break;
      default:
        button =  <button
            className="btn btn-primary confirm-answer"
            onClick={onAnswerSubmit}
            disabled={selectedNumbers.length === 0}> <em className="confirm-answer-value">=</em>
          </button>
        break;
    }
    return button;
  }

  const renderRefreshButton = () => (
    <button
        className="btn btn-sm btn-warning"
        onClick={reDrawRandomStars}
        disabled={gameStatusMessage || numberOfRedrawsLeft === 0}>
        <i className="fa fa-refresh"> {numberOfRedrawsLeft}</i>
      </button>
  );

  return (
    <div className="col-2 button-container">
      {renderCheckAnswerButton()}
      {renderRefreshButton()}
    </div>
   );
}

export default Button;
