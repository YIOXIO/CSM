const planData = [
    {
        id: 1,
        name: 'Высшая школа Экономики и бизнеса',
        color: '#217AFF',
        fact: 1299.99,
        plan: 1999999.99,
        isIcrease: true,
        currentMonth: 8,
        annualStatistics: [10, 20, 40, 35, 16, 25, 50, 55, 40, 45, 20, 80],
        items: [
            {
                id: 11,
                name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса»)',
                fact: 110,
                plan: 100000000,
                isIncrease: false,
                currentMonth: 8,
                annualStatistics: [10, 20, 40, 35, 160, 25, 50, 55, 40, 45, 20, 80]
            },
            {
                id: 12,
                name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса»)',
                fact: 90,
                plan: 15000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [10, 30, 20, 35, 96, 85, 88, 55, 40, 43, 20, 10]
            },
            {
                id: 13,
                name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса»)',
                fact: 20,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 5, 0, 0, 10, 15, 20, 35, 40, 55, 60, 70]
            },
            {
                id: 14,
                name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса»)',
                fact: 70,
                plan: 2000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            }
        ]
    },
    {
        id: 2,
        name: 'Высшая школа Финансов',
        color: '#EF8E8E',
        fact: 30,
        plan: 15000,
        isIcrease: false,
        currentMonth: 8,
        annualStatistics: [10, 30, 20, 35, 96, 85, 88, 55, 40, 43, 20, 10],
        items: [
            {
                id: 21,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
        ]
    },
    {
        id: 3,
        name: 'Высшая школа Менеджмента',
        color: '#2BD6FB',
        fact: 20,
        plan: 1000,
        isIcrease: false,
        currentMonth: 8,
        annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0],
        items: [
            {
                id: 31,
                name: 'Базовая кафедра «Экономические и правовые экспертизы» Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 32,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 33,
                name: 'Базовая кафедра',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 34,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 35,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 36,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 37,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 38,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 39,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 40,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 41,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 42,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 43,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 44,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 45,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
            {
                id: 46,
                name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                fact: 130,
                plan: 10000,
                isIncrease: true,
                currentMonth: 8,
                annualStatistics: [1, 2, 40, 35, 26, 55, 57, 95, 30, 25, 10, 0]
            },
        ]
    },
    {
        id: 4,
        name: 'Высшая школа кибертехнологий, математики и статики',
        color: '#627DAE',
        fact: 130,
        plan: 20000,
        isIcrease: true,
        currentMonth: 8,
        annualStatistics: [10, 30, 20, 35, 96, 85, 88, 55, 40, 43, 80, 90],
        items: []
    },
    {
        id: 5,
        name: 'Высшая инженерная школа «Новые материалы и технологии»',
        color: '#4CD382',
        fact: 69,
        plan: 15000,
        isIcrease: true,
        currentMonth: 8,
        annualStatistics: [10, 30, 20, 35, 96, 85, 88, 55, 40, 43, 20, 10],
    },
    {
        id: 6,
        name: 'Высшая школа Социально – гуманитарных наук',
        color: '#6C38FF',
        items: [],
        fact: 13,
        plan: 15000,
        isIcrease: false,
        currentMonth: 8,
        annualStatistics: [10, 30, 20, 35, 96, 85, 88, 55, 40, 43, 20, 10],
    },
    {
        id: 8,
        name: 'Высшая школа права',
        color: '#FB9B2B',
        fact: 80,
        plan: 19000,
        isIcrease: true,
        currentMonth: 8,
        annualStatistics: [10, 30, 20, 35, 96, 85, 88, 55, 40, 43, 20, 10],
        items: []
    },
    {
        id: 9,
        name: 'НИО',
        color: '#FBE62B',
        fact: 89,
        plan: 4000,
        isIcrease: true,
        currentMonth: 8,
        annualStatistics: [10, 30, 20, 35, 96, 85, 88, 55, 40, 43, 20, 10],
        items: []
    },
    {
        id: 10,
        name: 'Прочие подразделения',
        color: '#A7EB17',
        fact: 9,
        plan: 7000,
        isIcrease: false,
        currentMonth: 8,
        annualStatistics: [10, 30, 20, 35, 96, 85, 88, 55, 40, 43, 20, 10],
        items: []
    },
]

    
// TitleModule
let TitleModule = (function () {
    let setTitle = function (title) {
        document.querySelector('.plan__header-title').textContent = title;
    };

    let setSubtitle = function (num) {
        document.querySelector('.plan__header-subtitle span').textContent = num;
    };

    return {
        setTitle: setTitle,
        setSubtitle: setSubtitle
    };
})();

