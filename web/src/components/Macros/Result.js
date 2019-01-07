import React, { useState } from 'react';
import cx from 'classnames';
import { partial } from 'lodash';

const Result = () => {
  const [selectedTabIndex, setTabIndex] = useState(1)

  function handleTabClick(tabIndex) {
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
        2245 Calories
      </div>
    </div>
  );
};

export default Result;

