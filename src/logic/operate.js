import BigJs from 'big.js/big';

export default function operate(numberOne, numberTwo, operation) {
  let result = null;

  switch (operation) {
    case '+':
      result = BigJs(numberOne).plus(BigJs(numberTwo)).toString();
      break;
    case '-':
      result = BigJs(numberOne).minus(BigJs(numberTwo)).toString();
      break;
    case 'x':
      result = BigJs(numberOne).times(BigJs(numberTwo)).toString();
      break;
    case '÷':
      result = BigJs(numberTwo).eq(0) ? NaN : BigJs(numberOne).div(BigJs(numberTwo)).toString();
      break;
    default:
      break;
  }

  return result;
}
