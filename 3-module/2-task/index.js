/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(varString) {
  const arrString = varString.match(/-?\d+(\.\d+)?/g);
  let minItem = arrString[0];
  let maxItem = arrString[0];
  for (const item of arrString) {
    if (+item < minItem) { minItem = +item; }
    if (+item > maxItem) { maxItem = +item; }
  }
  const objString = {
    min: minItem,
    max: maxItem,
  };
  return objString;
}
