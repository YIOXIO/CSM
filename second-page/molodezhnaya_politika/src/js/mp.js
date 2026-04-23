const scholar = document.getElementById('scholar');
const support = document.getElementById('support');

// Modal setup
const modal = document.createElement('div');
modal.id = 'mp-modal';
modal.style.cssText = [
    'display:none',
    'position:fixed',
    'top:0',
    'left:0',
    'width:100%',
    'height:100%',
    'background:rgba(17, 32, 84, 1)',
    'z-index:9999',
    'cursor:pointer',
    'align-items:center',
    'justify-content:center',
    'opacity:0',
    'transition:opacity 0.35s ease',
].join(';');

const modalImg = document.createElement('img');
modalImg.style.cssText = [
    'max-width:100%',
    'max-height:100%',
    'object-fit:contain',
    'pointer-events:none',
    'transform:scale(0.95)',
    'transition:transform 0.35s ease',
].join(';');
modal.appendChild(modalImg);
document.body.appendChild(modal);

function openModal(src) {
    modalImg.src = src;
    modal.style.display = 'flex';
    // Force reflow so transition plays
    modal.offsetHeight;
    modal.style.opacity = '1';
    modalImg.style.transform = 'scale(1)';
}

function closeModal() {
    modal.style.opacity = '0';
    modalImg.style.transform = 'scale(0.95)';
    setTimeout(() => {
        modal.style.display = 'none';
        modalImg.src = '';
    }, 350);
}

modal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

support.addEventListener('click', () => {
    openModal('assets/page/support.svg');
});

scholar.addEventListener('click', () => {
    openModal('assets/page/scholar.svg');
});