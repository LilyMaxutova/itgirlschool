function show() {
  switch(document.getElementById('theme').value) {
    case 'white': document.body.style.cssText = 'color: #000; background-color: #fff';
    break;
    case 'black': document.body.style.cssText = 'color: #fff; background-color: #000';
    break;
    case 'blue': document.body.style.backgroundColor = '#0000ff'; 
    break;
  }
}