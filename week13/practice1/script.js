function user() {
  let name = prompt('Как Вас зовут?');
    if (name == false || name == null) {
      let name2 = prompt('Как Вас зовут?');
    } else {
      alert(`Привет, ${name}`);
    }
}
  

