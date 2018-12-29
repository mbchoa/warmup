import React, { useState } from 'react'
import classNames from 'classnames';

import { FEMALE, MALE } from '../../constants';

import FieldGroup from './FieldGroup';

const Macros = () => {
  const [gender, setGender] = useState(MALE);

  return (
    <div className="macros">
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
        <input className="macros__input" min="0" placeholder="ft" type="number" />
        <input className="macros__input" min="0" placeholder="in" type="number" />
      </FieldGroup>
      <FieldGroup block="weight" label="Weight">
        <input className="macros__input" min="0" placeholder="lbs" type="number" />
      </FieldGroup>
      <FieldGroup block="age" label="Age">
        <input className="macros__input" min="0" placeholder="years" type="number" />
      </FieldGroup>
      <FieldGroup block="activity" label="Activity">
        <select className="macros__select">
          <option>Sedentary</option>
          <option>Mild Activity</option>
          <option>Moderate Activity</option>
          <option>Heavy Activity</option>
          <option>Extreme Activity</option>
        </select>
      </FieldGroup>
      <div className="macros__action">
        <button className="macros__submit">Calculate</button>
      </div>
    </div>
  );
};

export default Macros;
