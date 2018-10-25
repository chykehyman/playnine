import React from 'react';

const HowToPLay = () => {
  return (
    <div className="container mt-5 pt-5 ">
      <h3 className="text-center pb-0">How To Play</h3>
      <div className="game-rules">
        <div className="rules">
          <h5>Step One</h5>
          <p>From the list of circled numbers provided, pick any combinations that sums up to the number of rolling stars</p>
        </div>
        <div className="rules">
          <h5>Step Two</h5>
          <p>Click the blue button representing an "equal to" sign, to verify if you answered correctly or not. If correct, a green button with a "check mark" label will show else, a red button with an "X" label will show </p>
        </div>
        <div className="rules">
          <h5>Step Three</h5>
          <p>If the green button shows, click it again to continue the game. If a red button shows, click the yellow "refresh" button to continue</p>
        </div>
        <div className="rules">
          <h5>Step Four</h5>
          <p>If the green button shows, click it again to continue the game. If a red button shows, click the yellow "refresh" button to continue</p>
        </div>
      </div>
    </div>
   );
}

export default HowToPLay;
