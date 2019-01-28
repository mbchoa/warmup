import React, { useState } from 'react';

import { kgToLb, lbToKg, round5 } from '../utils';

import '../styles/warmup-input.scss';

const Warmup = () => {
  const [targetWeight, setTargetWeight] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [firstWarmup, setFirstWarmup] = useState(0);
  const [secondWarmup, setSecondWarmup] = useState(0);
  const [thirdWarmup, setThirdWarmup] = useState(0);
  const [weightMode, setWeightMode] = useState('lbs');

  function handleCalculateClick () {
    setFirstWarmup(round5(targetWeight * 0.4));
    setSecondWarmup(round5(targetWeight * 0.6));
    setThirdWarmup(round5(targetWeight * 0.8));
    setIsCalculated(true);
  }

  function handleClearClick () {
    setIsCalculated(false);
    setTargetWeight(0);
  }

  function toggleWeightMode () {
    setWeightMode(weightMode === 'lbs' ? 'kgs' : 'lbs');
    setTargetWeight(weightMode === 'lbs'
      ? round5(lbToKg(targetWeight))
      : round5(kgToLb(targetWeight))
    );
  }

  return (
    <div className="warmup-input">
      <h1 className="warmup-input__header">Warmup</h1>
      <div className="warmup-input__form">
        <input
          className="warmup-input__input"
          onChange={(e) => setTargetWeight(e.target.value)}
          placeholder="Enter weight"
          type="number"
          value={targetWeight || ''}
        />
        <div className="warmup-input__actions">
          <button
            className="warmup-input__button"
            onClick={handleCalculateClick}
          >
            CALC
          </button>
          {!isCalculated && (
            <button
              className="warmup-input__secondary-button"
              onClick={toggleWeightMode}
            >
              { weightMode }
            </button>
          )}
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
              <span className="warmup-input__value">3 x 5 x 45 {weightMode}</span>
            </div>
            <div className="warmup-input__table-row">
              <span>40%</span>
              <span className="warmup-input__value">5 x {firstWarmup} {weightMode}</span>
            </div>
            <div className="warmup-input__table-row">
              <span>60%</span>
              <span className="warmup-input__value">3 x {secondWarmup} {weightMode}</span>
            </div>
            <div className="warmup-input__table-row">
              <span>80%</span>
              <span className="warmup-input__value">2 x {thirdWarmup} {weightMode}</span>
            </div>
          </div>
          <button className="warmup-input__save-button">
            Save
          </button>
        </>
      )}
    </div>
  )
}

export default Warmup;
