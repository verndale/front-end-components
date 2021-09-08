import React from 'react';

const Spinner = props => {
  return props.loading ? (
    <div className="spinner">
      <div className="spinner__icon">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  ) : null;
};

export default Spinner;