// ProgressBarModule
let ProgressBarModule = (function () {
    let setProgressbar = function (id, fact, isIcrease, modifier) {
        let colorSettings = {
            icrease: '<stop stop-color="#4CD380"/><stop offset="1" stop-color="#217AFF"/>',
            decline: '<stop offset="0.05" stop-color="#217AFF"/><stop offset="1" stop-color="#FD6A6A"/>',
        };

        return `
        <svg class="plan__progressbar plan__progressbar_${modifier}" viewBox="0 0 1054 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.05" x="-2" width="100%" height="100%" fill="white"/>
            <rect y="1" width="${fact}%" height="100%" fill="url(#${id})"/>
            <path d="M15.3077 1H20.1543L-24.2247 60H-29.0713L15.3077 1Z" fill="#112054"/>
            <path d="M1042.03 60L1086.41 1H1081.56L1037.18 60H1042.03Z" fill="#112054"/>
            <path d="M1022.64 60L1067.02 1H1062.18L1017.8 60H1022.64Z" fill="#112054"/>
            <path d="M1003.26 60L1047.64 1H1042.79L998.411 60H1003.26Z" fill="#112054"/>
            <path d="M983.872 60L1028.25 1H1023.4L979.025 60H983.872Z" fill="#112054"/>
            <path d="M964.484 60L1008.86 1H1004.02L959.638 60H964.484Z" fill="#112054"/>
            <path d="M945.098 60L989.477 1H984.63L940.251 60H945.098Z" fill="#112054"/>
            <path d="M925.712 60L970.091 1H965.245L920.866 60H925.712Z" fill="#112054"/>
            <path d="M906.326 60L950.705 1H945.858L901.479 60H906.326Z" fill="#112054"/>
            <path d="M886.939 60L931.318 1H926.472L882.093 60H886.939Z" fill="#112054"/>
            <path d="M867.552 60L911.931 1H907.085L862.706 60H867.552Z" fill="#112054"/>
            <path d="M848.165 60L892.544 1H887.697L843.318 60H848.165Z" fill="#112054"/>
            <path d="M828.779 60L873.158 1H868.311L823.932 60H828.779Z" fill="#112054"/>
            <path d="M809.392 60L853.771 1H848.924L804.545 60H809.392Z" fill="#112054"/>
            <path d="M790.006 60L834.385 1H829.539L785.16 60H790.006Z" fill="#112054"/>
            <path d="M770.619 60L814.998 1H810.151L765.772 60H770.619Z" fill="#112054"/>
            <path d="M751.233 60L795.612 1H790.766L746.387 60H751.233Z" fill="#112054"/>
            <path d="M731.848 60L776.227 1H771.38L727.001 60H731.848Z" fill="#112054"/>
            <path d="M712.461 60L756.84 1H751.994L707.615 60H712.461Z" fill="#112054"/>
            <path d="M693.075 60L737.454 1H732.607L688.228 60H693.075Z" fill="#112054"/>
            <path d="M673.687 60L718.066 1H713.22L668.841 60H673.687Z" fill="#112054"/>
            <path d="M654.302 60L698.681 1H693.834L649.455 60H654.302Z" fill="#112054"/>
            <path d="M634.915 60L679.294 1H674.447L630.068 60H634.915Z" fill="#112054"/>
            <path d="M615.528 60L659.907 1H655.06L610.681 60H615.528Z" fill="#112054"/>
            <path d="M596.141 60L640.52 1H635.673L591.294 60H596.141Z" fill="#112054"/>
            <path d="M576.754 60L621.133 1H616.287L571.908 60H576.754Z" fill="#112054"/>
            <path d="M557.369 60L601.748 1H596.901L552.522 60H557.369Z" fill="#112054"/>
            <path d="M537.983 60L582.362 1H577.515L533.136 60H537.983Z" fill="#112054"/>
            <path d="M518.597 60L562.976 1H558.129L513.75 60H518.597Z" fill="#112054"/>
            <path d="M499.209 60L543.588 1H538.742L494.363 60H499.209Z" fill="#112054"/>
            <path d="M479.823 60L524.202 1H519.356L474.977 60H479.823Z" fill="#112054"/>
            <path d="M460.437 60L504.816 1H499.969L455.59 60H460.437Z" fill="#112054"/>
            <path d="M441.051 60L485.43 1H480.583L436.204 60H441.051Z" fill="#112054"/>
            <path d="M421.663 60L466.042 1H461.195L416.816 60H421.663Z" fill="#112054"/>
            <path d="M402.276 60L446.655 1H441.809L397.43 60H402.276Z" fill="#112054"/>
            <path d="M382.891 60L427.27 1H422.423L378.044 60H382.891Z" fill="#112054"/>
            <path d="M363.504 60L407.883 1H403.037L358.658 60H363.504Z" fill="#112054"/>
            <path d="M344.118 60L388.497 1H383.651L339.271 60H344.118Z" fill="#112054"/>
            <path d="M324.732 60L369.111 1H364.264L319.885 60H324.732Z" fill="#112054"/>
            <path d="M305.345 60L349.724 1H344.877L300.498 60H305.345Z" fill="#112054"/>
            <path d="M285.958 60L330.337 1H325.491L281.112 60H285.958Z" fill="#112054"/>
            <path d="M266.572 60L310.951 1H306.105L261.726 60H266.572Z" fill="#112054"/>
            <path d="M247.185 60L291.565 1H286.718L242.339 60H247.185Z" fill="#112054"/>
            <path d="M227.799 60L272.178 1H267.332L222.953 60H227.799Z" fill="#112054"/>
            <path d="M208.412 60L252.791 1H247.944L203.565 60H208.412Z" fill="#112054"/>
            <path d="M189.026 60L233.405 1H228.559L184.18 60H189.026Z" fill="#112054"/>
            <path d="M169.64 60L214.019 1H209.172L164.793 60H169.64Z" fill="#112054"/>
            <path d="M150.252 60L194.631 1H189.785L145.406 60H150.252Z" fill="#112054"/>
            <path d="M130.867 60L175.246 1H170.399L126.02 60H130.867Z" fill="#112054"/>
            <path d="M111.48 60L155.859 1H151.012L106.633 60H111.48Z" fill="#112054"/>
            <path d="M92.0942 60L136.473 1H131.627L87.2476 60H92.0942Z" fill="#112054"/>
            <path d="M72.7079 60L117.087 1H112.24L67.8613 60H72.7079Z" fill="#112054"/>
            <path d="M53.3202 60L97.6993 1H92.8527L48.4736 60H53.3202Z" fill="#112054"/>
            <path d="M33.9345 60L78.3135 1H73.4669L29.0879 60H33.9345Z" fill="#112054"/>
            <path d="M14.5493 60L58.9283 1H54.0817L9.70264 60H14.5493Z" fill="#112054"/>
            <path d="M-4.83796 60L39.5411 1H34.6945L-9.68457 60H-4.83796Z" fill="#112054"/>
            <svg>
                <defs>
                    <linearGradient id="${id}" x1="1054" y1="1" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                        ${isIcrease ? colorSettings.icrease : colorSettings.decline}
                    </linearGradient>
                </defs>
            </svg>
        </svg>
        `
    };

    return {
        setProgressbar: setProgressbar
    };
})();

