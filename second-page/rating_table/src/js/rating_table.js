let sortAscending = true;

let rateButton = document.getElementById('rate');


rateButton.addEventListener('click', function() {

  let tableBody = document.querySelector('tbody');


  let placeElements = Array.from(document.getElementsByClassName('r-table__place'));

  placeElements.sort((a, b) => {

    let aValue = parseInt(a.textContent.match(/\d+/)[0]);
    let bValue = parseInt(b.textContent.match(/\d+/)[0]);
    return sortAscending ? aValue - bValue : bValue - aValue;
  });


  for (let i = 0; i < placeElements.length; i++) {

    let row = placeElements[i].closest('tr');

    tableBody.appendChild(row);
  }

  sortAscending = !sortAscending;
});
