import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.scss';

export default function Display(props) {
  const { result } = props;
  return (
    <div className="displayContainer">
      {result}
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
