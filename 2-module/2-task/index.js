/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let res = true;
  for (const key in obj) {
    if (obj[key] || obj[key] === null || obj[key] === undefined) {
      res = false;
      break;
    }
  }
  return res;
}
