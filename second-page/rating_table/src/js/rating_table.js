
let sortAscending = true;

let rateButton = document.getElementById('rate');

// Добавляем обработчик события нажатия на кнопку
rateButton.addEventListener('click', function() {
  // Получаем таблицу
  let table = document.querySelector('table');

  // Получаем все элементы с классом r-table__place
  let placeElements = Array.from(document.getElementsByClassName('r-table__place'));

  // Сортируем массив по значению r-table__place
  placeElements.sort((a, b) => {
    // Извлекаем числовое значение из текста элемента
    let aValue = parseInt(a.textContent.match(/\d+/)[0]);
    let bValue = parseInt(b.textContent.match(/\d+/)[0]);
    return sortAscending ? aValue - bValue : bValue - aValue;
  });

  // Перебираем отсортированный массив и перемещаем строки таблицы
  for (let i = 0; i < placeElements.length; i++) {
    // Находим строку, соответствующую элементу массива
    let row = placeElements[i].closest('tr');
    // Перемещаем строку в таблицу
    table.appendChild(row);
  }

  // Переключаем флаг порядка сортировки
  sortAscending = !sortAscending;
});
