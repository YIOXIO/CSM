const ERROR_MSG = '<p style="color:var(--accent);text-align:center;">Ошибка загрузки данных</p>';
const NO_DATA_MSG = '<p>Нет данных</p>';

const SECTIONS = {
    'main': 'Основные программы',
    'spo': 'СПО',
    'dop_angl': 'Обучение на английском'
};

const MAIN_SUBSECTIONS = {
    'I. ОСНОВНЫЕ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ (БАКАЛАВРИАТ)': 'Бакалавриат',
    'II. ОСНОВНЫЕ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ (СПЕЦИАЛИТЕТ)': 'Специалитет',
    'III. ОСНОВНЫЕ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ (МАГИСТРАТУРА)': 'Магистратура',
    'IV. ПОДГОТОВКА КАДРОВ ВЫСШЕЙ КВАЛИФИКАЦИИ И НАУЧНЫХ КАДРОВ (АСПИРАНТУРА)': 'Аспирантура'
};



fetch('../data/data.json')
    .then(function (response) {
        if (!response.ok) throw new Error('Network error');
        return response.json();
    })
    .then(function (data) {
        renderMainTable(data);
        renderSpoTable(data);
        renderDopAnglTable(data);
    })
    .catch(function (e) {
        console.error('Fetch error:', e);
        document.querySelectorAll('.tab-content').forEach(function (tab) {
            tab.innerHTML = ERROR_MSG;
        });
    });

function renderMainTable(data) {
    let container = document.getElementById('main-table');
    if (!container) return;

    let mainData = data && data.main;
    if (!mainData) {
        container.innerHTML = NO_DATA_MSG;
        return;
    }

    // Update main title and subtitle
    let mainTitle = document.querySelector('.main-title');
    let mainTitleItalic = document.querySelector('.main-title_italic');
    let subtitle = document.querySelector('.subtitle');

    if (mainTitle) {
        mainTitle.textContent = 'СТОИМОСТЬ';
    }
    if (mainTitleItalic) {
        mainTitleItalic.textContent = 'обучения по программам бакалавриата, специалитета, магистратуры, аспирантуры';
    }
    if (subtitle) {
        subtitle.textContent = '(для поступающих на первый курс в 2025/26 учебном году)';
    }

    let html = '';
    renderNavigation(data.main);
    Object.keys(mainData).forEach(function (sectionName) {
        let sectionData = mainData[sectionName];
        html += `<div class="section-title" id="section-${escapeHTML(sectionName)}">${escapeHTML(sectionName)}</div>`;

        Object.keys(sectionData).forEach(function (formName) {
            let faculties = sectionData[formName];
            html += '<div class="form-title">' + escapeHTML(formName) + '</div>';
            html += '<table><thead><tr>' +
                '<th class="name-cell"  width="15%">Код <br> НП(С)/НС</th>' +
                '<th class="name-cell" width="35%">Направление обучения / <br> специальность</th>' +
                '<th class="name-cell" width="35%">Профиль/специализация</th>' +
                '<th class="name-cell" width="15%">Cтоимость обучения<br>в год на одного обучающегося, руб.</th>' +
                '</tr></thead><tbody>';

            faculties.forEach(function (faculty) {
                html += '<tr><td colspan="4" class="faculty-title">' + escapeHTML(faculty.faculty) + '</td></tr>';

                if (faculty.directions) {
                    faculty.directions.forEach(function (direction) {
                        let rowCount = direction.profiles ? direction.profiles.length : 0;

                        if (direction.profiles) {
                            direction.profiles.forEach(function (profile, idx) {
                                html += '<tr>' +
                                    (idx === 0
                                        ? '<td class="code-cell" rowspan="' + rowCount + '">' + escapeHTML(direction.code) + '</td>' +
                                        '<td class="name-cell" rowspan=" ' + rowCount + '">' + escapeHTML(direction.name) + '</td>'
                                        : ''
                                    ) +
                                    '<td class="name-cell">' + (profile.name ? escapeHTML(profile.name) : '-') + '</td>' +
                                    '<td class="cost-cell">' + formatCost(profile.cost) + '</td>' +
                                    '</tr>';
                            });
                        }
                    });
                }
            });

            html += '</tbody></table>';
        });
    });

    container.innerHTML = html;
}

