/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
<<<<<<< HEAD
  const nameLength = name.length;
  let res = true;
  if (nameLength > 4 || nameLength < 1) {
    res = false;
  } else {
    for (let i = 0; i < nameLength; i += 1) {
      if (name[i] === ' ') {
        res = false;
=======
  if (name === undefined) name = '';
  const nameLength = name.length;
  let result = true;

  if (nameLength < 4) {
    result = false;
  } else {
    for (let i = 0; i < nameLength; i += 1) {
      if (name[i] === ' ') {
        result = false;
>>>>>>> ba68a96d2e911bb104f0e36e1c0a8562ea08bba4
        break;
      }
    }
  }
<<<<<<< HEAD
  alert(res);
  return res;
=======
  return result;
>>>>>>> ba68a96d2e911bb104f0e36e1c0a8562ea08bba4
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
