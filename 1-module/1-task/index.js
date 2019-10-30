/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
*/
function pow(m, n) {
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result *= m;
  }
  return result;
}

const x = prompt('enter the basis of the degree', 1);
const y = prompt('enter the exponent', 1);

alert(pow(x, y));
