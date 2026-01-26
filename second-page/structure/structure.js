
// Основные элементы DOM
const elements = {
  modal: document.querySelector("#modal"),
  iframe: document.querySelector("#modal-iframe"),
  popup: document.querySelector('.popup'),
  popupContent: document.querySelector('.popup__content'),
  structure: document.querySelector(".structure__layout_edit"),
  editButton: document.getElementById('edit-btn'),
  saveButton: document.getElementById('save-btn'),
  closeButton: document.querySelector('.close-btn'),
  cancelBtn: document.querySelector('.structure__btn_cancel'),
  returnBtn: document.querySelector('.structure__btn_return'),
  splitBtn: document.querySelector('.structure__btn_split'),
  rec: document.querySelector('.Rec'),
};





elements.editButton?.addEventListener('click', () => elements.rec?.classList.add('Rec_is-active'));
// elements.closeButton?.addEventListener('click', alert(234234));






function openModal(element) {
  ;

  elements.modal.classList.add('modal_is_active')
  elements.iframe.src = element.getAttribute('href');
}

function closeModal() {
  elements.iframe.src = '';
  elements.modal.classList.remove('modal_is_active')
}
elements.modal.addEventListener('click', closeModal)


let cards = document.querySelectorAll("a");
cards.forEach(function (card) {
  card.addEventListener("click", function (event) {
    event.preventDefault();
    openModal(this);
  });
});

function openPopup(content) {
  elements.popupContent.innerHTML = '';
  elements.popupContent.appendChild(content);
  elements.popup.classList.add('popup_is_active');
  elements.popup.addEventListener('click', handleOverlayClosePopup);
  document.addEventListener('keydown', handleEscClosePopup);
}

function closePopup(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('close')) {
    elements.popup.classList.remove('popup_is_active');
    elements.popupContent.innerHTML = '';
    elements.popup.removeEventListener('click', handleOverlayClosePopup);
    document.removeEventListener('keydown', handleEscClosePopup);
  }
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


elements.popup.addEventListener('click', closePopup);

function handleClick(elementSelector) {
  let elements = document.querySelectorAll(elementSelector);

  elements.forEach(function (element) {
    element.addEventListener('click', function (evt) {
      evt.preventDefault();
      let content = element.cloneNode(true);


      let brTags = content.querySelectorAll('br');
      brTags.forEach(function (br) {
        br.parentNode.removeChild(br);
      });

      let clonedLinks = content.querySelectorAll('a');
      clonedLinks.forEach(function (link) {
        link.addEventListener('click', function (evt) {
          if (!this.classList.contains('link-unvailable')) {
            evt.preventDefault();
            openModal(link);
          }

        });
      });

      openPopup(content);
    });
  });
}

handleClick('.scale-on-click');