// ChartModule
let ChartModule = (function () {
    let createChart = function (selector, props, options, mounths) {
        let labels = setMonthsLine(mounths, props.currentMonth);
        let data = {
            labels: labels,
            datasets: [{
                backgroundColor: '#217AFF',
                borderColor: '#217AFF',
                data: props.annualStatistics
            }]
        };

        let config = {
            type: 'line',
            data: data,
            options: options
        };

        let ctx = document.querySelector(`.${selector}`).getContext('2d');
        new Chart(ctx, config);
    };

    let showChart = function (elem, id, array, modifier) {
        let itemData = array.find(function (i) { return i.id == id; });
        let box = elem.querySelector(`.diagram-box_${modifier}`);
        box.innerHTML = `<canvas class="line-chart-${id}"></canvas>`;
        createChart(`line-chart-${id}`, itemData, diagramOptions, diagramMounths);
    };

    return {
        createChart: createChart,
        showChart: showChart
    };
})();

// ModalCoreModule
let ModalCoreModule = (function () {
    let overlay = document.querySelector('.overlay');
    let modals = document.querySelectorAll('.modal');
    let modalSmall = document.querySelector('.modal_small');
    let modalMedium = document.querySelector('.modal_medium');
    let modalLarge = document.querySelector('.modal_large');

    let closeModals = function () {
        overlay.classList.remove('overlay_show');
        modals.forEach(function (i) { return i.classList.remove('modal_show'); });
    };

    let switchModals = function (currentModal, nextModal, activeClassName) {
        currentModal.classList.remove(activeClassName);
        nextModal.classList.add(activeClassName);
    };

    let init = function () {
        overlay.addEventListener('click', closeModals);
    };

    return {
        closeModals: closeModals,
        switchModals: switchModals,
        init: init
    };
})();

