import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.scss';

export default function Button({
  name, color, wide, clickHandler,
}) {
  const btnWidth = wide ? '50%' : '25%';
  return (
    <button
      type="button"
      className="buttonSquare"
      style={{ backgroundColor: color, width: btnWidth }}
      onClick={() => clickHandler(name)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
  wide: '25%',
  color: '#d9d9d9',
};
