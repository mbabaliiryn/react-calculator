import operate from './operate';

export default function calculate(calculate, buttonName) {
  let { total, next, operation } = calculate;
  const symbols = ['-', '+', '÷', 'x'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    total = (total * (-1)).toString();
    if (total) {
      next = (next * (-1)).toString();
    }
  }

  if (buttonName === '%') {
    next = (0.01 * total).toString();
    operation = '%';
  }

  if (symbols.includes(buttonName)) {
    operation = buttonName;
  } else if (numbers.includes(buttonName)) {
    total = total ? total + buttonName : buttonName;
  } else if (operation && numbers.includes(buttonName)) {
    next = next ? next + buttonName : buttonName;
  }

  if (buttonName === '=') {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  return { total, next, operation };
}
