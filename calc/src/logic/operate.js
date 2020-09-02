import BigJs from 'big.js/big';

export default function operate(numberOne, numberTwo, operation) {
  let result = null;
  const num1 = BigJs(numberOne);
  const num2 = BigJs(numberTwo);

  switch (operation) {
    case '+':
      result = num1.plus(num2).toString();
      break;
    case '-':
      result = num1.minus(num2).toString();
      break;
    case 'x':
      result = num1.times(num2).toString();
      break;
    case '÷':
      result = num2.eq(0) ? NaN : num1.div(num2).toString();
      break;
    default:
      break;
  }

  return result;
}