// ModalPlaceModule
let ModalPlaceModule = (function () {
    let places = document.querySelector('.modal__place-wrapper');
    let placesData = [
        'Кабинет ректора',
        'Зал ученого совета',
        'Белый зал',
        'Малый зал'
    ];

    let frames = {
        placesFrame: `<svg class="modal__place-item__frame" viewBox="0 0 393 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.46459 23.5026L1.46459 23.0532L1.78612 22.7393L22.7861 2.2374L23.0969 1.93398L23.5313 1.93398L390.53 1.93399L391.597 1.93399L391.597 3.00063L391.598 62.1686L391.598 62.6105L391.285 62.9229L369.952 84.2562L369.64 84.5686L369.198 84.5686L2.53126 84.5686L1.46459 84.5686L1.46459 83.502L1.46459 23.5026Z" fill="#112054" fill-opacity="0.2" stroke="white" stroke-width="2.13333" />
        </svg>`
    };

    let setControlItems = function (arr, frame, parentNode, control) {
        let str = '';
        arr.map(function (item) {
            str += `<div class="modal__${control}-item" data-${control}="${item}">
                <span>${item}</span>
                ${frame}
            </div>`;
        });
        parentNode.innerHTML = str;
    };

    let setDefaultActiveControlItem = function (arr, parentNode, val, control) {
        arr.find(function (slot, index) {
            if (slot === val) {
                parentNode[index].classList.add(`modal__${control}-item_active`);
                parentNode[index].querySelector(`.modal__${control}-item__frame`).classList.add('modal_show');
            }
        });
    };

    let toggleControlItems = function (controlItems, frames, item, control, activeFrameClassName) {
        let activeClassName = `modal__${control}-item_active`;
        controlItems.forEach(function (i) { return i.classList.remove(activeClassName); });
        item.classList.add(activeClassName);
        frames.forEach(function (f) { return f.classList.remove(activeFrameClassName); });
        item.querySelector('svg').classList.add(activeFrameClassName);
    };

    let init = function () {
        setControlItems(placesData, frames.placesFrame, places, 'place');

        let meetingPlaceItems = document.querySelectorAll('.modal__place-item');
        let meetingPlaceItemFrames = document.querySelectorAll('.modal__place-item__frame');

        setDefaultActiveControlItem(placesData, meetingPlaceItems, 'Белый зал', 'place');

        places.addEventListener('click', function (evt) {
            let target = evt.target.closest('div');
            if (!target.classList.contains('modal__place-item')) return;
            toggleControlItems(meetingPlaceItems, meetingPlaceItemFrames, target, 'place');
        });
    };

    return {
        init: init
    };
})();

// ModalTimeModule
let ModalTimeModule = (function () {
    let timetable = document.querySelector('.modal__timetable-wrapper');
    let timeSlotsData = [
        '06:00', '06:10', '06:20', '06:30', '06:40', '06:50',
        '07:00', '07:10', '07:20', '07:30', '07:40', '07:50',
        // ... остальные временные слоты
    ];

    let frames = {
        timetableFrame: `<svg class="modal__timetable-item__frame" viewBox="0 0 113 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.06616 19L1.06616 18.5582L1.37858 18.2458L17.3786 2.24574L17.691 1.93332L18.1328 1.93332L110.132 1.93333L111.198 1.93333L111.198 2.99997L111.199 39L111.199 39.4123L110.922 39.7175L95.9221 56.2194L95.6047 56.5686L95.1328 56.5686L2.13281 56.5686L1.06615 56.5686L1.06615 55.502L1.06616 19Z" fill="#112054" fill-opacity="0.2" stroke="white" stroke-width="2.13333"/>
        </svg>`
    };

    let setControlItems = function (arr, frame, parentNode, control) {
        let str = '';
        arr.map(function (item) {
            str += `<div class="modal__${control}-item" data-${control}="${item}">
                <span>${item}</span>
                ${frame}
            </div>`;
        });
        parentNode.innerHTML = str;
    };

    let setDefaultActiveControlItem = function (arr, parentNode, val, control) {
        arr.find(function (slot, index) {
            if (slot === val) {
                parentNode[index].classList.add(`modal__${control}-item_active`);
                parentNode[index].querySelector(`.modal__${control}-item__frame`).classList.add('modal_show');
            }
        });
    };

    let toggleControlItems = function (controlItems, frames, item, control, activeFrameClassName) {
        let activeClassName = `modal__${control}-item_active`;
        controlItems.forEach(function (i) { return i.classList.remove(activeClassName); });
        item.classList.add(activeClassName);
        frames.forEach(function (f) { return f.classList.remove(activeFrameClassName); });
        item.querySelector('svg').classList.add(activeFrameClassName);
    };

    let init = function () {
        setControlItems(timeSlotsData, frames.timetableFrame, timetable, 'timetable');

        let timeSlots = document.querySelectorAll('.modal__timetable-item');
        let timeSlotsFrames = document.querySelectorAll('.modal__timetable-item__frame');

        setDefaultActiveControlItem(timeSlotsData, timeSlots, '11:20', 'timetable');

        timetable.addEventListener('click', function (evt) {
            let target = evt.target.closest('div');
            if (!target.classList.contains('modal__timetable-item')) return;
            toggleControlItems(timeSlots, timeSlotsFrames, target, 'timetable');
        });
    };

    return {
        init: init
    };
})();

