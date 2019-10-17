/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
*/
function pow(m, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= m;
  }
  return result;
}

const x = prompt('Какое число возводим в степень?', 1);
const y = prompt('В какую степень возводим число?', 1);

alert(pow(x, y));
