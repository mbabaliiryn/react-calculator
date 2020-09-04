import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../styles/App.scss';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const res = calculate(this.state, buttonName);
    this.setState({ ...res });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App" id="calculatorApp">
        <Display total={total || 0} next={next || 0} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
