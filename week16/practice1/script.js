function sumInput() {
  let arrContainer = document.getElementById('arr');
  let arr = [];
  for (let i=0; i<5; i++) {
    arr[i] = prompt('Введите значение');
    if (arr[i] === null || Number.isNaN(Number(arr[i])) || arr[i] === '') {
      return;
    }
  }
  function count () {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
      sum += Number(arr[i]);
    }
    return sum;
  }
  arrContainer.innerHTML = arr;
  console.log(arr.sort());
  console.log(count()); 
}

sumInput();
