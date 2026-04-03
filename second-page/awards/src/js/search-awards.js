; (function () {
    var state = {
        entries: [],
        byLetter: {},
        activeLetter: '',
        activeRow: null,
        highlightTimer: null,
        panelVisible: false,
        searchTriggerButton: null,
        overlayNode: null,
        escapeBound: false
    };

    function normalizeText(value) {
        return String(value || '').replace(/\s+/g, ' ').trim();
    }

    function getFirstLetter(value) {
        var match = normalizeText(value).match(/[А-ЯЁA-Z]/i);
        if (!match) return '';
        return match[0].toUpperCase();
    }

    function getFioColumnIndex(table) {
        var headers = Array.prototype.slice.call(table.querySelectorAll('thead th'));
        var fioIndex = -1;

        headers.forEach(function (th, index) {
            var text = normalizeText(th.textContent).toLowerCase();
            if (fioIndex === -1 && text.indexOf('фио') !== -1) {
                fioIndex = index;
            }
        });

        if (fioIndex === -1) {
            fioIndex = headers.length > 1 ? 1 : 0;
        }

        return fioIndex;
    }

    function collectEntries() {
        state.entries = [];
        state.byLetter = {};

        var tables = document.querySelectorAll('.award-section table');
        tables.forEach(function (table) {
            var fioColIndex = getFioColumnIndex(table);
            var section = table.closest('.award-section');
            var sectionTitle = section ? normalizeText((section.querySelector('.section-title') || {}).textContent) : '';

            table.querySelectorAll('tbody tr').forEach(function (row) {
                if (row.classList.contains('full-row')) return;

                var cells = row.querySelectorAll('td');
                var fioCell = cells[fioColIndex];
                if (!fioCell) return;

                var fio = normalizeText(fioCell.textContent);
                var letter = getFirstLetter(fio);
                if (!fio || !letter) return;

                var entry = {
                    fio: fio,
                    letter: letter,
                    row: row,
                    sectionTitle: sectionTitle
                };

                state.entries.push(entry);
                if (!state.byLetter[letter]) state.byLetter[letter] = [];
                state.byLetter[letter].push(entry);
            });
        });

        Object.keys(state.byLetter).forEach(function (letter) {
            state.byLetter[letter].sort(function (a, b) {
                return a.fio.localeCompare(b.fio, 'ru');
            });
        });
    }

    function ensureSearchPanel() {
        var panel = document.querySelector('.awards-search-panel');
        if (panel) return panel;

        panel = document.createElement('div');
        panel.className = 'awards-search-panel';
        panel.innerHTML =
            '<div class="awards-search-panel__head">' +
            '<span class="awards-search-panel__title">Поиск по ФИО</span>' +
            '<button type="button" class="awards-search-panel__close" aria-label="Закрыть">×</button>' +
            '</div>' +
            '<div class="awards-search-panel__letters"></div>' +
            '<div class="awards-search-panel__names"></div>';

        document.body.appendChild(panel);

        panel.querySelector('.awards-search-panel__close').addEventListener('click', function () {
            closePanel();
        });

        return panel;
    }

    function ensureOverlay() {
        var overlay = document.querySelector('.awards-search-overlay');
        if (overlay) return overlay;

        overlay = document.createElement('div');
        overlay.className = 'awards-search-overlay';
        overlay.addEventListener('click', function () {
            closePanel();
        });

        document.body.appendChild(overlay);
        return overlay;
    }

    function openPanel() {
        var panel = ensureSearchPanel();
        if (!panel) return;

        state.overlayNode = ensureOverlay();

        collectEntries();
        state.activeLetter = '';

        panel.classList.add('is-visible');
        if (state.overlayNode) {
            state.overlayNode.classList.add('is-visible');
        }
        state.panelVisible = true;
        renderLetters();
        renderNames('');
    }

    function closePanel() {
        var panel = ensureSearchPanel();
        if (!panel) return;

        panel.classList.remove('is-visible');
        if (state.overlayNode) {
            state.overlayNode.classList.remove('is-visible');
        }
        state.panelVisible = false;
        state.activeLetter = '';

        if (state.searchTriggerButton) {
            state.searchTriggerButton.classList.remove('is-active');
        }
    }

    function ensureSearchTriggerButton() {
        var aside = document.querySelector('.aside-bar');
        if (!aside) return null;

        var button = aside.querySelector('.awards-search-trigger');
        if (button) return button;

        button = document.createElement('button');
        button.type = 'button';
        button.className = 'awards-search-trigger';
        button.textContent = 'Поиск';

        var navTitle = aside.querySelector('.nav-title');
        if (navTitle && navTitle.parentNode) {
            navTitle.parentNode.insertBefore(button, navTitle.nextSibling);
        } else {
            aside.insertBefore(button, aside.firstChild);
        }

        button.addEventListener('click', function () {
            collectEntries();

            if (state.panelVisible) {
                closePanel();
                return;
            }

            state.searchTriggerButton = button;
            button.classList.add('is-active');
            openPanel();
        });

        return button;
    }

    function highlightRow(row) {
        if (!row) return;

        if (state.activeRow) {
            state.activeRow.classList.remove('awards-row-highlight');
        }

        row.classList.add('awards-row-highlight');
        state.activeRow = row;

        if (state.highlightTimer) {
            window.clearTimeout(state.highlightTimer);
        }

        state.highlightTimer = window.setTimeout(function () {
            if (state.activeRow) state.activeRow.classList.remove('awards-row-highlight');
            state.activeRow = null;
        }, 5000);
    }

    function renderLetters() {
        var panel = ensureSearchPanel();
        if (!panel) return;

        var lettersWrap = panel.querySelector('.awards-search-panel__letters');
        if (!lettersWrap) return;

        var letters = Object.keys(state.byLetter).sort(function (a, b) {
            return a.localeCompare(b, 'ru');
        });

        lettersWrap.innerHTML = '';
        letters.forEach(function (letter) {
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'awards-search-panel__letter';
            button.textContent = letter;

            if (state.activeLetter === letter) {
                button.classList.add('is-active');
            }

            button.addEventListener('click', function () {
                state.activeLetter = letter;
                setActiveLetterButton(letter);
                renderNames(letter);
            });

            lettersWrap.appendChild(button);
        });

        setActiveLetterButton(state.activeLetter);
    }

    function setActiveLetterButton(letter) {
        var panel = ensureSearchPanel();
        if (!panel) return;

        panel.querySelectorAll('.awards-search-panel__letter').forEach(function (button) {
            var isActive = button.textContent === letter;
            button.classList.toggle('is-active', isActive);
        });
    }

    function renderNames(letter) {
        var panel = ensureSearchPanel();
        if (!panel) return;

        var namesWrap = panel.querySelector('.awards-search-panel__names');
        if (!namesWrap) return;

        if (!Object.keys(state.byLetter).length) {
            namesWrap.innerHTML = '<p class="awards-search-panel__hint">В таблице нет ФИО для поиска</p>';
            return;
        }

        if (!letter) {
            namesWrap.innerHTML = '<p class="awards-search-panel__hint">Выберите букву</p>';
            return;
        }

        var entries = state.byLetter[letter] || [];
        namesWrap.innerHTML = '';

        if (!entries.length) {
            namesWrap.innerHTML = '<p class="awards-search-panel__hint">На эту букву записей нет</p>';
            return;
        }

        var list = document.createElement('div');
        list.className = 'awards-search-panel__name-list';

        entries.forEach(function (entry) {
            var nameButton = document.createElement('button');
            nameButton.type = 'button';
            nameButton.className = 'awards-search-panel__name';
            nameButton.textContent = entry.fio;

            if (entry.sectionTitle) {
                nameButton.title = entry.sectionTitle;
            }

            nameButton.addEventListener('click', function () {
                entry.row.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                highlightRow(entry.row);
                closePanel();
            });

            list.appendChild(nameButton);
        });

        namesWrap.appendChild(list);
    }

    function initSearchModule() {
        var tableRoot = document.getElementById('main-table');
        if (!tableRoot) return;

        ensureSearchTriggerButton();
        collectEntries();
        ensureSearchPanel();
        ensureOverlay();

        if (!state.escapeBound) {
            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape' && state.panelVisible) {
                    closePanel();
                }
            });
            state.escapeBound = true;
        }
    }

    document.addEventListener('awards:rendered', function () {
        initSearchModule();
    });

    document.addEventListener('DOMContentLoaded', function () {
        initSearchModule();
    });
})();