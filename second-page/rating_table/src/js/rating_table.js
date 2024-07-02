let sortAscending = true;

let rateButton = document.getElementById('rate');

rateButton.addEventListener('click', function() {
  let tableBody = document.querySelector('tbody');
  let placeElements = Array.from(document.getElementsByClassName('r-table__place'));

  placeElements.sort((a, b) => {
    let aValue = getNumericValue(a.textContent);
    let bValue = getNumericValue(b.textContent);
    return sortAscending ? aValue - bValue : bValue - aValue;
  });

  for (let i = 0; i < placeElements.length; i++) {
    let row = placeElements[i].closest('tr');
    tableBody.appendChild(row);
  }

  sortAscending = !sortAscending;
});


function getNumericValue(value) {
  if (value.includes('C+')) {
    return 3;
  } else if (value.includes('-')) {
    let [start, end] = value.split('-').map(Number);
    return  end; 
  } else {
    return parseInt(value.match(/\d+/)[0]);
  }
}

let numberButton = document.getElementById('number');

numberButton.addEventListener('click', function() {
  let tableBody = document.querySelector('tbody');
  let placeElements = Array.from(document.getElementsByClassName('r-table__position'));

  placeElements.sort((a, b) => {
    let aValue = getNumericValue(a.textContent);
    let bValue = getNumericValue(b.textContent);
    return sortAscending ? aValue - bValue : bValue - aValue;
  });

  for (let i = 0; i < placeElements.length; i++) {
    let row = placeElements[i].closest('tr');
    tableBody.appendChild(row);
  }

  sortAscending = !sortAscending;
});