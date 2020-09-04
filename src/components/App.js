import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default function App() {
  return (
    <div className="App" id="calculatorApp">
      <Display result="10" />
      <ButtonPanel />
    </div>
  );
}