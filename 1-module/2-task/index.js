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
  const nameLength = name.length;
  let res = true;
  if (nameLength > 4 || nameLength < 1) {
    res = false;
  } else {
    for (let i = 0; i < nameLength; i += 1) {
      if (name[i] === ' ') {
        res = false;
        break;
      }
    }
  }
  alert(res);
  return res;
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
