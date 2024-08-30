const moscowBtn = document.getElementById('moscow-btn');
const branchBtn = document.getElementById('branch-btn')
const popup = document.querySelector('.popup')
const buttonClosePopup = document.querySelector('.popup__close')
const tabsButtons = document.querySelectorAll('.bi-tabs-button');
const tabs = document.querySelectorAll('.bi-tab');


function openPopup(popupElement) {
    popupElement.classList.add('popup_is_active');
    popupElement.addEventListener('click', handleOverlayClosePopup);
    document.addEventListener('keydown', handleEscClosePopup);
  }
  
function closePopup(popupElement) {
popupElement.classList.remove('popup_is_active');
popupElement.removeEventListener('click', handleOverlayClosePopup);
document.removeEventListener('keydown', handleEscClosePopup);
}

function handleOverlayClosePopup(evt) {
if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
}
}

function handleEscClosePopup(evt) {
if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_is_active'));
}
}
function switchTab(index) {
    tabsButtons.forEach(btn => btn.classList.remove('bi-tabs-button_active'));
    tabs.forEach(tab => tab.classList.remove('bi-tab_active'));

    tabsButtons[index].classList.add('bi-tabs-button_active');
    tabs[index].classList.add('bi-tab_active');
}


if (moscowBtn) {
    moscowBtn.addEventListener('click', () => {
        openPopup(popup);
        switchTab(0); 
    });
}

if (branchBtn) {
    branchBtn.addEventListener('click', () => {
        openPopup(popup);
        switchTab(1); 
    });
}

tabsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        switchTab(index);
    });
});


moscowBtn.style.cursor="pointer"
branchBtn.style.cursor="pointer"