function renderSpoTable(data) {
    let container = document.getElementById('spo-table');
    if (!container) return;

    let spoData = data && data["СПО"];
    if (!spoData) {
        container.innerHTML = NO_DATA_MSG;
        return;
    }

    let html = '<div class="section-title">I. ОСНОВНЫЕ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ СРЕДНЕГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ</div>';
    html += '<table><thead><tr>' +
        '<th class="name-cell width="40%">Наименование структурного подразделения среднего профессионального образования</th>' +
        '<th class="name-cell width="15%">Код специальности</th>' +
        '<th class="name-cell width="30%">Наименование специальности</th>' +
        '<th class="name-cell width="15%">Стоимость обучения в год на одного обучающегося, руб.</th>' +
        '</tr></thead><tbody>';

    Object.keys(spoData).forEach(function (formName) {
        let departments = spoData[formName];
        html += '<tr><td colspan="4" class="form-title">' + escapeHTML(formName) + '</td></tr>';

        if (departments) {
            departments.forEach(function (department) {
                let rowCount = department.specialties ? department.specialties.length : 0;

                if (department.specialties) {
                    department.specialties.forEach(function (specialty, idx) {
                        html += '<tr>' +
                            (idx === 0
                                ? '<td class="name-cell" rowspan="' + rowCount + '">' + escapeHTML(department.department) + '</td>'
                                : ''
                            ) +
                            '<td class="name-cell">' + escapeHTML(specialty.code) + '</td>' +
                            '<td class="name-cell">' + escapeHTML(specialty.name) + '</td>' +
                            '<td class="cost-cell">' + formatCost(specialty.cost) + '</td>' +
                            '</tr>';
                    });
                }
            });
        }
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

function renderDopAnglTable(data) {
    let container = document.getElementById('dop-angl-table');
    if (!container) return;

    let dopData = data && data["ДОП_англ"];
    if (!dopData) {
        container.innerHTML = NO_DATA_MSG;
        return;
    }

    // Update main title and subtitle
    let mainTitle = document.querySelector('.main-title');
    let mainTitleItalic = document.querySelector('.main-title_italic');
    let subtitle = document.querySelector('.subtitle');

    if (mainTitle) {
        mainTitle.textContent = 'СТОИМОСТЬ';
    }
    if (mainTitleItalic) {
        mainTitleItalic.textContent = 'дополнительных образовательных услуг по основным образовательным программам бакалавриата и магистратуры, реализация которых осуществляется на английском языке';
    }
    if (subtitle) {
        subtitle.textContent = '(для поступающих на первый курс на места за счет федерального бюджета в 2024/25 учебном году)';
    }

    let html = '<div class="faculty-title">Оплата обучения на английском языке для лиц, обучающихся на местах за счет средств федерального бюджета</div>';
    html += '<table><thead><tr>' +
        '<th class="name-cell width="40%">Наименование структурного подразделения</th>' +
        '<th class="name-cell width="45%">Наименование направления (уровень)</th>' +
        '<th class="name-cell width="15%">Стоимость услуги в год на одного обучающегося, руб.</th>' +
        '</tr></thead><tbody>';

    if (Array.isArray(dopData)) {
        let currentFaculty = '';
        let rowCount = 0;
        let facultyRows = [];

        // Group items by faculty to calculate rowspan
        dopData.forEach(function (item) {
            if (item.faculty !== currentFaculty) {
                if (currentFaculty !== '') {
                    facultyRows.push({ faculty: currentFaculty, rows: rowCount });
                }
                currentFaculty = item.faculty;
                rowCount = 1;
            } else {
                rowCount++;
            }
        });
        facultyRows.push({ faculty: currentFaculty, rows: rowCount });

        // Render rows with rowspan for faculty
        let rowIndex = 0;
        currentFaculty = '';
        dopData.forEach(function (item, idx) {
            if (item.faculty !== currentFaculty) {
                currentFaculty = item.faculty;
                let facultyRow = facultyRows.find(row => row.faculty === currentFaculty);
                html += '<tr>' +
                    '<td class="name-cell" rowspan="' + facultyRow.rows + '">' + escapeHTML(item.faculty) + '</td>' +
                    '<td class="name-cell">' + escapeHTML(item.direction) + '</td>' +
                    '<td class="cost-cell">' + formatCost(item.cost) + '</td>' +
                    '</tr>';
            } else {
                html += '<tr>' +
                    '<td class="name-cell">' + escapeHTML(item.direction) + '</td>' +
                    '<td class="cost-cell">' + formatCost(item.cost) + '</td>' +
                    '</tr>';
            }
        });
    }

    html += '</tbody></table>';
    container.innerHTML = html;
}

function formatCost(cost) {
    if (!cost) return '-';

    // Если есть слеш, разделяем значения и форматируем каждое отдельно
    if (typeof cost === 'string' && cost.includes('/')) {
        return cost.split('/')
            .map(part => {
                const num = parseInt(part.replace(/\D/g, ''));
                return isNaN(num) ? part.trim() : new Intl.NumberFormat('ru-RU').format(num) + ' ₽';
            })
            .join(' / ');
    }

    // Стандартная обработка для одиночных значений
    const num = parseInt(String(cost).replace(/\D/g, ''));
    return isNaN(num) ? '-' : new Intl.NumberFormat('ru-RU').format(num) + ' ₽';
}

function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/'/g, '&nbsp;');
}


function updateTitlesForTab(tabName) {
    let mainTitle = document.querySelector('.main-title');
    let mainTitleItalic = document.querySelector('.main-title_italic');
    let subtitle = document.querySelector('.subtitle');

    if (!mainTitle || !mainTitleItalic || !subtitle) return;

    switch (tabName) {
        case 'main':
            mainTitle.textContent = 'СТОИМОСТЬ';
            mainTitleItalic.textContent = 'обучения по программам бакалавриата, специалитета, магистратуры, аспирантуры';
            subtitle.textContent = '(для поступающих на первый курс в 2025/26 учебном году)';
            break;
        case 'spo':
            mainTitle.textContent = 'СТОИМОСТЬ';
            mainTitleItalic.textContent = 'обучения по программам среднего профессионального образования';
            subtitle.textContent = '(для поступающих на первый курс в 2025/26 учебном году)';
            break;
        case 'dop_angl':
            mainTitle.textContent = 'СТОИМОСТЬ';
            mainTitleItalic.textContent = 'дополнительных образовательных услуг по основным образовательным программам бакалавриата и магистратуры, реализация которых осуществляется на английском языке';
            subtitle.textContent = '(для поступающих на первый курс на места за счет федерального бюджета в 2024/25 учебном году)';
            break;
    }
}


function renderNavigation(mainData) {
    const navList = document.getElementById('nav-list');
    if (!navList) {
        console.error('Element with id "nav-list" not found');
        return;
    }

    let html = '';

    // Основные вкладки
    Object.keys(SECTIONS).forEach(sectionId => {
        html += `
            <li class="nav-item">
                <a href="#" class="nav-link ${sectionId === 'main' ? 'active' : ''}" 
                   data-section="${sectionId}">
                    ${SECTIONS[sectionId]}
                </a>
            </li>
        `;

        // Подразделы только для основных программ
        if (sectionId === 'main') {
            html += `<ul class="sub-nav ${sectionId === 'main' ? 'active' : ''}" id="main-sub-nav">`;

            // Используем MAIN_SUBSECTIONS как источник истины
            Object.keys(MAIN_SUBSECTIONS).forEach(subsection => {
                // Проверяем, есть ли такой раздел в данных
                const hasData = mainData && mainData[subsection];
                html += `
                    <li class="sub-nav-item">
                        <a href="#" class="sub-nav-link" 
                           data-subsection="${subsection}"
                           ${!hasData ? 'style="opacity:0.5;pointer-events:none"' : ''}>
                            ${MAIN_SUBSECTIONS[subsection]}
                            ${!hasData ? ' (нет данных)' : ''}
                        </a>
                    </li>
                `;
            });

            html += `</ul>`;
        }
    });

    navList.innerHTML = html;

    // Обработчики событий
    setupNavigationHandlers();
}

function setupNavigationHandlers() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const section = this.dataset.section;

            // Обновляем активные ссылки
            document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
            this.classList.add('active');

            // Управляем видимостью подразделов
            const subNav = document.getElementById('main-sub-nav');
            if (subNav) {
                subNav.classList.toggle('active', section === 'main');
            }

            openTab(section);
        });
    });

    document.querySelectorAll('.sub-nav-link').forEach(link => {
        if (link.style.pointerEvents !== 'none') {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const subsection = this.dataset.subsection;

                document.querySelectorAll('.sub-nav-link').forEach(el => el.classList.remove('active'));
                this.classList.add('active');

                scrollToSubsection(subsection);
            });
        }
    });
}

