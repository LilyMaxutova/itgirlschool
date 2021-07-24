function inputData() {
  let num1 = +prompt('Введите число');
  let num2 = +prompt('Введите число');
  return [num1, num2];
}

function isNumValid(num1) {
  return !Number.isNaN(Number(num1));
}

function sum() {
  let [num1, num2] = inputData();
  if (isNumValid(num1) && isNumValid(num2)) {
    alert(num1 + num2);
  } else {
    alert ('Только числовые значения')
  }
}

function sub() {
  let [num1, num2] = inputData();
  if (isNumValid(num1) && isNumValid(num2)) {
    alert(num1 - num2);
  } else {
    alert ('Только числовые значения')
  }
}

function multi() {
  let [num1, num2] = inputData();
  if (isNumValid(num1) && isNumValid(num2)) {
    alert(num1 * num2);
  } else {
    alert ('Только числовые значения')
  }
}

function div() {
  let [num1, num2] = inputData();
  if (isNumValid(num1) && isNumValid(num2)) {
    alert(num1 / num2);
  } else {
    alert ('Только числовые значения')
  }
}