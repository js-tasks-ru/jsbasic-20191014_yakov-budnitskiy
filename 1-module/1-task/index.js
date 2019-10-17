/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
*/ 

let x = prompt('Какое число возводим в степень?', 1),
y = prompt('В какую степень возводим число?', 1);

alert(pow(x,y));

 
function pow(m, n) {
  let result = 1;
  for (let i = 1; i <= n; i++)
  {
    result = result * m;
  }
  return result;
}


