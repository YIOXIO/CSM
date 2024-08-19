let sortAscending = true;

document.addEventListener('DOMContentLoaded', function() {
  sortTableByRate();


});

const rateButton = document.getElementById('rate');
rateButton.addEventListener('click', function() {
  sortTableByRate();


});

const numberButton = document.getElementById('number');
numberButton.addEventListener('click', function() {
  sortTableByNumber();

});

function sortTableByNumber() {
  let tableBody = document.querySelector('tbody');
  let rateElements = Array.from(document.getElementsByClassName('r-table__position'));

  rateElements.sort((a, b) => {
    let aValue = getNumericValue(a.textContent);
    let bValue = getNumericValue(b.textContent);
    return sortAscending ? aValue - bValue : bValue - aValue;
  });

  for (let i = 0; i < rateElements.length; i++) {
    let row = rateElements[i].closest('tr');
    tableBody.appendChild(row);
  }

  sortAscending = !sortAscending;
}

function sortTableByRate() {
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
}

function getNumericValue(value) {
  if (value.includes('Срез по бизнес-образованию: место 2')) {
    return 8;
  } else if (value.includes('C+')) {
    return 6;
  } else if (value.includes('-')) {
    let [start, end] = value.split('-').map(Number);
    return end;
  } else {
    return parseInt(value.match(/\d+/)[0]);
  }
}