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
        <div className="warmup-input__form-row">
          <input
            className="warmup-input__input"
            onChange={(e) => setTargetWeight(e.target.value)}
            placeholder="Enter top set tweight"
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
          <div className="warmup-input__table">
            <div className="warmup-input__table-row">
              <span>Empty Bar</span>
              <span className="warmup-input__value">3 x 5 x 45</span>
            </div>
            <div className="warmup-input__table-row">
              <span>40%</span>
              <span className="warmup-input__value">5 x {firstWarmup}</span>
            </div>
            <div className="warmup-input__table-row">
              <span>60%</span>
              <span className="warmup-input__value">3 x {secondWarmup}</span>
            </div>
            <div className="warmup-input__table-row">
              <span>80%</span>
              <span className="warmup-input__value">2 x {thirdWarmup}</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default WarmupInput;
