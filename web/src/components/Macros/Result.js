import React, { useState } from 'react';
import cx from 'classnames';
import { partial } from 'lodash';

import { LOSE_WEIGHT, MAINTAIN_WEIGHT, BULK_WEIGHT } from '../../constants';

import '../../styles/result.scss';

const Result = ({ calculatedCalories, handleWeightGoalChange }) => {
  const [selectedTabIndex, setTabIndex] = useState(1)

  function handleTabClick(tabIndex) {
    switch (tabIndex) {
      case 0:
        handleWeightGoalChange(LOSE_WEIGHT);
        break;
      case 1:
        handleWeightGoalChange(MAINTAIN_WEIGHT);
        break;
      case 2:
        handleWeightGoalChange(BULK_WEIGHT);
        break;
      default:
        break;
    }
    setTabIndex(tabIndex);
  }

  return (
    <div className="result">
      <ul className="result__tabs">
        <li className={cx(
          "result__tab",
          {"result__tab--selected": selectedTabIndex === 0},
        )} onClick={partial(handleTabClick, 0)}>Lose Weight</li>
        <li className={cx(
          "result__tab",
          {"result__tab--selected": selectedTabIndex === 1},
        )} onClick={partial(handleTabClick, 1)}>Maintain Weight</li>
        <li className={cx(
          "result__tab",
          {"result__tab--selected": selectedTabIndex === 2},
        )} onClick={partial(handleTabClick, 2)}>Gain Weight</li>
      </ul>
      <div className="result__content">
        {calculatedCalories} Calories
      </div>
    </div>
  );
};

export default Result;

