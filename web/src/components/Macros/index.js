import React, { useState } from 'react'
import classNames from 'classnames';

import {
  FEMALE,
  MALE,
  SEDENTARY_ACTIVITY,
  MILD_ACTIVITY,
  MODERATE_ACTIVITY,
  HEAVY_ACTIVITY,
  EXTREME_ACTIVITY
} from '../../constants';
import { mifflinStJeor } from '../../formulas';
import { inchToCm, lbToKg } from '../../utils';

import FieldGroup from './FieldGroup';
import Result from './Result';

const Macros = () => {
  const [gender, setGender] = useState(MALE);
  const [heightFt, setHeightFt] = useState(0);
  const [heightIn, setHeightIn] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activityMultiplier, setActivityMultiplier] = useState(SEDENTARY_ACTIVITY);
  const [displayResults, setDisplayResults] = useState(false);
  const [originalCalories, setOriginalCalories] = useState(0);
  const [calculatedCalories, setCalculatedCalories] = useState(0);

  function handleHeightFtChange(e) {
    setHeightFt(parseInt(e.target.value));
  }

  function handleHeightInChange(e) {
    setHeightIn(parseInt(e.target.value));
  }

  function handleWeightChange(e) {
    setWeight(parseFloat(e.target.value));
  }

  function handleAgeChange(e) {
    setAge(parseInt(e.target.value));
  }

  function handleActivityChange(e) {
    setActivityMultiplier(parseFloat(e.target.value));
  }

  function handleCalculate() {
    const calories = Math.round(mifflinStJeor({
      age,
      gender,
      height: inchToCm(heightFt*12 + heightIn),
      weight: lbToKg(weight),
    }) * activityMultiplier);

    setCalculatedCalories(calories);
    setOriginalCalories(calories);
    setDisplayResults(true);
  }

  function handleWeightGoalChange(weightGoal) {
    setCalculatedCalories(originalCalories+weightGoal);
  }

  return (
    <div className="macros">
      <h1 className="macros__header">macros</h1>
      <div className="macros__form">
        <FieldGroup block="gender" label="Gender">
          <button
            className={classNames(
              'macros__gender-button',
              {'macros__gender-button--selected': gender === MALE},
            )}
            onClick={() => setGender(MALE)}
          >
            Male
          </button>
          <button
            className={classNames(
              'macros__gender-button',
              {'macros__gender-button--selected': gender === FEMALE},
            )}
            onClick={() => setGender(FEMALE)}
          >
            Female
          </button>
        </FieldGroup>
        <FieldGroup block="height" label="Height">
          <input className="macros__input" min="0" onChange={handleHeightFtChange} placeholder="ft" step="1" type="number" />
          <input className="macros__input" min="0" onChange={handleHeightInChange} placeholder="in" step="1" type="number" />
        </FieldGroup>
        <FieldGroup block="weight" label="Weight">
          <input className="macros__input" min="0" onChange={handleWeightChange} placeholder="lbs" type="number" />
        </FieldGroup>
        <FieldGroup block="age" label="Age">
          <input className="macros__input" min="0" onChange={handleAgeChange} placeholder="years" type="number" />
        </FieldGroup>
        <FieldGroup block="activity" label="Activity">
          <select className="macros__select" onChange={handleActivityChange}>
            <option value={SEDENTARY_ACTIVITY}>Sedentary</option>
            <option value={MILD_ACTIVITY}>Mild Activity</option>
            <option value={MODERATE_ACTIVITY}>Moderate Activity</option>
            <option value={HEAVY_ACTIVITY}>Heavy Activity</option>
            <option value={EXTREME_ACTIVITY}>Extreme Activity</option>
          </select>
        </FieldGroup>
        <div className="macros__action">
          <button className="macros__submit" onClick={handleCalculate}>Calculate</button>
        </div>
      </div>
      {displayResults && (
        <div className="macros__result">
          <Result {...{ calculatedCalories, handleWeightGoalChange }} />
        </div>
      )}
    </div>
  );
};

export default Macros;
