import React from 'react';
import PropTypes from 'prop-types';

const FieldGroup = ({ block, children, label }) => (
  <div className={`macros__${block}`}>
    <label className="macros__label">{label}</label>
    <div className="macros__inputgroup">
      {children}
    </div>
  </div>
);

FieldGroup.propTypes = {
  block: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
};

FieldGroup.defaultProps = {
  block: '',
  children: null,
  label: '',
};

export default FieldGroup;