// ModalCalendarModule
let ModalCalendarModule = (function () {
    let month, year, date, currentDay;
    let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let calendarBody = document.querySelector('.modal__calendar-body');
    let arrowBtns = document.querySelectorAll('.modal__calendar-arrow__btn');

    let calendarInit = function () {
        month = new Date().getMonth();
        year = new Date().getFullYear();
        date = new Date();
        currentDay = new Date().getDate();
    };

    let setCalendarDays = function () {
        let str = '';
        days.map(function (d) {
            str += `<td>${d}</td>`;
        });
        document.querySelector('.modal__calendar-days').innerHTML = str;
    };

    let setCalendarMonths = function () {
        let currentMonth = months[month];
        document.querySelector('.modal__calendar-month').innerHTML = currentMonth;
    };

    let setCalendarYear = function () {
        document.querySelector('.modal__calendar-year').innerHTML = year;
    };

    let calendar = function () {
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

    let setCalendarBody = function () {
        calendarBody.innerHTML = '';
        calendar().map(function (week) {
            let tr = '<tr>';
            week.map(function (day, i) {
                let mark = day.mark ? 'today' : null;
                tr += `<td class="day-cell ${mark}"> ${day.index ? `<span>${day.index}</span>` : ''}</td>`;
                if (week[i - 1] == week.length) tr += '</tr>';
            });
            calendarBody.innerHTML += tr;
        });
    };

    let updateCalendar = function () {
        setTimeout(function () {
            setCalendarBody();
            setCalendarCellsClick();
        }, 0);
    };

    let changeDay = function (day) {
        date.setDate(day);
        currentDay = date.getDate();
        updateCalendar();
    };

    let increase = function () {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        setCalendarMonths();
        updateCalendar();
    };

    let decrease = function () {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        setCalendarMonths();
        updateCalendar();
    };

    let changeMonth = function (btn) {
        if (btn.classList.contains('increase')) {
            increase();
        } else {
            decrease();
        }
    };

    let setCalendarCellsClick = function () {
        let calendarCells = calendarBody.querySelectorAll('.day-cell span');
        calendarCells.forEach(function (elem) {
            elem.addEventListener('click', function () {
                changeDay(elem.textContent);
            });
        });
    };

    let init = function () {
        calendarInit();
        setCalendarDays();
        setCalendarMonths();
        setCalendarYear();
        setCalendarBody();
        setCalendarCellsClick();

        arrowBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                changeMonth(btn);
            });
        });
    };

    return {
        init: init
    };
})();

// ModalEventsModule
let ModalEventsModule = (function () {
    let modalSmall = document.querySelector('.modal_small');
    let modalMedium = document.querySelector('.modal_medium');
    let modalLarge = document.querySelector('.modal_large');
    let modalSubmit = modalLarge.querySelector('.modal__submit');
    let modalConfirm = document.querySelectorAll('.modal__btn_confirm');
    let modalCancelled = document.querySelectorAll('.modal__btn_cancelled');
    let selectReportBtn = document.querySelector('.modal__select-report');
    let selectMeetingBtn = document.querySelector('.modal__select-meeting');

    let msg = {
        type: 'meeting',
        payload: {}
    };

    let init = function () {
        selectReportBtn.addEventListener('click', function () {
            ModalCoreModule.switchModals(modalMedium, modalLarge, 'modal_show');
        });

        selectMeetingBtn.addEventListener('click', function () {
            msg.type = 'report';
            msg.payload = {};
            ModalCoreModule.switchModals(modalLarge, modalMedium, 'modal_show');
        });

        modalSubmit.addEventListener('click', function () {
            msg.type = 'meeting';
            msg.payload = {};
            ModalCoreModule.switchModals(modalLarge, modalSmall, 'modal_show');
        });

        modalCancelled.forEach(function (i) {
            i.addEventListener('click', function () {
                ModalCoreModule.closeModals();
            });
        });

        modalConfirm.forEach(function (i) {
            i.addEventListener('click', function () {
                ModalCoreModule.closeModals();
                console.log(msg);
            });
        });
    };

    return {
        init: init
    };
})();

