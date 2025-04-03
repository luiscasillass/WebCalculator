let fullOperation = '';

function addNumber(number) {
  let op = fullOperation.split('');
  console.log(op);

  if (['+', '-', 'x', '÷', '^'].includes(number.toString()) && op.some(char => ['+', '-', 'x', '÷', '^'].includes(char))) {
    return;
  }

  if (number === "="){
    calculate();
    return;
  }

  if (number === "C"){
    fullOperation = '';
    showNumber();
    return;
  }

  fullOperation = fullOperation + number.toString();
  showNumber();
}

function calculate(){
  let result = 0;

  if (fullOperation.includes('+')) {
    let parts = fullOperation.split('+');
    result = Number(parts[0]) + Number(parts[1]);
  } else if (fullOperation.includes('-')) {
    let parts = fullOperation.split('-');
    result = Number(parts[0]) - Number(parts[1]);
  } else if (fullOperation.includes('x')) {
    let parts = fullOperation.split('x');
    result = Number(parts[0]) * Number(parts[1]);
  } else if (fullOperation.includes('÷')) {
    let parts = fullOperation.split('÷');
    result = Number(parts[0]) / Number(parts[1]);
  } else if (fullOperation.includes('^')) {
    let parts = fullOperation.split('^');
    result = Math.pow(Number(parts[0]), Number(parts[1]));
  }

  fullOperation = result.toString();
  showNumber();
}

function showNumber() {
  document.getElementById('operation').innerHTML = fullOperation;
}
