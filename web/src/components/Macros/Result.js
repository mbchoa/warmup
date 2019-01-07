import React from 'react';

const Result = () => {
  return (
    <div className="result">
      <ul className="result__tabs">
        <li className="result__tab">Lose Weight</li>
        <li className="result__tab">Maintain Weight</li>
        <li className="result__tab">Gain Weight</li>
      </ul>
      <div className="result__content">
        2245 Calories
      </div>
    </div>
  );
};

export default Result;

