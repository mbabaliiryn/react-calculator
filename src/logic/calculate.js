import operate from './operate';

export default function calculate(calcObject, buttonName) {
  let { total, next, operation } = calcObject;
  const symbols = ['-', '+', '÷', 'x'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    [total, next, operation] = [null, null, null];
  }

  if (buttonName === '+/-') {
    if (total && next == null) {
      total = (total * (-1)).toString();
      next = null;
    }
    if (total && next) {
      next = (next * (-1)).toString();
    }
  }

  if (buttonName === '%') {
    next = (0.01 * total).toString();
    operation = '%';
  }

  if (buttonName === '.') {
    if (total.length === 1) {
      total += buttonName;
    }
  }

  if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = total;
      operation = null;
    }
  }

  if (symbols.includes(buttonName)) {
    operation = buttonName;
  } else if (operation && numbers.includes(buttonName)) {
    next = next ? next + buttonName : buttonName;
  } else if (numbers.includes(buttonName)) {
    total = total ? total + buttonName : buttonName;
  }

  return { total, next, operation };
}
