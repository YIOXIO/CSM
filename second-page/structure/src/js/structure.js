// const tabs = document.querySelectorAll('.students-enrollment__tab')
// const tabcontent = document.querySelectorAll('.students-enrollment__tabcontent')

// tabs.forEach((tab, index) => {
//  tab.addEventListener('click', () => {
//   tabcontent.forEach(item => item.classList.remove('show'))
//   tabcontent.forEach(item => item.classList.add('hide'))
//   tabcontent[index].classList.add('show')

//   tabs.forEach(item => {
//    item.querySelector('svg').querySelector('path').setAttribute('stroke', 'rgba(33, 122, 255, 0.2)')
//    item.classList.remove('students-enrollment__tab_active')
//   })

//   tab.querySelector('svg').querySelector('path').setAttribute('stroke', '#217AFF')
//   tab.classList.add('students-enrollment__tab_active')
//  })
// })





const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close");
const iframe = document.querySelector("#modal-iframe");
var links = [
  "https://xn--p1ag3a.xn--p1ai/structure/hs",
  "https://xn--p1ag3a.xn--p1ai/users",
  "https://xn--p1ag3a.xn--p1ai/structure",
];

function openModal(index) {
  modal.style.display = "block";
  iframe.src = links[index];
}

closeModal.addEventListener('click', () => {
  modal.style.display = "none";
  iframe.src = ''
})

var cards = document.querySelectorAll(".s-card");
cards.forEach(function(card) {
  card.addEventListener("click", function() {
    var index = this.getAttribute("data-link");
    openModal(index);
  });
});


