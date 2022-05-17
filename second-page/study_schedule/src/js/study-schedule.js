const tabs = document.querySelectorAll('.study-schedule__tab')
const tabcontent = document.querySelectorAll('.study-schedule__tabcontent')

tabs.forEach((tab, index) => {
 tab.addEventListener('click', () => {
  tabcontent.forEach(item => item.classList.remove('show'))
  tabcontent.forEach(item => item.classList.add('hide'))
  tabcontent[index].classList.add('show')

  tabs.forEach(item => {
   item.querySelector('svg').querySelector('path').setAttribute('stroke', 'rgba(33, 122, 255, 0.2)')
   item.classList.remove('study-schedule__tab_active')
  })

  tab.querySelector('svg').querySelector('path').setAttribute('stroke', '#217AFF')
  tab.classList.add('study-schedule__tab_active')
  
 })
})