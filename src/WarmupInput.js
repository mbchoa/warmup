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
    <div className="warmup-input">
      <h1 className="warmup-input__header">Warmup</h1>
      <div className="warmup-input__form">
        <p className="warmup-input__label">Target Weight</p>
        <div className="warmup-input__row">
          <input
            className="warmup-input__input"
            onChange={(e) => setTargetWeight(e.target.value)}
            type="number"
            value={targetWeight || ''}
          />
          <button
            className="warmup-input__button"
            onClick={handleCalculateClick}
          >
            CALC
          </button>
          {isCalculated && (
            <button
              className="warmup-input__secondary-button"
              onClick={handleClearClick}
            >
              Clear
            </button>
          )}
        </div>
      </div>
      { isCalculated && (
        <>
          <hr className="warmup-input__divider" />
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
        </>
      )}
    </div>
  )
}

export default WarmupInput;
