import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.scss';

const lightorange = '#ffa64d';

export default function ButtonPanel() {
  return (
    <div className="buttonPanel">
      <div className="groupOne">
        <Button wide={false} name="AC" />
        <Button wide={false} name="+/-" />
        <Button wide={false} name="%" />
        <Button wide={false} color={lightorange} name="÷" />
      </div>
      <div className="groupTwo">
        <Button wide={false} name="7" />
        <Button wide={false} name="8" />
        <Button wide={false} name="9" />
        <Button wide={false} color={lightorange} name="X" />
      </div>
      <div className="groupThree">
        <Button wide={false} name="4" />
        <Button wide={false} name="5" />
        <Button wide={false} name="6" />
        <Button wide={false} color={lightorange} name="-" />
      </div>
      <div className="groupFour">
        <Button wide={false} name="1" />
        <Button wide={false} name="2" />
        <Button wide={false} name="3" />
        <Button wide={false} color={lightorange} name="+" />
      </div>
      <div className="groupFive">
        <Button wide name="0" />
        <Button wide={false} name="." />
        <Button wide={false} color={lightorange} name="=" />
      </div>
    </div>
  );
}