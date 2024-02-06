export function evaluate({ currentOperand, previousOperand, operation }) {
  const pre = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (Number.isNaN(pre) || Number.isNaN(current)) return '';
  let computation = '';
  switch (operation) {
    case '+':
      computation = pre + current;
      break;
    case '-':
      computation = pre - current;
      break;
    case '*':
      computation = pre * current;
      break;
    case '÷':
      computation = pre / current;
      break;
    default:

      // Handle other cases or provide a default value if needed
      break;
  }
  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

export function formatOperand(operand, maxLength = 10) {
  if (operand == null) return '';

  const [integer, decimal] = operand.split('.');

  // Ensure the total length, including the decimal point, does not exceed maxLength
  const formattedInteger = INTEGER_FORMATTER.format(integer)
    .slice(0, maxLength - (decimal ? 2 : 0));

  let formattedDecimal = '';

  if (decimal != null) {
    const remainingLength = maxLength - formattedInteger.length - 1;
    if (remainingLength > 0) {
      formattedDecimal = decimal.slice(0, remainingLength);
    }
  }

  // Combine the integer and decimal parts
  const formattedOperand = formattedDecimal.length > 0
    ? `${formattedInteger}.${formattedDecimal}`
    : formattedInteger;

  return formattedOperand;
}
