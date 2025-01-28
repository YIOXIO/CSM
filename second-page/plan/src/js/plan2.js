const TitleModule = (() => {
    const setTitle = (title) => {
        document.querySelector('.plan__header-title').textContent = title;
    };

    const setSubtitle = (num) => {
        document.querySelector('.plan__header-subtitle span').textContent = num;
    };

    return {
        setTitle,
        setSubtitle
    };
})();

const ProgressBarModule = (() => {
    const setProgressbar = (id, fact, isIcrease, modifier = 'list') => {
        const colorSettings = {
            icrease: '<stop stop-color="#4CD380"/><stop offset="1" stop-color="#217AFF"/>',
            decline: '<stop offset="0.05" stop-color="#217AFF"/><stop offset="1" stop-color="#FD6A6A"/>',
        };

        return `
            <svg class="plan__progressbar plan__progressbar_${modifier}" viewBox="0 0 1054 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG код прогрессбара -->
            </svg>
        `;
    };

    return {
        setProgressbar
    };
})();

const ChartModule = (() => {
    const createChart = (selector, props, options, mounths) => {
        const labels = setMonthsLine(mounths, props.currentMonth);
        const data = {
            labels: labels,
            datasets: [{
                backgroundColor: '#217AFF',
                borderColor: '#217AFF',
                data: props.annualStatistics
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: options
        };

        const ctx = document.querySelector(`.${selector}`).getContext('2d');
        new Chart(ctx, config);
    };

    const showChart = (elem, id, array, modifier) => {
        const itemData = array.find(i => i.id == id);
        let box = elem.querySelector(`.diagram-box_${modifier}`);
        box.innerHTML = `<canvas class="line-chart-${id}"></canvas>`;
        createChart(`line-chart-${id}`, itemData, diagramOptions, diagramMounths);
    };

    return {
        createChart,
        showChart
    };
})();

const ModalCoreModule = (() => {
    const overlay = document.querySelector('.overlay');
    const modals = document.querySelectorAll('.modal');
    const modalSmall = document.querySelector('.modal_small');
    const modalMedium = document.querySelector('.modal_medium');
    const modalLarge = document.querySelector('.modal_large');

    const closeModals = () => {
        overlay.classList.remove('overlay_show');
        modals.forEach(i => i.classList.remove('modal_show'));
    };

    const switchModals = (currentModal, nextModal, activeClassName) => {
        currentModal.classList.remove(activeClassName);
        nextModal.classList.add(activeClassName);
    };

    const init = () => {
        overlay.addEventListener('click', closeModals);
    };

    return {
        closeModals,
        switchModals,
        init
    };
})();

const ModalPlaceModule = (() => {
    const places = document.querySelector('.modal__place-wrapper');
    const placesData = [
        'Кабинет ректора',
        'Зал ученого совета',
        'Белый зал',
        'Малый зал'
    ];

    const frames = {
        placesFrame: `<svg class="modal__place-item__frame" viewBox="0 0 393 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.46459 23.5026L1.46459 23.0532L1.78612 22.7393L22.7861 2.2374L23.0969 1.93398L23.5313 1.93398L390.53 1.93399L391.597 1.93399L391.597 3.00063L391.598 62.1686L391.598 62.6105L391.285 62.9229L369.952 84.2562L369.64 84.5686L369.198 84.5686L2.53126 84.5686L1.46459 84.5686L1.46459 83.502L1.46459 23.5026Z" fill="#112054" fill-opacity="0.2" stroke="white" stroke-width="2.13333" />
        </svg>`
    };

    const setControlItems = (arr, frame, parentNode, control) => {
        let str = '';
        arr.map(item => {
            str += `<div class="modal__${control}-item" data-${control}="${item}">
                <span>${item}</span>
                ${frame}
            </div>`;
        });
        parentNode.innerHTML = str;
    };

    const setDefaultActiveControlItem = (arr, parentNode, val, control) => {
        arr.find((slot, index) => {
            if (slot === val) {
                parentNode[index].classList.add(`modal__${control}-item_active`);
                parentNode[index].querySelector(`.modal__${control}-item__frame`).classList.add('modal_show');
            }
        });
    };

    const toggleControlItems = (controlItems, frames, item, control, activeFrameClassName = 'modal_show') => {
        let activeClassName = `modal__${control}-item_active`;
        controlItems.forEach(i => i.classList.remove(activeClassName));
        item.classList.add(activeClassName);
        frames.forEach(f => f.classList.remove(activeFrameClassName));
        item.querySelector('svg').classList.add(activeFrameClassName);
    };

    const init = () => {
        setControlItems(placesData, frames.placesFrame, places, 'place');

        const meetingPlaceItems = document.querySelectorAll('.modal__place-item');
        const meetingPlaceItemFrames = document.querySelectorAll('.modal__place-item__frame');

        setDefaultActiveControlItem(placesData, meetingPlaceItems, 'Белый зал', 'place');

        places.addEventListener('click', (evt) => {
            let target = evt.target.closest('div');
            if (!target.classList.contains('modal__place-item')) return;
            toggleControlItems(meetingPlaceItems, meetingPlaceItemFrames, target, 'place');
        });
    };

    return {
        init
    };
})();

const ModalTimeModule = (() => {
    const timetable = document.querySelector('.modal__timetable-wrapper');
    const timeSlotsData = [
        '06:00', '06:10', '06:20', '06:30', '06:40', '06:50',
        '07:00', '07:10', '07:20', '07:30', '07:40', '07:50',
        // ... остальные временные слоты
    ];

    const frames = {
        timetableFrame: `<svg class="modal__timetable-item__frame" viewBox="0 0 113 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.06616 19L1.06616 18.5582L1.37858 18.2458L17.3786 2.24574L17.691 1.93332L18.1328 1.93332L110.132 1.93333L111.198 1.93333L111.198 2.99997L111.199 39L111.199 39.4123L110.922 39.7175L95.9221 56.2194L95.6047 56.5686L95.1328 56.5686L2.13281 56.5686L1.06615 56.5686L1.06615 55.502L1.06616 19Z" fill="#112054" fill-opacity="0.2" stroke="white" stroke-width="2.13333"/>
        </svg>`
    };

    const setControlItems = (arr, frame, parentNode, control) => {
        let str = '';
        arr.map(item => {
            str += `<div class="modal__${control}-item" data-${control}="${item}">
                <span>${item}</span>
                ${frame}
            </div>`;
        });
        parentNode.innerHTML = str;
    };

    const setDefaultActiveControlItem = (arr, parentNode, val, control) => {
        arr.find((slot, index) => {
            if (slot === val) {
                parentNode[index].classList.add(`modal__${control}-item_active`);
                parentNode[index].querySelector(`.modal__${control}-item__frame`).classList.add('modal_show');
            }
        });
    };

    const toggleControlItems = (controlItems, frames, item, control, activeFrameClassName = 'modal_show') => {
        let activeClassName = `modal__${control}-item_active`;
        controlItems.forEach(i => i.classList.remove(activeClassName));
        item.classList.add(activeClassName);
        frames.forEach(f => f.classList.remove(activeFrameClassName));
        item.querySelector('svg').classList.add(activeFrameClassName);
    };

    const init = () => {
        setControlItems(timeSlotsData, frames.timetableFrame, timetable, 'timetable');

        const timeSlots = document.querySelectorAll('.modal__timetable-item');
        const timeSlotsFrames = document.querySelectorAll('.modal__timetable-item__frame');

        setDefaultActiveControlItem(timeSlotsData, timeSlots, '11:20', 'timetable');

        timetable.addEventListener('click', (evt) => {
            let target = evt.target.closest('div');
            if (!target.classList.contains('modal__timetable-item')) return;
            toggleControlItems(timeSlots, timeSlotsFrames, target, 'timetable');
        });
    };

    return {
        init
    };
})();

const ModalCalendarModule = (() => {
    let month, year, date, currentDay;
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const calendarBody = document.querySelector('.modal__calendar-body');
    const arrowBtns = document.querySelectorAll('.modal__calendar-arrow__btn');

    const calendarInit = () => {
        month = new Date().getMonth();
        year = new Date().getFullYear();
        date = new Date();
        currentDay = new Date().getDate();
    };

    const setCalendarDays = () => {
        let str = '';
        days.map(d => {
            str += `<td>${d}</td>`;
        });
        document.querySelector('.modal__calendar-days').innerHTML = str;
    };

    const setCalendarMonths = () => {
        let currentMonth = months[month];
        document.querySelector('.modal__calendar-month').innerHTML = currentMonth;
    };

    const setCalendarYear = () => {
        document.querySelector('.modal__calendar-year').innerHTML = year;
    };

    const calendar = () => {
        let days = [];
        let day;
        let week = 0;

        days[week] = [];
        let dLast = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i <= dLast; i++) {
            if (new Date(year, month, i).getDay() != 1) {
                day = { index: i };

                if (day.index === currentDay) {
                    day.mark = 'today';
                }
                days[week].push(day);
            } else {
                week++;
                days[week] = [];
                day = { index: i };
                days[week].push(day);
            }
            if (day.index === currentDay) {
                day.mark = 'today';
            }
        }
        if (days[0].length > 0) {
            for (let i = days[0].length; i < 7; i++) {
                days[0].unshift('');
            }
        }
        return days;
    };

    const setCalendarBody = () => {
        calendarBody.innerHTML = '';
        calendar().map(week => {
            let tr = '<tr>';
            week.map((day, i) => {
                let mark = day.mark ? 'today' : null;
                tr += `<td class="day-cell ${mark}"> ${day.index ? `<span>${day.index}</span>` : ''}</td>`;
                if (week[i - 1] == week.length) tr += '</tr>';
            });
            calendarBody.innerHTML += tr;
        });
    };

    const updateCalendar = () => {
        setTimeout(() => {
            setCalendarBody();
            setCalendarCellsClick();
        }, 0);
    };

    const changeDay = (day) => {
        date.setDate(day);
        currentDay = date.getDate();
        updateCalendar();
    };

    const increase = () => {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        setCalendarMonths();
        updateCalendar();
    };

    const decrease = () => {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        setCalendarMonths();
        updateCalendar();
    };

    const changeMonth = (btn) => {
        if (btn.classList.contains('increase')) {
            increase();
        } else {
            decrease();
        }
    };

    const setCalendarCellsClick = () => {
        const calendarCells = calendarBody.querySelectorAll('.day-cell span');
        calendarCells.forEach(elem => elem.addEventListener('click', () => {
            changeDay(elem.textContent);
        }));
    };

    const init = () => {
        calendarInit();
        setCalendarDays();
        setCalendarMonths();
        setCalendarYear();
        setCalendarBody();
        setCalendarCellsClick();

        arrowBtns.forEach(btn => btn.addEventListener('click', () => changeMonth(btn)));
    };

    return {
        init
    };
})();

const ModalEventsModule = (() => {
    const modalSmall = document.querySelector('.modal_small');
    const modalMedium = document.querySelector('.modal_medium');
    const modalLarge = document.querySelector('.modal_large');
    const modalSubmit = modalLarge.querySelector('.modal__submit');
    const modalConfirm = document.querySelectorAll('.modal__btn_confirm');
    const modalCancelled = document.querySelectorAll('.modal__btn_cancelled');
    const selectReportBtn = document.querySelector('.modal__select-report');
    const selectMeetingBtn = document.querySelector('.modal__select-meeting');

    let msg = {
        type: 'meeting',
        payload: {}
    };

    const init = () => {
        selectReportBtn.addEventListener('click', () => {
            ModalCoreModule.switchModals(modalMedium, modalLarge, 'modal_show');
        });

        selectMeetingBtn.addEventListener('click', () => {
            msg.type = 'report';
            msg.payload = {};
            ModalCoreModule.switchModals(modalLarge, modalMedium, 'modal_show');
        });

        modalSubmit.addEventListener('click', () => {
            msg.type = 'meeting';
            msg.payload = {};
            ModalCoreModule.switchModals(modalLarge, modalSmall, 'modal_show');
        });

        modalCancelled.forEach(i => {
            i.addEventListener('click', () => ModalCoreModule.closeModals());
        });

        modalConfirm.forEach(i => {
            i.addEventListener('click', () => {
                ModalCoreModule.closeModals();
                console.log(msg);
            });
        });
    };

    return {
        init
    };
})();

const MenuModule = (() => {
    const menuItem = (item) => {
        const { name, color, id, plan, fact, isIcrease } = item;

        return `
            <div class="plan__menu-block" data-id=${id}>
                <svg class="plan__graphiс" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect class="plan__graphiс-row" height="5%"  width="10%" fill="${color}" x="3" y="0.4" />
                    <rect  class="plan__graphiс-right-rect" stroke="${color}" x="10%" y="0"  fill="white"/>
                    <rect  class="plan__graphiс-left-rect" stroke="${color}" x="0" y="0" fill="transparent"/>
                </svg>
                <div class="plan__menu-block__wrap">
                    <div class="plan__menu-block__descr">${name}</div>
                </div>
                <div class="plan__menu-block__info">
                    ${ProgressBarModule.setProgressbar(id, fact, isIcrease, 'menu')}
                    <div class="plan__menu-block__indicators">
                        <div class="plan__menu-block__value">${fact}%</div>
                        <div class="plan__menu-block__current-plan">
                            <span class="plan__menu-block__current-plan-value">${plan}</span>
                            <span class="plan__menu-block__current-plan-descr">тыс.руб.</span>
                        </div>
                    </div>
                    <img class="plan__menu-block__alarm" data-id="${id}" src="../assets/img/plan-icons/alarm.svg">
                </div> 
                <div class="diagram-box_menu"></div>
            </div>
        `;
    };

    const setMenu = (data) => {
        let out = document.querySelector('.plan__tabcontent-block__wrap_menu');
        let menuResult = '';
        data.sort(SortModule.byField('fact')).map(item => {
            menuResult += menuItem(item);
        });
        out.innerHTML = menuResult;
    };

    const setLinesSelection = () => {
        const menuBlocks = document.querySelectorAll('.plan__menu-block');
        menuBlocks.forEach(i => {
            let line = i.children[0].children[0];
            let rect = i.children[0].children[1];
            line.setAttribute('width', '10%');
            rect.setAttribute('x', '10%');
        });
    };

    const setLinesDefault = (data) => {
        const menuBlocks = document.querySelectorAll('.plan__menu-block');
        let array = [];
        data.map(partner => {
            if (partner.items) {
                array.push(partner.items.length);
            } else {
                array.push(0);
            }
        });

        menuBlocks.forEach((i, index) => {
            let line = i.children[0].children[0];
            let rect = i.children[0].children[1];
            let value = array[index] + 10;
            value = value > 10 ? value : 10;
            value = value > 90 ? value = 90 : value;
            line.setAttribute('width', `${value}%`);
            rect.setAttribute('x', `${value}%`);
        });
    };

    const init = (data) => {
        setMenu(data);
        setLinesDefault(data);

        const menuBlocks = document.querySelectorAll('.plan__menu-block');
        const menuDiagramBoxes = document.querySelectorAll('.diagram-box_menu');

        menuBlocks.forEach(elem => {
            elem.addEventListener('click', function (e) {
                let id = +elem.getAttribute('data-id');

                if (e.target.className == 'plan__menu-block__alarm') {
                    ModalModule.openModal(id, data);
                } else {
                    setLinesSelection();
                    let line = this.children[0].children[0];
                    let rect = this.children[0].children[1];
                    let title = this.children[1].children[0].textContent;
                    line.setAttribute('width', '100%');
                    rect.setAttribute('x', '100%');
                    TitleModule.setTitle(title);
                    ContentModule.setContent(SortModule.getSortData(data, id));
                    menuBlocks.forEach(b => b.classList.remove('plan__menu-block_opened'));
                    menuDiagramBoxes.forEach(b => b.innerHTML = '');
                    elem.classList.add('plan__menu-block_opened');
                    ChartModule.showChart(elem, id, data, 'menu');
                }
            });
        });

        document.querySelector('.header__link_get-all-plan').addEventListener('click', () => {
            ContentModule.setContent(SortModule.getSortData(data));
            TitleModule.setTitle('План выполнения поступлений денежных средств по НИР');
            setLinesDefault(data);
            menuBlocks.forEach(b => b.classList.remove('plan__menu-block_opened'));
            menuDiagramBoxes.forEach(b => b.innerHTML = '');
        });
    };

    return {
        init
    };
})();

const SortModule = (() => {
    let sortData = [];

    const search = (array) => {
        array.items.map(item => {
            item.color = array.color;
            sortData.push(item);
        });
    };

    const byField = (field) => {
        return (a, b) => a[field] < b[field] ? 1 : -1;
    };

    const getSortData = (data, id) => {
        sortData = [];
        if (id !== undefined) {
            data.find(partner => {
                if (partner.items && partner.id == id) {
                    search(partner);
                }
            });
        } else {
            data.map(partner => {
                if (partner.items) {
                    search(partner);
                }
            });
        }
        TitleModule.setSubtitle(sortData.length);
        return sortData.sort(byField('fact'));
    };

    return {
        byField,
        getSortData
    };
})();

const PartnerModule = (() => {
    class Partner {
        constructor(array, modifier) {
            this.array = array;
            this.className = 'plan__tabcontent-block__wrap';
            this.modifier = modifier;
            this.parent = document.querySelector(`.plan__tabcontent-block_${this.modifier}`);
            this.count = this.array.length;
        }

        bg(index) {
            let bgOffsetModifier = '';
            if (index > 0 && index < 3) {
                bgOffsetModifier = 'middle';
            }

            return `
                <svg class="plan__tabcontent-block__bg plan__tabcontent-block__bg_${bgOffsetModifier} hide" viewBox="0 0 1269 675" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG код фона -->
                </svg>
            `;
        }

        divider() {
            return `
                <svg class="plan__tabcontent-block__divider" viewBox="0 0 800 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG код разделителя -->
                </svg>
            `;
        }

        createBlockItem(item, index) {
            return `
                <div class="plan__tabcontent-block__item" data-id="${item.id}">
                    ${index === 3 ? '<div class="diagram-box_list"></div>' : ''} 
                    ${this.bg(index)}
                    <div class="plan__tabcontent-block__info">
                        <svg class="plan__tabcontent-block__mark" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect stroke="${item.color}" x="0" y="0" fill="white"/>
                        </svg>
                        <div class="plan__tabcontent-block__descr">${item.name}</div>
                        <div class="plan__tabcontent-block__value">${item.fact}%</div>
                    </div>
                    ${ProgressBarModule.setProgressbar(this.modifier + '-' + index, Math.ceil(item.fact), item.isIncrease)}
                    <div class="plan__tabcontent-block__info plan__tabcontent-block__info_bottom">
                        ${this.divider()}
                        <div class="plan__tabcontent-block__current-plan">
                            <span class="plan__tabcontent-block__current-plan-value">${item.plan}</span>
                            <span class="plan__tabcontent-block__current-plan-descr">тыс.руб.</span>
                        </div>
                    </div>
                    ${index <= 2 ? '<div class="diagram-box_list"></div>' : ''} 
                </div>
            `;
        }

        render() {
            const element = document.createElement('div');
            element.classList.add(this.className);

            if (this.array.length > 3) {
                element.classList.add(this.className);
            } else {
                element.classList.add(this.className);
                element.classList.add('plan__tabcontent-block__wrap_min-content');
            }
            let str = '';
            this.array.forEach((i, index) => str += this.createBlockItem(i, index));
            element.innerHTML = '';
            element.innerHTML = str;
            this.parent.append(element);
        }

        renderEmptyBlock() {
            const element = document.createElement('div');
            element.classList.add(this.className);
            this.parent.innerHTML = '';
        }
    }

    return {
        Partner
    };
})();

const PaginationModule = (() => {
    const btn = (num) => {
        return `
            <div class="plan__tabitem plan__tabitem-btn ${num === 1 ? 'plan__tabitem_active' : null}" data-page=${num}>
                <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
                </svg>
                <div class="plan__tabitem-value">${num}</div>	
            </div>
        `;
    };

    const next = `
        <div class="plan__tabitem plan__tabitem-prev">
            <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
            </svg>
            <div class="plan__tabitem-value">&lt;</div>	
        </div>
    `;

    const prev = `
        <div class="plan__tabitem plan__tabitem-next">
            <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"  stroke="#217AFF"/>	
            </svg>
            <div class="plan__tabitem-value">&gt;</div>	
        </div>
    `;

    const init = () => {
        // Логика пагинации
    };

    return {
        init
    };
})();

const ContentModule = (() => {
    const setContent = (data) => {
 
        // Инициализация данных, конфигурация.
        let currentPage = 1
        let flag = true
        let pagination = []

        const itemsInPage = 8
        const pages = Math.ceil(data.length / itemsInPage)
        const sliceData = (array, position, limit) => array.slice(position, limit)

        setPages(pages)

        const tabsContent = document.querySelectorAll('.plan__tabcontent')

        showCurrentPage(tabsContent)

        // Создание массива данных содержащих представление панели переключателей пагинации. 
        for (let i = 1; i <= pages; i++) {
            pagination.push(btn(i))
        }

        // Вывод пагинации на страниу, с последующим навешиванием прослушки клика 
        // на кнопки со стрелками стрелки и кнопки с номерами страниц.
        function innerPaginationToPage(pagination) {
            document.querySelector('.plan__tabheader-btns').innerHTML = ''
            let result = []
            if (pages == 1) {
                return
            }
            if (pagination.length == 2) {
                if (currentPage < pages) {
                    result = pagination.slice(currentPage - 1, currentPage + 1)

                }
                else if (currentPage == pages) {
                    result = pagination.slice(currentPage - 2, currentPage + 1)
                }
            }
            else {
                if (currentPage < pages - 1) {
                    result = pagination.slice(currentPage - 1, currentPage + 2)
                }
                else if (currentPage < pages) {
                    result = pagination.slice(currentPage - 2, currentPage + 1)
                }
                else if (currentPage == pages) {
                    result = pagination.slice(currentPage - 3, currentPage)
                } else {
                    return
                }
            }

            result.unshift(next)
            result.push(prev)

            document.querySelector('.plan__tabheader-btns').innerHTML = `
                ${result.join('')}
            `

            document.querySelector('.plan__tabitem-next').addEventListener('click', nextClick)
            document.querySelector('.plan__tabitem-prev').addEventListener('click', prevClick)
            togglePage()
        }

        innerPaginationToPage(pagination)

        // Ф-ия переключает табы вперед.
        function nextClick() {
            flag = true
            if (currentPage >= pagination.length) {
                return false
            }
            else if (pages == 1) {
                return false
            }
            else if (pages > 1) {
                currentPage++
                if (currentPage < pagination.length - 1 || flag) innerPaginationToPage(pagination)
                document.querySelectorAll('.plan__tabitem-btn').forEach(i => {
                    i.classList.remove('plan__tabitem_active')
                    if (i.getAttribute('data-page') == currentPage) {
                        i.classList.add('plan__tabitem_active')
                    }
                })

                showCurrentPage(tabsContent, currentPage - 1)
            }
        }

        // Ф-ия переключает табы назад.
        function prevClick() {
            flag = true
            if (currentPage <= 1) return false
            currentPage--
            if (currentPage < pagination.length - 1) innerPaginationToPage(pagination)

            document.querySelectorAll('.plan__tabitem-btn').forEach(i => {
                i.classList.remove('plan__tabitem_active')
                if (i.getAttribute('data-page') == currentPage) {
                    i.classList.add('plan__tabitem_active')
                }
            })

            showCurrentPage(tabsContent, currentPage - 1)
        }

        // Ф-ия переключает табы при нажатии на кнопку соответствующую порядковому номеру таба.
        function togglePage() {
            document.querySelectorAll('.plan__tabitem-btn').forEach(i => {
                i.addEventListener('click', (e) => {
                    document.querySelectorAll('.plan__tabitem-btn').forEach(item => {
                        item.classList.remove('plan__tabitem_active')
                    })

                    i.classList.add('plan__tabitem_active')
                    let pageNum = i.getAttribute('data-page')
                    currentPage = pageNum
                    flag = false
                    showCurrentPage(tabsContent, currentPage - 1)
                })
            })
        }

        document.querySelector('.plan__tabheader').addEventListener('selectstart', () => {
            return false
        })

        togglePage()

        for (let i = 0; i < pages; i++) {
            tabsContent[i].innerHTML = setPage(i + 1)
        }


        // Ф-ця выводит данные на страцицу. 
        function innerData() {
            count = 0

            if (pages === 0) {
                for (let i = 1; i <= pages + 1; i++) {
                    new Partner([], `p${i}-m`).renderEmptyBlock()
                    new Partner([], `p${i}-r`).renderEmptyBlock()
                }
            } else {
                for (let i = 1; i <= pages; i++) {
                    new Partner(sliceData(data, count, count + 4), `p${i}-m`).render()
                    count = count + 4
                    new Partner(sliceData(data, count, count + 4), `p${i}-r`).render()
                    count = count + 4
                }
            }
        }

        innerData()

        // Инициализация DOM элементов списка.
        let listItems = document.querySelectorAll('.plan__tabcontent-block__item')
        let listDiagramBoxes = document.querySelectorAll('.diagram-box_list')
        let listItemBgs = document.querySelectorAll('.plan__tabcontent-block__bg')

        // Отображение диаграммы.
        listItems.forEach(elem => {
            elem.addEventListener('click', () => {
                let id = elem.getAttribute('data-id')
                let bg = elem.querySelector('.plan__tabcontent-block__bg')
                listItemBgs.forEach(bg => bg.classList.remove('show'))
                bg.classList.add('show')
                listDiagramBoxes.forEach(b => b.innerHTML = '')
                showChart(elem, id, sortData, 'list')
            })
        })

        // Скрытие диаграммы.
        document.addEventListener('click', (e) => {
            elem = e.target.className

            if (elem == 'plan__wrapper' || elem == 'plan__tabcontent-wrap' || elem == 'plan__tabcontent-block__wrap plan__tabcontent-block__wrap_min-content' || elem == 'plan__header-title' || elem == 'plan__header' || elem == 'subtitle' || elem == 'plan__tabcontent plan__tabcontent_p1') {
                listItemBgs.forEach(bg => bg.classList.remove('show'))
                listDiagramBoxes.forEach(b => b.innerHTML = '')
            }
        })
    };

    return {
        setContent
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    TitleModule.setTitle('План выполнения поступлений денежных средств по НИР');
    // ProgressBarModule.init();
    ChartModule.init();
    ModalModule.init();
    MenuModule.init(planData);
    SortModule.init(planData);
    PartnerModule.init();
    // PaginationModule.init();
    ContentModule.init(planData);
});