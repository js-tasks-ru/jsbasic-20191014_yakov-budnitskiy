/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(mass, agen) {
  let stringData = '';
  const ageNumber = +agen;
  for (const item of mass) {
    if (item.age <= ageNumber) {
      stringData += `${item.name}, ${item.balance}\n`;
    }
  }

  return stringData.slice(0, stringData.length - 1);
}
