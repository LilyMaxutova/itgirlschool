function isNumValid(num1) {
  return !Number.isNaN(Number(num1));
}

function sum() {
  let num1 = Number(document.getElementById('num1').value),
      num2 = Number(document.getElementById('num2').value);
      if (isNumValid(num1) && isNumValid(num2)) {
        let result = num1 + num2;
        document.getElementById('result1').innerHTML = result;
      }else {
        alert ('Только числовые значения')
      }
}

function sub() {
  let num1 = Number(document.getElementById('num3').value),
      num2 = Number(document.getElementById('num4').value);
      if (isNumValid(num1) && isNumValid(num2)) {
        let result = num1 - num2;
        document.getElementById('result2').innerHTML = result;
      }else {
        alert ('Только числовые значения')
      }
}

function multi() {
  let num1 = Number(document.getElementById('num5').value),
      num2 = Number(document.getElementById('num6').value);
      if (isNumValid(num1) && isNumValid(num2)) {
        let result = num1 * num2;
        document.getElementById('result3').innerHTML = result;
      }else {
        alert ('Только числовые значения')
      }
}

function div() {
  let num1 = Number(document.getElementById('num7').value),
      num2 = Number(document.getElementById('num8').value);
      if (isNumValid(num1) && isNumValid(num2)) {
        if (num2 == 0) {
          alert('На 0 делить нельзя!');
          return;
         } 
        let result = num1 / num2;
        document.getElementById('result4').innerHTML = result;
      } else {
        alert ('Только числовые значения');
      }
}

  


