function check() {
  let name = document.getElementById('name');
  let surname = document.getElementById('surname');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let confirmation = document.getElementById('confirmation');

  document.getElementById('errorMessage').innerHTML ='';

  if (name.value == '') {
    document.getElementById('errorMessage').innerHTML += 'Введите ваше имя<br>';
  } else if (surname.value == '') {
    document.getElementById('errorMessage').innerHTML += 'Введите вашe фамилию<br>';
  } else if (email.value == '') {
    document.getElementById('errorMessage').innerHTML += 'Введите ваш e-mail<br>';
  } else if (password.value == '') {
    document.getElementById('errorMessage').innerHTML += 'Введите ваш пароль<br>';
  } else if (confirmation.value == '') {
    document.getElementById('errorMessage').innerHTML += 'Подтвердите ваш пароль<br>';
  } else if (password.value !== confirmation.value) {
    document.getElementById('errorMessage').innerHTML += 'Пароли не совпадают<br>';
  } else if (password.value.length <5) {
    document.getElementById('errorMessage').innerHTML += 'Ваш пароль слишком короткий<br>';
  } else {
    alert(`Добро пожаловать, ${name.value}`);
  }
}

