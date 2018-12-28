import React from 'react'

import FieldGroup from './FieldGroup';

const Macros = () => (
  <div className="macros">
    <FieldGroup block="gender" label="Gender">
      <button className="macros__gender-button macros__gender-button--selected">
        Male
      </button>
      <button className="macros__gender-button">Female</button>
    </FieldGroup>
    <FieldGroup block="height" label="Height">
      <input className="macros__input" placeholder="ft" />
      <input className="macros__input" placeholder="in" />
    </FieldGroup>
    <FieldGroup block="weight" label="Weight">
      <input className="macros__input" placeholder="lbs" />
    </FieldGroup>
    <FieldGroup block="age" label="Age">
      <input className="macros__input" placeholder="years" />
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

export default Macros;
