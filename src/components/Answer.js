import React from 'react';

const Answer = ({ selectedNumbers, onNumberRemoved }) => {
  return (
    <div className="col-5 answer-container">
      {selectedNumbers.length > 0 &&
        selectedNumbers.map((selectedNumber, key) =>
          <span key={key} onClick={() => onNumberRemoved(selectedNumber)}>
            {selectedNumber}
          </span>
      )}
    </div>
   );
}

export default Answer;
