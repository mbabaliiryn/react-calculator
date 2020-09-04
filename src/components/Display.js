import React from 'react';
import PropTypes from 'prop-types';


export default function Display(props) {
  const { total, next, operation } = props;
  return (
    <div className="displayContainer">
      {operation ? next : total}
    </div>
  );
}

Display.defaultProps = {
  total: '0',
  next: '0',
  operation: '0',
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};
