/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  // Add your code here

  varTbody = table.querySelector('tbody');
  arrTr = varTbody.querySelectorAll('tr');

  for (const thisTr of arrTr) {
    arrTd = thisTr.querySelectorAll('td');

    if (arrTd[3].dataset.available === 'true') {
      thisTr.classList.add('available');
    } else if (arrTd[3].dataset.available === 'false') {
      thisTr.classList.add('unavailable');
    } else {
      thisTr.setAttribute('hidden', true);
    }

    if (arrTd[2].innerHTML === 'f') {
      thisTr.classList.add('female');
    } else if (arrTd[2].innerHTML === 'm') {
      thisTr.classList.add('male');
    }

    if (arrTd[1].innerHTML < 18) {
      thisTr.setAttribute('style', 'text-decoration: line-through;');
    }
  }

  return true;
}
