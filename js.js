let UserInput,
Numbers = ["12345", 'qwerty', '654321', '123qwedcxz123', '51535759qw'],
attempts = 0;


const p = document.getElementById("p");


while(attempts < 3) {
  UserInput = prompt('Введите пароль');
  let arr = Numbers.indexOf('UserInput');
if ( arr = true) {
  alert('Congratulations');
  break;
} else {
  alert(`you have ${2 - attempts} trying`);
}
 attempts++;
}




