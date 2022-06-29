const tabs = document.querySelectorAll('.students-enrollment__tab')
const tabcontent = document.querySelectorAll('.students-enrollment__tabcontent')

tabs.forEach((tab, index) => {
 tab.addEventListener('click', () => {
  tabcontent.forEach(item => item.classList.remove('show'))
  tabcontent.forEach(item => item.classList.add('hide'))
  tabcontent[index].classList.add('show')

  tabs.forEach(item => {
   item.querySelector('svg').querySelector('path').setAttribute('stroke', 'rgba(33, 122, 255, 0.2)')
   item.classList.remove('students-enrollment__tab_active')
  })

  tab.querySelector('svg').querySelector('path').setAttribute('stroke', '#217AFF')
  tab.classList.add('students-enrollment__tab_active')
 })
})