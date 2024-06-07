const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector(".close");
const iframe = document.querySelector("#modal-iframe");
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

function openModal(element) {;
  modal.style.display = "block";
  iframe.src = element.getAttribute('href');
}

function closeModal() {
  modal.style.display = 'none';
  iframe.src = ''; 
}

closeModalButton.addEventListener("click", closeModal);

let cards = document.querySelectorAll("a");
cards.forEach(function(card) {
  card.addEventListener("click", function(event) {
    event.preventDefault();
    openModal(this);
  });
});

function openPopup(content) {
  popupContent.innerHTML = '';
  popupContent.appendChild(content);
  popup.classList.add('popup_is_active');
  popup.addEventListener('click', handleOverlayClosePopup);
  document.addEventListener('keydown', handleEscClosePopup);
}

function closePopup(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('close')) {
    popup.classList.remove('popup_is_active');
    popupContent.innerHTML = '';
    popup.removeEventListener('click', handleOverlayClosePopup);
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

function handleEscClosePopup(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_is_active'));
  }
}

popup.addEventListener('click', closePopup);

function handleClick(elementSelector) {
  let elements = document.querySelectorAll(elementSelector);

  elements.forEach(function(element) {
    element.addEventListener('click', function(evt) {
      evt.preventDefault(); 
      let content = element.cloneNode(true);

      
      let brTags = content.querySelectorAll('br');
      brTags.forEach(function(br) {
        br.parentNode.removeChild(br);
      });

      let clonedLinks = content.querySelectorAll('a');
      clonedLinks.forEach(function(link) {
        link.addEventListener('click', function(evt) {
          if(!this.classList.contains('link-unvailable')){
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


