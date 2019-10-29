/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone(prime) {
  const newObj = {};

  for (const key in prime) {
    if (prime[key] === null) {
      newObj[key] = null;
    } else if (typeof prime[key] === 'object') {
      newObj[key] = clone(prime[key]);
    } else {
      newObj[key] = prime[key];
    }
  }

  return newObj;
}