// MenuModule
let MenuModule = (function () {
    let menuItem = function (item) {
        let name = item.name, color = item.color, id = item.id, plan = item.plan, fact = item.fact, isIcrease = item.isIcrease;

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

    let setMenu = function (data) {
        let out = document.querySelector('.plan__tabcontent-block__wrap_menu');
        let menuResult = '';
        data.sort(SortModule.byField('fact')).map(function (item) {
            menuResult += menuItem(item);
        });
        out.innerHTML = menuResult;
    };

    let setLinesSelection = function () {
        let menuBlocks = document.querySelectorAll('.plan__menu-block');
        menuBlocks.forEach(function (i) {
            let line = i.children[0].children[0];
            let rect = i.children[0].children[1];
            line.setAttribute('width', '10%');
            rect.setAttribute('x', '10%');
        });
    };

    let setLinesDefault = function (data) {
        let menuBlocks = document.querySelectorAll('.plan__menu-block');
        let array = [];
        data.map(function (partner) {
            if (partner.items) {
                array.push(partner.items.length);
            } else {
                array.push(0);
            }
        });

        menuBlocks.forEach(function (i, index) {
            let line = i.children[0].children[0];
            let rect = i.children[0].children[1];
            let value = array[index] + 10;
            value = value > 10 ? value : 10;
            value = value > 90 ? value = 90 : value;
            line.setAttribute('width', `${value}%`);
            rect.setAttribute('x', `${value}%`);
        });
    };

    let init = function (data) {
        setMenu(data);
        setLinesDefault(data);

        let menuBlocks = document.querySelectorAll('.plan__menu-block');
        let menuDiagramBoxes = document.querySelectorAll('.diagram-box_menu');

        menuBlocks.forEach(function (elem) {
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
                    menuBlocks.forEach(function (b) { return b.classList.remove('plan__menu-block_opened'); });
                    menuDiagramBoxes.forEach(function (b) { return b.innerHTML = ''; });
                    elem.classList.add('plan__menu-block_opened');
                    ChartModule.showChart(elem, id, data, 'menu');
                }
            });
        });

        document.querySelector('.header__link_get-all-plan').addEventListener('click', function () {
            ContentModule.setContent(SortModule.getSortData(data));
            TitleModule.setTitle('План выполнения поступлений денежных средств по НИР');
            setLinesDefault(data);
            menuBlocks.forEach(function (b) { return b.classList.remove('plan__menu-block_opened'); });
            menuDiagramBoxes.forEach(function (b) { return b.innerHTML = ''; });
        });
    };

    return {
        init: init
    };
})();

// SortModule
let SortModule = (function () {
    let sortData = [];

    let search = function (array) {
        array.items.map(function (item) {
            item.color = array.color;
            sortData.push(item);
        });
    };

    let byField = function (field) {
        return function (a, b) {
            return a[field] < b[field] ? 1 : -1;
        };
    };

    let getSortData = function (data, id) {
        sortData = [];
        if (id !== undefined) {
            data.find(function (partner) {
                if (partner.items && partner.id == id) {
                    search(partner);
                }
            });
        } else {
            data.map(function (partner) {
                if (partner.items) {
                    search(partner);
                }
            });
        }
        TitleModule.setSubtitle(sortData.length);
        return sortData.sort(byField('fact'));
    };

    return {
        byField: byField,
        getSortData: getSortData
    };
})();

