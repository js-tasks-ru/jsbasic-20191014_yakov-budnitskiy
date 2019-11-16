/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  let tableContent = '<thead><tr class="result__tr result__tr--head">';
  tableContent += '<td class="result__td result__td--head">Name</td>';
  tableContent += '<td class="result__td result__td--head">Age</td>';
  tableContent += '<td class="result__td result__td--head">Salary</td>';
  tableContent += '<td class="result__td result__td--head">City</td></tr></thead>';
  items.forEach((key) => {
    tableContent += `<tr class="result__tr"><td class="result__td">${key.name}</td>`;
    tableContent += `<td class="result__td">${key.age}</td>`;
    tableContent += `<td class="result__td">${key.salary}</td><td class="result__td">${key.city}</td></tr>`;
  });
  this.el.insertAdjacentHTML('beforeend', tableContent);

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    switch (column) {
      case 0: pos = 'name'; break;
      case 1: pos = 'age'; break;
      case 2: pos = 'salary'; break;
      case 3: pos = 'city'; break;
      default: pos = 'name'; break;
    }
    function compare(a, b) {
      if (a[pos] > b[pos]) rrr = 1;
      if (a[pos] === b[pos]) rrr = 0;
      if (a[pos] < b[pos]) rrr = -1;
      return rrr;
    }
    items.sort(compare);
    if (desc) {
      items.reverse();
    }


    tableContent = '<thead><tr class="result__tr result__tr--head">';
    tableContent += '<td class="result__td result__td--head">Name</td>';
    tableContent += '<td class="result__td result__td--head">Age</td>';
    tableContent += '<td class="result__td result__td--head">Salary</td>';
    tableContent += '<td class="result__td result__td--head">City</td></tr></thead>';
    items.forEach((key) => {
      tableContent += `<tr class="result__tr"><td class="result__td">${key.name}</td>`;
      tableContent += `<td class="result__td">${key.age}</td>`;
      tableContent += `<td class="result__td">${key.salary}</td><td class="result__td">${key.city}</td></tr>`;
    });
    this.el.insertAdjacentHTML('beforeend', tableContent);
    this.el.innerHTML = tableContent;
  };
}
