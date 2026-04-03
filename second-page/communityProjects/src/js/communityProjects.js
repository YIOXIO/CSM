document.addEventListener('DOMContentLoaded', function () {
    let projectCards = document.querySelectorAll('.project-card');
    let modal = document.getElementById('projectModal');
    let modalFrame = document.getElementById('projectModalFrame');
    let modalTitle = document.getElementById('projectModalTitle');
    // let modalExternal = document.getElementById('projectModalExternal');
    let closeControls = document.querySelectorAll('[data-modal-close]');

    if (!projectCards.length || !modal || !modalFrame || !modalTitle) {
        return;
    }

    function openProject(card) {
        let targetUrl = card.getAttribute('data-url') || '';
        let targetTitle = card.getAttribute('data-title') || '';

        projectCards.forEach(function (item) {
            item.classList.remove('active');
        });

        card.classList.add('active');
        modalTitle.textContent = targetTitle;
        // modalExternal.setAttribute('href', targetUrl);
        modalFrame.setAttribute('src', targetUrl);
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeProjectModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        modalFrame.setAttribute('src', 'about:blank');
        document.body.classList.remove('modal-open');
    }

    projectCards.forEach(function (card) {
        card.addEventListener('click', function () {
            openProject(card);
        });
    });

    closeControls.forEach(function (control) {
        control.addEventListener('click', function () {
            closeProjectModal();
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('is-open')) {
            closeProjectModal();
        }
    });
});