// Новая функция для прокрутки к подразделу
function scrollToSubsection(subsection) {
    const sectionElement = document.getElementById(`section-${subsection}`);
    if (sectionElement) {
        sectionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Добавляем подсветку на 2 секунды
        sectionElement.style.transition = 'background-color 0.3s';
        sectionElement.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
        setTimeout(() => {
            sectionElement.style.backgroundColor = '';
        }, 2000);
    }
}




function openTab(tabName) {
    var tabs = document.querySelectorAll('.tab');
    var contents = document.querySelectorAll('.tab-content');

    tabs.forEach(function (tab) {
        var onclickAttr = tab.getAttribute('onclick') || '';
        var isActive = onclickAttr.indexOf("'" + tabName + "'") !== -1 ||
            onclickAttr.indexOf('"' + tabName + '"') !== -1;
        tab.classList.toggle('active', isActive);
    });

    contents.forEach(function (content) {
        content.classList.toggle('active', content.id === tabName);
    });
    updateTitlesForTab(tabName);
    if (tabName !== 'main') {
        const subNav = document.getElementById('main-sub-nav');
        if (subNav) subNav.classList.remove('active');
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}

document.querySelectorAll('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
        openTab(this.dataset.tab);
    });
});

// Добавляем в конец файла
function setupScrollSpy() {
    const sections = document.querySelectorAll('.section-title');
    const navLinks = document.querySelectorAll('.sub-nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id').replace('section-', '');

            // Проверяем, находится ли верхняя часть viewport в пределах секции
            if (window.scrollY >= sectionTop - 200 && window.scrollY <= sectionTop + sectionHeight - 100) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.subsection === current) {
                link.classList.add('active');
            }
        });
    });
}

// Вызываем после загрузки данных


document.addEventListener('DOMContentLoaded', function () {
    const hash = window.location.hash;
    if (hash) {
        const sectionId = hash.replace('#', '');
        const correspondingLink = document.querySelector(`.sub-nav-link[data-subsection="${sectionId}"]`);
        if (correspondingLink) {
            correspondingLink.classList.add('active');
        }
    } else if (document.querySelector('.sub-nav-link')) {
        // Активируем первую ссылку по умолчанию
        document.querySelector('.sub-nav-link').classList.add('active');
    }
});