// PartnerModule
let PartnerModule = (function () {
    function Partner(array, modifier) {
        this.array = array;
        this.className = 'plan__tabcontent-block__wrap';
        this.modifier = modifier;
        this.parent = document.querySelector(`.plan__tabcontent-block_${this.modifier}`);
        this.count = this.array.length;
    }

    Partner.prototype.bg = function (index) {
        let bgOffsetModifier = '';
        if (index > 0 && index < 3) {
            bgOffsetModifier = 'middle';
        }

        return `
            <svg class="plan__tabcontent-block__bg plan__tabcontent-block__bg_${bgOffsetModifier} hide" viewBox="0 0 1269 675" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG код фона -->
            </svg>
        `;
    };

    Partner.prototype.divider = function () {
        return `
            <svg class="plan__tabcontent-block__divider" viewBox="0 0 800 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG код разделителя -->
            </svg>
        `;
    };

    Partner.prototype.createBlockItem = function (item, index) {
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
    };

    Partner.prototype.render = function () {
        let element = document.createElement('div');
        element.classList.add(this.className);

        if (this.array.length > 3) {
            element.classList.add(this.className);
        } else {
            element.classList.add(this.className);
            element.classList.add('plan__tabcontent-block__wrap_min-content');
        }
        let str = '';
        this.array.forEach(function (i, index) {
            str += this.createBlockItem(i, index);
        }.bind(this));
        element.innerHTML = '';
        element.innerHTML = str;
        this.parent.append(element);
    };

    Partner.prototype.renderEmptyBlock = function () {
        let element = document.createElement('div');
        element.classList.add(this.className);
        this.parent.innerHTML = '';
    };

    return {
        Partner: Partner
    };
})();

// PaginationModule
let PaginationModule = (function () {
    let btn = function (num) {
        return `
            <div class="plan__tabitem plan__tabitem-btn ${num === 1 ? 'plan__tabitem_active' : null}" data-page=${num}>
                <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
                </svg>
                <div class="plan__tabitem-value">${num}</div>	
            </div>
        `;
    };

    let next = `
        <div class="plan__tabitem plan__tabitem-prev">
            <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
            </svg>
            <div class="plan__tabitem-value">&lt;</div>	
        </div>
    `;

    let prev = `
        <div class="plan__tabitem plan__tabitem-next">
            <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"  stroke="#217AFF"/>	
            </svg>
            <div class="plan__tabitem-value">&gt;</div>	
        </div>
    `;

    let init = function () {
        // Логика пагинации
    };

    return {
        init: init
    };
})();

