let num1,
    num2;

function inputData() {
  alert('Вводите только числовые данные');
  num1 = +prompt('Введите число');
  num2 = +prompt('Введите число');
}

function sum() {
  inputData();
  alert(num1 + num2);
}

function sub() {
  inputData();
  alert(num1 - num2);
}

function multi() {
  inputData();
  alert(num1 * num2);
}

function div() {
  inputData();
  alert(num1 / num2);
}