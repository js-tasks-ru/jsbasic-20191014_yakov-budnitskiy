/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
*/ 
 
function pow(m, n) {
  let x = 1;
  for (let i = 1; i <= n; i++)
  {
    x = x * m;
  }
  return x;
}

