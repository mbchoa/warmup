import React, { useState } from 'react';

const WarmupInput = () => {
  const [targetWeight, setTargetWeight] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [firstWarmup, setFirstWarmup] = useState(0);
  const [secondWarmup, setSecondWarmup] = useState(0);
  const [thirdWarmup, setThirdWarmup] = useState(0);

  function handleCalculateClick () {
    setFirstWarmup(targetWeight * 0.4);
    setSecondWarmup(targetWeight * 0.6);
    setThirdWarmup(targetWeight * 0.8);
    setIsCalculated(true);
  }

  function handleClearClick () {
    setIsCalculated(false);
    setTargetWeight(0);
  }

  return (
    <div>
      <h1>Warmup</h1>
      <p>Target Weight</p>
      <input
        onChange={(e) => setTargetWeight(e.target.value)}
        type="number"
        value={targetWeight || ''}
      />
      <button onClick={handleCalculateClick}>
        Calculate
      </button>
      {isCalculated && (
        <button onClick={handleClearClick}>
          Clear
        </button>
      )}
      { isCalculated && (
        <div>
          <div>
            <span>Empty Bar</span>
            <span>45 x 5 x 3</span>
          </div>
          <div>
            <span>40%</span>
            <span>{firstWarmup} x 5</span>
          </div>
          <div>
            <span>60%</span>
            <span>{secondWarmup} x 3</span>
          </div>
          <div>
            <span>80%</span>
            <span>{thirdWarmup} x 2</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default WarmupInput;
