import React from 'react';
import _ from 'lodash';

const Numbers = ({selectedNumbers, usedNumbers, onNumberSelected}) => {
  const arrayOfNumbers = _.range(1, 10);

  const setClassName = (number) => {
    if (selectedNumbers.includes(number)) {
      return 'selected';
    }

    if (usedNumbers.includes(number)) {
      return 'used'
    }
  }
  return (
    <div className="card text-center">
      <div>
        {arrayOfNumbers.map((number, i) =>
          <span
            key={i}
            className={setClassName(number)}
            onClick={() => onNumberSelected(number)}>
            {number}
          </span>
        )}
      </div>
    </div>
   );
}

export default Numbers;
