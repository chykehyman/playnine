import React from 'react';
import _ from 'lodash';

const Stars = ({randomNumberOfStars}) => {

  return (
    <div className="col-5">
      {_.range(randomNumberOfStars).map((number, i) =>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
   );
}

export default Stars;
