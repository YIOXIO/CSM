const ERROR_MSG = '<p style="color:var(--accent);text-align:center;">Ошибка загрузки данных</p>';
const NO_DATA_MSG = '<p>Нет данных</p>';

fetch('../data/data.json')
    .then(function (response) {
        if (!response.ok) throw new Error('Network error');
        return response.json();
    })
    .then(function (data) {
        renderPage(data);
        setupNavigationHandlers();
    })
    .catch(function (e) {
        console.error('Fetch error:', e);
        var container = document.getElementById('main-table');
        if (container) container.innerHTML = ERROR_MSG;
    });

function renderPage(data) {
    var container = document.getElementById('main-table');
    if (!container) return;

    var sections = data && Array.isArray(data.sections) ? data.sections : null;
    if (!sections || !sections.length) {
        container.innerHTML = NO_DATA_MSG;
        return;
    }

    var mainTitle = document.querySelector('.main-title');
    var subtitle = document.querySelector('.subtitle');

    if (mainTitle) {
        mainTitle.textContent = (data.title || 'НАГРАДЫ').toUpperCase();
    }
    if (subtitle) {
        subtitle.textContent = data.subtitle || '';
    }

    renderNavigation(sections);

    var columns = data && Array.isArray(data.columns) ? data.columns : [];
    var headers = columns.length ? columns : [
        '',
        'Фамилия, Имя Отчество, должность, подразделение',
        'Стаж в РЭУ',
        'Какие награды имеются (точная дата)',
        'Решение Ученого совета (протокол №___ от ___ 2026 г.)',
        'Исходящее письмо',
        'Где находится на рассмотрении',
        'Указ, приказ № _____ от __________'
    ];

    var colgroup = '<colgroup>' +
        '<col style="width:28%">' +
        '<col style="width:19%">' +
        '<col style="width:8%">' +
        '<col style="width:12%">' +
        '<col style="width:13%">' +
        '<col style="width:8%">' +
        '<col style="width:6%">' +
        '<col style="width:6%">' +
        '</colgroup>';

    var headHtml = '<thead><tr>';
    headers.forEach(function (h) {
        headHtml += '<th>' + escapeHTML(h || '') + '</th>';
    });
    headHtml += '</tr></thead>';

    var html = '';
    sections.forEach(function (section) {
        var sectionId = getSectionId(section.id || section.title);
        html += '<section class="award-section" id="' + sectionId + '">';
        html += '<div class="section-title">' + escapeHTML(section.title || '') + '</div>';
        html += '<table>' + colgroup + headHtml + '<tbody>';

        (section.rows || []).forEach(function (row) {
            var cells = Array.isArray(row.cells) ? row.cells.slice(0, headers.length) : [];
            while (cells.length < headers.length) cells.push('');

            if (row.fullRow) {
                html += '<tr class="full-row">' +
                    '<td class="name-cell full-row-cell" colspan="' + headers.length + '">' +
                    renderOrganizationCell(row, cells[0]) +
                    '</td></tr>';
                return;
            }

            html += '<tr>';
            cells.forEach(function (cellValue, idx) {
                if (idx === 0) {
                    html += '<td class="name-cell">' + renderOrganizationCell(row, cellValue) + '</td>';
                } else {
                    html += '<td class="name-cell">' + escapeHTML(cellValue || '') + '</td>';
                }
            });
            html += '</tr>';
        });

        html += '</tbody></table></section>';
    });

    container.innerHTML = html;
}

function renderOrganizationCell(row, firstCellValue) {
    var title = firstCellValue || '-';
    return escapeHTML(title);
}

function renderNavigation(sections) {
    var navList = document.getElementById('nav-list');
    if (!navList) return;

    var html = '';
    sections.forEach(function (section, index) {
        var sectionId = getSectionId(section.id || section.title);
        html += '<li class="nav-item">' +
            '<a href="#" class="nav-link' + (index === 0 ? ' active' : '') + '" data-target="' + sectionId + '">' +
            escapeHTML(section.navTitle || section.title || '') +
            '</a></li>';
    });

    navList.innerHTML = html;
}

function setupNavigationHandlers() {
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var sectionId = this.dataset.target;
            var section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            document.querySelectorAll('.nav-link').forEach(function (el) {
                el.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

function getSectionId(value) {
    return 'section-' + String(value || '')
        .toLowerCase()
        .replace(/[^a-zа-я0-9]+/gi, '-')
        .replace(/^-+|-+$/g, '');
}

function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
