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
  if (name === undefined) name = '';
  const nameLength = name.length;
  let result = true;

  if (nameLength < 4) {
    result = false;
  } else {
    for (let i = 0; i < nameLength; i += 1) {
      if (name[i] === ' ') {
        result = false;
        break;
      }
    }
  }
  return result;
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
