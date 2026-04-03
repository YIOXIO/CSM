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

    var defaultColumns = data && Array.isArray(data.columns) ? data.columns : [
        '№',
        'ФИО',
        'Награда',
        'В Департамент образования и науки г. Москвы',
        'Поддержка Минобрнауки',
        'Мэрия',
        'ЦФО',
        'Минобрнауки РФ',
        '',
        ''
    ];

    var html = '';
    sections.forEach(function (section) {
        var sectionId = getSectionId(section.id || section.title);
        var headers = Array.isArray(section.columns) && section.columns.length ? section.columns : defaultColumns;
        var colCount = headers.length;

        var colWidths = Array.isArray(section.colWidths) ? section.colWidths : [];
        var colgroup = '<colgroup>';
        for (var ci = 0; ci < colCount; ci++) {
            colgroup += '<col' + (colWidths[ci] ? ' style="width:' + colWidths[ci] + '"' : '') + '>';
        }
        colgroup += '</colgroup>';

        var headHtml = '<thead><tr>';
        headers.forEach(function (h) {
            headHtml += '<th>' + escapeHTML(h || '') + '</th>';
        });
        headHtml += '</tr></thead>';

        html += '<section class="award-section" id="' + sectionId + '">';
        html += '<div class="section-title">' + escapeHTML(section.title || '') + '</div>';
        html += '<table>' + colgroup + headHtml + '<tbody>';

        (section.rows || []).forEach(function (row) {
            var cells = Array.isArray(row.cells) ? row.cells.slice(0, colCount) : [];
            while (cells.length < colCount) cells.push('');

            if (row.fullRow) {
                html += '<tr class="full-row">' +
                    '<td class="name-cell full-row-cell" colspan="' + colCount + '">' +
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
    document.dispatchEvent(new CustomEvent('awards:rendered'));
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
