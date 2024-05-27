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

var modal = document.getElementById("modal");
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var span = document.getElementsByClassName("close")[0];
var iframe = document.getElementById("modal-iframe");

btn1.onclick = function() {
  modal.style.display = "block";
  iframe.src = "https://xn--p1ag3a.xn--p1ai/structure/hs/vyisshaya-injenernaya-shkola-novyie-materialyi-i-tehnologii";
}

btn2.onclick = function() {
  modal.style.display = "block";
  iframe.src = "https://www.example2.com";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