// ContentModule
let ContentModule = (function () {
    let setContent = function (data) {
        // Инициализация данных, конфигурация.
        let currentPage = 1;
        let flag = true;
        let pagination = [];

        let itemsInPage = 8;
        let pages = Math.ceil(data.length / itemsInPage);
        let sliceData = function (array, position, limit) {
            return array.slice(position, limit);
        };

        setPages(pages);

        let tabsContent = document.querySelectorAll('.plan__tabcontent');

        showCurrentPage(tabsContent);

        // Создание массива данных содержащих представление панели переключателей пагинации. 
        for (let i = 1; i <= pages; i++) {
            pagination.push(btn(i));
        }

        // Вывод пагинации на страниу, с последующим навешиванием прослушки клика 
        // на кнопки со стрелками стрелки и кнопки с номерами страниц.
        function innerPaginationToPage(pagination) {
            document.querySelector('.plan__tabheader-btns').innerHTML = '';
            let result = [];
            if (pages == 1) {
                return;
            }
            if (pagination.length == 2) {
                if (currentPage < pages) {
                    result = pagination.slice(currentPage - 1, currentPage + 1);

                }
                else if (currentPage == pages) {
                    result = pagination.slice(currentPage - 2, currentPage + 1);
                }
            }
            else {
                if (currentPage < pages - 1) {
                    result = pagination.slice(currentPage - 1, currentPage + 2);
                }
                else if (currentPage < pages) {
                    result = pagination.slice(currentPage - 2, currentPage + 1);
                }
                else if (currentPage == pages) {
                    result = pagination.slice(currentPage - 3, currentPage);
                } else {
                    return;
                }
            }

            result.unshift(next);
            result.push(prev);

            document.querySelector('.plan__tabheader-btns').innerHTML = `
                ${result.join('')}
            `;

            document.querySelector('.plan__tabitem-next').addEventListener('click', nextClick);
            document.querySelector('.plan__tabitem-prev').addEventListener('click', prevClick);
            togglePage();
        }

        innerPaginationToPage(pagination);

        // Ф-ия переключает табы вперед.
        function nextClick() {
            flag = true;
            if (currentPage >= pagination.length) {
                return false;
            }
            else if (pages == 1) {
                return false;
            }
            else if (pages > 1) {
                currentPage++;
                if (currentPage < pagination.length - 1 || flag) innerPaginationToPage(pagination);
                document.querySelectorAll('.plan__tabitem-btn').forEach(function (i) {
                    i.classList.remove('plan__tabitem_active');
                    if (i.getAttribute('data-page') == currentPage) {
                        i.classList.add('plan__tabitem_active');
                    }
                });

                showCurrentPage(tabsContent, currentPage - 1);
            }
        }

        // Ф-ия переключает табы назад.
        function prevClick() {
            flag = true;
            if (currentPage <= 1) return false;
            currentPage--;
            if (currentPage < pagination.length - 1) innerPaginationToPage(pagination);

            document.querySelectorAll('.plan__tabitem-btn').forEach(function (i) {
                i.classList.remove('plan__tabitem_active');
                if (i.getAttribute('data-page') == currentPage) {
                    i.classList.add('plan__tabitem_active');
                }
            });

            showCurrentPage(tabsContent, currentPage - 1);
        }

        // Ф-ия переключает табы при нажатии на кнопку соответствующую порядковому номеру таба.
        function togglePage() {
            document.querySelectorAll('.plan__tabitem-btn').forEach(function (i) {
                i.addEventListener('click', function (e) {
                    document.querySelectorAll('.plan__tabitem-btn').forEach(function (item) {
                        item.classList.remove('plan__tabitem_active');
                    });

                    i.classList.add('plan__tabitem_active');
                    let pageNum = i.getAttribute('data-page');
                    currentPage = pageNum;
                    flag = false;
                    showCurrentPage(tabsContent, currentPage - 1);
                });
            });
        }

        document.querySelector('.plan__tabheader').addEventListener('selectstart', function () {
            return false;
        });

        togglePage();

        for (let i = 0; i < pages; i++) {
            tabsContent[i].innerHTML = setPage(i + 1);
        }

        // Ф-ця выводит данные на страцицу. 
        function innerData() {
            let count = 0;

            if (pages === 0) {
                for (let i = 1; i <= pages + 1; i++) {
                    new Partner([], `p${i}-m`).renderEmptyBlock();
                    new Partner([], `p${i}-r`).renderEmptyBlock();
                }
            } else {
                for (let i = 1; i <= pages; i++) {
                    new Partner(sliceData(data, count, count + 4), `p${i}-m`).render();
                    count = count + 4;
                    new Partner(sliceData(data, count, count + 4), `p${i}-r`).render();
                    count = count + 4;
                }
            }
        }

        innerData();

        // Инициализация DOM элементов списка.
        let listItems = document.querySelectorAll('.plan__tabcontent-block__item');
        let listDiagramBoxes = document.querySelectorAll('.diagram-box_list');
        let listItemBgs = document.querySelectorAll('.plan__tabcontent-block__bg');

        // Отображение диаграммы.
        listItems.forEach(function (elem) {
            elem.addEventListener('click', function () {
                let id = elem.getAttribute('data-id');
                let bg = elem.querySelector('.plan__tabcontent-block__bg');
                listItemBgs.forEach(function (bg) { return bg.classList.remove('show'); });
                bg.classList.add('show');
                listDiagramBoxes.forEach(function (b) { return b.innerHTML = ''; });
                showChart(elem, id, sortData, 'list');
            });
        });

        // Скрытие диаграммы.
        document.addEventListener('click', function (e) {
            let elem = e.target.className;

            if (elem == 'plan__wrapper' || elem == 'plan__tabcontent-wrap' || elem == 'plan__tabcontent-block__wrap plan__tabcontent-block__wrap_min-content' || elem == 'plan__header-title' || elem == 'plan__header' || elem == 'subtitle' || elem == 'plan__tabcontent plan__tabcontent_p1') {
                listItemBgs.forEach(function (bg) { return bg.classList.remove('show'); });
                listDiagramBoxes.forEach(function (b) { return b.innerHTML = ''; });
            }
        });
    };

    return {
        setContent: setContent
    };
})();

document.addEventListener('DOMContentLoaded', function () {
    TitleModule.setTitle('План выполнения поступлений денежных средств по НИР');
    ProgressBarModule.init();
    ChartModule.init();
    ModalCoreModule.init();
    ModalPlaceModule.init();
    ModalTimeModule.init();
    ModalCalendarModule.init();
    ModalEventsModule.init();
    MenuModule.init(planData);
    SortModule.init(planData);
    PartnerModule.init();
    PaginationModule.init();
    ContentModule.init(planData);
});