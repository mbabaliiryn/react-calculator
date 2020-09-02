import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const lightorange = 'none';

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    return (
      <div className="buttonPanel">
        <div className="groupOne">
          <Button wide={false} name="AC" clickHandler={this.handleClick} />
          <Button wide={false} name="+/-" clickHandler={this.handleClick} />
          <Button wide={false} name="%" clickHandler={this.handleClick} />
          <Button wide={false} color={lightorange} name="÷" clickHandler={this.handleClick} />
        </div>
        <div className="groupTwo">
          <Button wide={false} name="7" clickHandler={this.handleClick} />
          <Button wide={false} name="8" clickHandler={this.handleClick} />
          <Button wide={false} name="9" clickHandler={this.handleClick} />
          <Button wide={false} color={lightorange} name="x" clickHandler={this.handleClick} />
        </div>
        <div className="groupThree">
          <Button wide={false} name="4" clickHandler={this.handleClick} />
          <Button wide={false} name="5" clickHandler={this.handleClick} />
          <Button wide={false} name="6" clickHandler={this.handleClick} />
          <Button wide={false} color={lightorange} name="-" clickHandler={this.handleClick} />
        </div>
        <div className="groupFour">
          <Button wide={false} name="1" clickHandler={this.handleClick} />
          <Button wide={false} name="2" clickHandler={this.handleClick} />
          <Button wide={false} name="3" clickHandler={this.handleClick} />
          <Button wide={false} color={lightorange} name="+" clickHandler={this.handleClick} />
        </div>
        <div className="groupFive">
          <Button wide name="0" clickHandler={this.handleClick} />
          <Button wide={false} name="." clickHandler={this.handleClick} />
          <Button wide={false} color={lightorange} name="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
