function sum() {
  let num1 = Number(document.getElementById('num1').value),
      num2 = Number(document.getElementById('num2').value),
      result = num1 + num2;
  document.getElementById('result1').innerHTML = result;
}

function sub() {
  let num1 = Number(document.getElementById('num3').value),
      num2 = Number(document.getElementById('num4').value),
      result = num1 - num2;
  document.getElementById('result2').innerHTML = result;
}

function multi() {
  let num1 = Number(document.getElementById('num5').value),
      num2 = Number(document.getElementById('num6').value),
      result = num1 * num2;
  document.getElementById('result3').innerHTML = result;
}

function div() {
  let num1 = Number(document.getElementById('num7').value),
      num2 = Number(document.getElementById('num8').value),
      result = num1 / num2;
  document.getElementById('result4').innerHTML = result;
}

  


