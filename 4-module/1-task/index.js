/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(x) {
  const varUl = document.createElement('ul');
  let varStr = '';
  for (const friend of x) {
    // console.log(friend);
    varStr += `<li>${friend.firstName} ${friend.lastName}</li>`;
  }

  varUl.insertAdjacentHTML('afterbegin', varStr);

  return varUl;
}
