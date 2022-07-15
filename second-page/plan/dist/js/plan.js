document.addEventListener('DOMContentLoaded', () => {
    // Server data exemple. 

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



    // *** ЗАГОЛОВОК ***

    // ф-ия для установки заголовка.
    const setTitle = title => document.querySelector('.plan__header-title').textContent = title

    // ф-ия для установки в подзаголовок кол-ва элементов в отображемом списке.
    const setSubtitle = num => document.querySelector('.plan__header-subtitle span').textContent = num

    // Установка заголовка по умолчанию.
    const defaultTitle = 'План выполнения поступлений денежных средств по НИР'
    setTitle(defaultTitle)



    // *** ПРОГРЕССБАР ***

    // ф-ия создающая прогрессбара. 
    const setProgressbar = (id, fact, isIcrease, modifier = 'list') => {
        const colorSettings = {
            icrease: '<stop stop-color="#4CD380"/><stop offset="1" stop-color="#217AFF"/>',
            decline: '<stop offset="0.05" stop-color="#217AFF"/><stop offset="1" stop-color="#FD6A6A"/>',
        }

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
    }



    // *** ДИАГРАММА ***

    // ф-ия устанавливает временную шкалу начиная с определенного месяца.   
    const setMonthsLine = (mounths, position) => {
        let start = mounths.slice(position - 1, mounths.length)
        let end = mounths.slice(0, position - 1)

        return [...start, ...end]
    }

    const diagramMounths = [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек'
    ]


    // Конфигурация диаграммы. 
    const diagramOptions = {
        events: [],
        aspectRatio: 4,
        scales: {
            x: {
                ticks: {
                    color: '#FFFFFF',
                },
                grid: {
                    display: false,
                    borderColor: '#FFFFFF',
                }
            },
            y: {
                min: 0,
                ticks: {
                    stepSize: 100,
                    color: '#FFFFFF',
                    callback: function (tick) {
                        return tick.toString() + '%'
                    }
                },
                grid: {
                    display: false,
                    borderColor: '#FFFFFF',
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }

    Chart.defaults.font.size = 12

    // ф-ия создает диаграмму. 
    function createChart(selector, props, options, mounths) {
        const labels = setMonthsLine(mounths, props.currentMonth)

        const data = {
            labels: labels,
            datasets: [{
                backgroundColor: '#217AFF',
                borderColor: '#217AFF',
                data: props.annualStatistics
            }]
        }

        const config = {
            type: 'line',
            data: data,
            options: options
        }

        const ctx = document.querySelector(`.${selector}`).getContext('2d')
        new Chart(ctx, config)
    }

    // ф-ия отображает диаграмму внутри блока. 
    function showChart(elem, id, array, modifier) {
        const itemData = array.find(i => i.id == id)
        let box = elem.querySelector(`.diagram-box_${modifier}`)
        box.innerHTML = `<canvas class="line-chart-${id}"></canvas>`
        createChart(`line-chart-${id}`, itemData, diagramOptions, diagramMounths)
    }




    // *** МОДАЛЬНОЕ ОКНО ***

    // Инициализация DOM элементов модального окна.
    const overlay          = document.querySelector('.overlay')
    const modals           = document.querySelectorAll('.modal')
    const modalSmall       = document.querySelector('.modal_small')
    const modalMedium      = document.querySelector('.modal_medium')
    const modalLarge       = document.querySelector('.modal_large')
    const modalSubject     = modalLarge.querySelector('.modal__title-subject')
    const modalSubmit      = modalLarge.querySelector('.modal__submit')
    const modalConfirm     = document.querySelectorAll('.modal__btn_confirm')
    const modalCancelled   = document.querySelectorAll('.modal__btn_cancelled')
    const selectReportBtn  = document.querySelector('.modal__select-report')
    const selectMeetingBtn = document.querySelector('.modal__select-meeting')
    const places           = modalLarge.querySelector('.modal__place-wrapper')
    const timetable        = modalLarge.querySelector('.modal__timetable-wrapper')
    
    // Инициализация объекта "msg".
    let msg = {
        type: 'meeting',
        payload: {}
    }

    // Инициализация значений по умолчанию.
    let place = 'Белый зал'
    let time = '11:20'
    let unit = {}


    //Инициализация bg активнх элементов.
    const frames = {
        placesFrame: `<svg class="modal__place-item__frame" viewBox="0 0 393 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.46459 23.5026L1.46459 23.0532L1.78612 22.7393L22.7861 2.2374L23.0969 1.93398L23.5313 1.93398L390.53 1.93399L391.597 1.93399L391.597 3.00063L391.598 62.1686L391.598 62.6105L391.285 62.9229L369.952 84.2562L369.64 84.5686L369.198 84.5686L2.53126 84.5686L1.46459 84.5686L1.46459 83.502L1.46459 23.5026Z" fill="#112054" fill-opacity="0.2" stroke="white" stroke-width="2.13333" />
        </svg>`,
        timetableFrame: `<svg class="modal__timetable-item__frame" viewBox="0 0 113 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.06616 19L1.06616 18.5582L1.37858 18.2458L17.3786 2.24574L17.691 1.93332L18.1328 1.93332L110.132 1.93333L111.198 1.93333L111.198 2.99997L111.199 39L111.199 39.4123L110.922 39.7175L95.9221 56.2194L95.6047 56.5686L95.1328 56.5686L2.13281 56.5686L1.06615 56.5686L1.06615 55.502L1.06616 19Z" fill="#112054" fill-opacity="0.2" stroke="white" stroke-width="2.13333"/>
        </svg>`,
        calendarFrame: `<svg class="modal__calendar-item__frame" viewBox="0 0 95 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.93334 23L1.93334 22.5507L2.25487 22.2368L23.2549 1.73481L23.5657 1.43138L24 1.43138L91.9978 1.43204L93.0645 1.43205L93.0645 2.49868L93.0656 61.6667L93.0656 62.1085L92.7532 62.4209L71.4198 83.7543L71.1074 84.0667L70.6656 84.0667L3 84.066L1.93334 84.066L1.93334 82.9994L1.93334 23Z" fill="#112054" fill-opacity="0.2" stroke="white" stroke-width="2.13333"/>
        </svg> `
    }

    const {placesFrame, timetableFrame, calendarFrame} = frames



    //Модальное окно: Служебные функции.

    // Установка заголовка модального окна. 
    const setModalTitle = subject => {
        let title = ''

        if (subject === 'Прочие подразделения') {
            title = 'прочими подразделениями'
        } else if (subject === 'НИО') {
            title = 'НИО'
        } else {
            title = 'Высшей школой'
        }
        return title
    }

    // Переключение модальных окон.
    function switchModals(currentModal, nextModal, activeClassName) {
        currentModal.classList.remove(activeClassName)
        nextModal.classList.add(activeClassName)
    }


    // Рендер элементов компонентов модальных окон. 
    function setControlItems(arr, frame, parentNode, control) {
        let str = ''

        arr.map(item => {
            str += `<div class="modal__${control}-item" data-${control}="${item}">
                <span>${item}</span>
                ${frame}
            </div>`
            
        })

        parentNode.innerHTML = str
    }
    

    // Установка активного элементоа по умолчанию.
    function setDefaultActiveControlItem(arr, parentNode, val, control) {
        arr.find((slot, index) => {
            if (slot === val) {
                parentNode[index].classList.add(`modal__${control}-item_active`)
                parentNode[index].querySelector(`.modal__${control}-item__frame`).classList.add('modal_show')
            }
        })
    }

    // Переключение активных элементов компонентов модальных окон.
    function toggleControlItems(controlItems, frames, item, control, activeFrameClassName = 'modal_show') {
        let activeClassName = `modal__${control}-item_active` 

        controlItems.forEach(i => i.classList.remove(activeClassName))
        item.classList.add(activeClassName)
        
        frames.forEach(f => f.classList.remove(activeFrameClassName))
        item.querySelector('svg').classList.add(activeFrameClassName)
    }

    // Скрытие модальных окон. 
    function closeModals() {
        overlay.classList.remove('overlay_show')
        modals.forEach(i => i.classList.remove('modal_show'))
    }



    //Модальное окно: Выбор места встречи.

    // Инициализация названий мест встречи.
    const placesData = [
        'Кабинет ректора',
        'Зал ученого совета',
        'Белый зал',
        'Малый зал'
    ]

    // Рендер списка мест встречи DOM. 
    setControlItems(placesData, placesFrame, places, 'place')

    // Инициализация мест встречи в DOM.
    const meetingPlaces          = modalLarge.querySelector('.modal__place-wrapper')
    const meetingPlaceItems      = modalLarge.querySelectorAll('.modal__place-item')
    const meetingPlaceItemFrames = modalLarge.querySelectorAll('.modal__place-item__frame')

    // Установка места встречи по умолчанию.
    setDefaultActiveControlItem(placesData, meetingPlaceItems, place, 'place')

    // Переключение активного места встречи.
    meetingPlaces.addEventListener('click', (evt) => {
        let target = evt.target.closest('div')

        if (!target.classList.contains('modal__place-item')) return 

        toggleControlItems(meetingPlaceItems, meetingPlaceItemFrames, target, 'place')
        place = target.dataset.place
    })


    //Модальное окно: Выбор времени совещания.

    // Инициализация временных слотов.
    const timeSlotsData = [
        '06:00', '06:10', '06:20', '06:30', '06:40', '06:50',
        '07:00', '07:10', '07:20', '07:30', '07:40', '07:50',
        '08:00', '08:10', '08:20', '08:30', '08:40', '08:50',
        '09:00', '09:10', '09:20', '09:30', '09:40', '09:50',
        '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
        '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
        '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
        '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
        '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
        '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
        '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
        '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
        '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
        '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
        '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
        '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
        '22:00', '22:10', '22:20', '22:30', '22:40', '22:50',
    ]

    // Рендер временных слотов в DOM. 
    setControlItems(timeSlotsData, timetableFrame, timetable, 'timetable')

    // Инициализация временных слотов в DOM.
    const timeSlots = timetable.querySelectorAll('.modal__timetable-item')
    const timeSlotsFrames = modalLarge.querySelectorAll('.modal__timetable-item__frame')

    // Установка временного слота по умолчанию.
    setDefaultActiveControlItem(timeSlotsData, timeSlots, time, 'timetable')

    // Переключение активного временного слота.
    timetable.addEventListener('click', (evt) => {
        let target = evt.target.closest('div')

        if (!target.classList.contains('modal__timetable-item')) return 

        toggleControlItems(timeSlots, timeSlotsFrames, target, 'timetable')
        time = target.dataset.timetable
    })



    //Модальное окно: Выбор даты совещания.

    // Инициализация параметров календаря.
    let month, year, date, currentDay
    let dFirstMonth = 1
    let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    // Инициализация DOM элемента в который будет рендерится сетка календаря.
    let calendarBody = document.querySelector('.modal__calendar-body')

    // Инициализация кнопок переключения месяца календаря.
    let arrowBtns = document.querySelectorAll('.modal__calendar-arrow__btn')
    
    // Ф-ия устанавливает текущее значение текущий даты.
    function calendarInit() {
        month = new Date().getMonth()
        year = new Date().getFullYear()
        date = new Date()
        currentDay = new Date().getDate()
    }

    // Ф-ия рендерит дни недели в шапку календаря.
    function setCalendarDays() {
        let str = ''
        days.map(d => {
            str += `<td>${d}</td>`
        })
        document.querySelector('.modal__calendar-days').innerHTML = str
    }

    // Ф-ия рендерит месяц в шапку календаря.
    function setCalendarMonths() {
        let currentMonth = months[month]
        document.querySelector('.modal__calendar-month').innerHTML = currentMonth
    }

    // Ф-ия рендерит год в шапку календаря.
    function setCalendarYear() {
        document.querySelector('.modal__calendar-year').innerHTML = year
    }
 
    // Ф-ия возвращает представление месяца в виде массива данных, 
    // где каждая неделя - это вложеный массив объектов, представляющих дни месяца,
    // имеющих поле "index" (число месяца). 
    // Опционально: Элемент, занчение поля "index" которого, соответствует 
    // значению переменной "currentDay" будет иметь поле "mark" со значением "today" 
    function calendar() {
        let days = [];
        let day;
        let week = 0;

        days[week] = [];
        let dLast = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i <= dLast; i++) {
            if (new Date(year, month, i).getDay() != dFirstMonth) {
                day = { index: i }

                if (day.index === currentDay) {
                    day.mark = 'today'
                }
                days[week].push(day)
            }
            else {
                week++;
                days[week] = [];
                day = { index: i }
                days[week].push(day)
            }
            if (day.index === currentDay) {
                day.mark = 'today'
            }
        }
        if (days[0].length > 0) {
            for (let i = days[0].length; i < 7; i++) {
                days[0].unshift('')
            }
        }
        return days
    }


    // Ф-ия возвращает содержимое одной клетки календаря.
    const dayCell = day => {
        return `<span>${day}</span>${calendarFrame}`
    }

    // Ф-ия рендерит календарь в DOM.
    function setCalendarBody() {
        calendarBody.innerHTML = ''

        calendar().map(week => {
            let tr = '<tr>'

            week.map((day, i) => {
                let mark = day.mark ? 'today' : null

                tr += `<td class="day-cell ${mark}"> ${ day.index ? dayCell(day.index)  : ''}</td>`
                if (week[i - 1] == week.length) tr += '</tr>'
            })
            calendarBody.innerHTML += tr
        })
    }

    // Ф-ия обновляет календарь (вызывает рендер при изменении даты или при первичной инициализации).
    function updateCalendar() {
        setTimeout(() => {
            setCalendarBody()
            setCalendarCellsClick()
        }, 0)
    }

    // Ф-ия вызывает обновление календаря, устанавливает значение вобронной даты в поле "date" объекта "msg".
    function changeDay(day) {
        date.setDate(day)
        currentDay = date.getDate()
        updateCalendar()
        msg.payload.date = day
    }

    // Ф-ия описывает поведение переключении месяца вперед.
    function increase() {
        month++
        if (month > 11) {
            month = -1
            month++
            year++
            setCalendarYear()
        }
    }

    // Ф-ия описывает поведение переключении месяца назад.
    function decresase() {
        month--
        if (month < 0) {
            month = 12
            month--
            year--
            setCalendarYear()
        }
    }

    // Ф-ия вызывает изменение календаря при переключении месяца.
    function changeMonth(btn) {
        if (btn.classList.contains('increase')) {
            increase()
        } else {
            decresase()
        }
        setCalendarMonths()
        updateCalendar()
    }
    
    // Навешивание события клика на кнопки переключения месяца календаря.
    arrowBtns.forEach(btn => btn.addEventListener('click', () => changeMonth(btn)))

    // Навешивание события клика отрендеренные клетки календаря.
    function setCalendarCellsClick() {
        const calendarCells = calendarBody.querySelectorAll('.day-cell span')

        calendarCells.forEach(elem => elem.addEventListener('click', () => {
            changeDay(elem.textContent)
        }))
    }
    
    function modalCalendar() {
        calendarInit()
        setCalendarDays()
        setCalendarMonths()
        setCalendarYear()
        setCalendarBody()
        setCalendarCellsClick()   
    }

    modalCalendar()
    


    // Модальное окно: События/Отправка данных.

    // Скрытие модальных окон при клике на подложку.
    overlay.addEventListener('click', () => {
        closeModals()
    })

    // Переключение модального окна.
    selectReportBtn.addEventListener('click', () => {
        switchModals(modalMedium, modalLarge, 'modal_show')
    })

    // Отправка уведомления текущих показателях, переключение модального окна.
    selectMeetingBtn.addEventListener('click', () => {
        msg.type = 'report'
        msg.payload = unit
        switchModals(modalLarge, modalMedium, 'modal_show')
    })

    // Отправка уведомления о сборе совещания. 
    modalSubmit.addEventListener('click', () => {
        msg.type = 'meeting'
        msg.payload = {}
        msg.payload.id = unit.id
        msg.payload.name = unit.name
        msg.payload.date = date
        msg.payload.time = time
        msg.payload.place = place
        switchModals(modalLarge, modalSmall, 'modal_show')
    })


    // Отмена отправки данных.
    modalCancelled.forEach(i => {
        i.addEventListener('click', () => closeModals())
    })

    // Подтверждение отправки данных.
    modalConfirm.forEach(i => {
        i.addEventListener('click', () => {
            closeModals()
            console.log(msg)
            //..
        })
    })




    // *** МЕНЮ ***

    // ф-ия создающая блок меню.
    const menuItem = item => {
        const { name, color, id, plan, fact, isIcrease } = item

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
                    ${setProgressbar(id, fact, isIcrease, 'menu')}

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
        `
    }

    // ф-ия выводит меню на страницу.
    function setMenu(data) {
        let out = document.querySelector('.plan__tabcontent-block__wrap_menu')
        let menuResult = ''

        data.map(item => {
            menuResult += menuItem(item)
        })

        out.innerHTML = menuResult
    }

    setMenu(planData)

    // Инициализация DOM элементов меню. 
    const menuBlocks = document.querySelectorAll('.plan__menu-block')
    const menuDiagramBoxes = document.querySelectorAll('.diagram-box_menu')

    // Анимация меню при клике на блок.
    const setLinesSelection = () => {
        menuBlocks.forEach(i => {
            let line = i.children[0].children[0]
            let rect = i.children[0].children[1]

            line.setAttribute('width', '10%')
            rect.setAttribute('x', '10%')
        })
    }

    // Анимация меню по умолчанию или при сбросе параметров ввода.
    const setLinesDefault = () => {
        let array = []

        planData.map(partner => {

            if (partner.items) {
                array.push(partner.items.length)
            } else {
                array.push(0)
            }
        })

        menuBlocks.forEach((i, index) => {
            let line = i.children[0].children[0]
            let rect = i.children[0].children[1]

            let value = array[index] + 10

            value = value > 10 ? value : 10
            value = value > 90 ? value = 90 : value

            line.setAttribute('width', `${value}%`)
            rect.setAttribute('x', `${value}%`)
        })
    }

    setLinesDefault(planData)

    // Клик на элемент меню.
    menuBlocks.forEach(elem => {
        elem.addEventListener('click', function (e) {
            let id = +elem.getAttribute('data-id')

            // Открытие модалного окна (собрать совещание).
            if (e.target.className == 'plan__menu-block__alarm') {
                overlay.classList.add('overlay_show')
                modalLarge.classList.add('modal_show')
                if (id !== undefined) {
                    planData.find(partner => {
                        if (partner.items && partner.id == id) {
                            unit = partner
                            calendarInit()
                            modalSubject.textContent = setModalTitle(partner.name)
                        }
                    })
                }
            }
            // Логика связанная с непосредственным выбором элемента меню.
            else {
                // Анимация линии.
                setLinesSelection()

                let line = this.children[0].children[0]
                let rect = this.children[0].children[1]
                let title = this.children[1].children[0].textContent

                line.setAttribute('width', '100%')
                rect.setAttribute('x', '100%')

                // Установка заголовка.
                setTitle(title)

                // Рендер контента.
                setContent(getSortData(planData, id))

                // Отображение диаграммы. 
                menuBlocks.forEach(b => b.classList.remove('plan__menu-block_opened'))
                menuDiagramBoxes.forEach(b => b.innerHTML = '')
                elem.classList.add('plan__menu-block_opened')
                showChart(elem, id, planData, 'menu')
            }

        })
    })


    // Сброс фильтра.
    document.querySelector('.header__link_get-all-plan').addEventListener('click', () => {
        setContent(getSortData(planData))
        setTitle(defaultTitle)
        setLinesDefault()
        menuBlocks.forEach(b => b.classList.remove('plan__menu-block_opened'))
        menuDiagramBoxes.forEach(b => b.innerHTML = '')
    })



    // *** СОРТИРОВКА ***

    let sortData = []

    const search = array => {
        array.items.map(item => {
            item.color = array.color
            sortData.push(item)
        })
    }

    // Сортировка массива данных. 
    function getSortData(data, id) {
        sortData = []

        // Сортировка при выборе категории в меню.
        if (id !== undefined) {
            data.find(partner => {
                if (partner.items && partner.id == id) {
                    search(partner)
                }
            })
        }
        // Сортировка по умолчанию.
        else {
            data.map(partner => {
                if (partner.items) {
                    search(partner)
                }
            })
        }
        // Установка подзаголовка.
        setSubtitle(sortData.length)

        return sortData
    }



    // *** ЭЛЕМЕНТ СПИСКА ***

    // Класс генерирующий отдельный блок контента со списком элементов выбранной категории. 
    class Partner {
        constructor(array, modifier) {
            this.array = array,
                this.className = 'plan__tabcontent-block__wrap',
                this.modifier = modifier,
                this.parent = document.querySelector(`.plan__tabcontent-block_${this.modifier}`),
                this.count = this.array.length
        }

        get length() {
            let str = ''
            for (let i = 0; i < this.array.length; i++) {
                str += this.array[i].name
            }
            return str.length
        }

        bg(index) {
            let bgOffsetModifier = ''
            if (index > 0 && index < 3) {
                bgOffsetModifier = 'middle'
            }

            return `
                <svg class="plan__tabcontent-block__bg plan__tabcontent-block__bg_${bgOffsetModifier} hide" viewBox="0 0 1269 675" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-outside" maskUnits="userSpaceOnUse" x="0" y="0" width="1269" height="675" fill="black">
                        <rect fill="white" width="1269" height="675"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 33.8009V334.547V619.393L44 654.828H702.5L723.5 672.192L897 673H1155L1176 654.828H1215L1267 610.307V334.547V35.6181L1233 5.6344H1028.5L1003 28.8036H441.5L415 5.6344H329L315.5 18.3548H268L249 2H39L2 33.8009Z"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 33.8009V334.547V619.393L44 654.828H702.5L723.5 672.192L897 673H1155L1176 654.828H1215L1267 610.307V334.547V35.6181L1233 5.6344H1028.5L1003 28.8036H441.5L415 5.6344H329L315.5 18.3548H268L249 2H39L2 33.8009Z" fill="#1A358F" fill-opacity="0.98"/>
                    <path d="M2 33.8009L0.696371 32.2842L0 32.8827V33.8009H2ZM2 619.393H0V620.322L0.710305 620.921L2 619.393ZM44 654.828L42.7103 656.357L43.269 656.828H44V654.828ZM702.5 654.828L703.774 653.287L703.22 652.828H702.5V654.828ZM723.5 672.192L722.226 673.733L722.776 674.188L723.491 674.192L723.5 672.192ZM897 673L896.991 675H897V673ZM1155 673V675H1155.75L1156.31 674.512L1155 673ZM1176 654.828V652.828H1175.25L1174.69 653.316L1176 654.828ZM1215 654.828V656.828H1215.74L1216.3 656.347L1215 654.828ZM1267 610.307L1268.3 611.826L1269 611.227V610.307H1267ZM1267 35.6181H1269V34.7153L1268.32 34.1181L1267 35.6181ZM1233 5.6344L1234.32 4.13437L1233.76 3.6344H1233V5.6344ZM1028.5 5.6344V3.6344H1027.73L1027.16 4.15416L1028.5 5.6344ZM1003 28.8036V30.8036H1003.77L1004.34 30.2839L1003 28.8036ZM441.5 28.8036L440.184 30.3093L440.749 30.8036H441.5V28.8036ZM415 5.6344L416.316 4.12873L415.751 3.6344H415V5.6344ZM329 5.6344V3.6344H328.206L327.628 4.17878L329 5.6344ZM315.5 18.3548V20.3548H316.294L316.872 19.8104L315.5 18.3548ZM268 18.3548L266.695 19.8706L267.258 20.3548H268V18.3548ZM249 2L250.305 0.484212L249.742 0H249V2ZM39 2V0H38.2586L37.6964 0.483243L39 2ZM4 334.547V33.8009H0V334.547H4ZM4 619.393V334.547H0V619.393H4ZM45.2897 653.299L3.2897 617.864L0.710305 620.921L42.7103 656.357L45.2897 653.299ZM702.5 652.828H44V656.828H702.5V652.828ZM724.774 670.65L703.774 653.287L701.226 656.369L722.226 673.733L724.774 670.65ZM897.009 671L723.509 670.192L723.491 674.192L896.991 675L897.009 671ZM1155 671H897V675H1155V671ZM1174.69 653.316L1153.69 671.488L1156.31 674.512L1177.31 656.34L1174.69 653.316ZM1215 652.828H1176V656.828H1215V652.828ZM1265.7 608.787L1213.7 653.309L1216.3 656.347L1268.3 611.826L1265.7 608.787ZM1265 334.547V610.307H1269V334.547H1265ZM1265 35.6181V334.547H1269V35.6181H1265ZM1231.68 7.13443L1265.68 37.1182L1268.32 34.1181L1234.32 4.13437L1231.68 7.13443ZM1028.5 7.6344H1233V3.6344H1028.5V7.6344ZM1004.34 30.2839L1029.84 7.11464L1027.16 4.15416L1001.66 27.3234L1004.34 30.2839ZM441.5 30.8036H1003V26.8036H441.5V30.8036ZM413.684 7.14007L440.184 30.3093L442.816 27.298L416.316 4.12873L413.684 7.14007ZM329 7.6344H415V3.6344H329V7.6344ZM316.872 19.8104L330.372 7.09002L327.628 4.17878L314.128 16.8991L316.872 19.8104ZM268 20.3548H315.5V16.3548H268V20.3548ZM247.695 3.51579L266.695 19.8706L269.305 16.839L250.305 0.484212L247.695 3.51579ZM39 4H249V0H39V4ZM3.30363 35.3177L40.3036 3.51676L37.6964 0.483243L0.696371 32.2842L3.30363 35.3177Z" fill="white" mask="url(#path-1-outside)"/>
                </svg>
            `
        }

        // декоративный разделитель.

        divider() {
            return `
                <svg class="plan__tabcontent-block__divider" viewBox="0 0 800 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.1" x="4.07481" y="21.4018" width="17.3267" height="17.3267" transform="rotate(-90 4.07481 21.4018)" stroke="white" stroke-width="8.14962"/>
                    <rect opacity="0.1" x="516.938" y="15.4238" width="14.3771" height="14.3771" transform="rotate(-45 516.938 15.4238)" stroke="white" stroke-width="6.76226"/>
                    <rect opacity="0.1" x="785.288" y="29.4766" width="8.22526" height="8.22526" transform="rotate(-45 785.288 29.4766)" stroke="white" stroke-width="3.86875"/>
                    <rect opacity="0.1" x="259.308" y="27.4766" width="6.78323" height="6.78323" transform="rotate(-45 259.308 27.4766)" stroke="white" stroke-width="3.1905"/>
                </svg>
            `
        }

        // Mетод создающий отдельный элемент списка.
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
                    ${setProgressbar(this.modifier + '-' + index, Math.ceil(item.fact), item.isIncrease)}
         
                    <div class="plan__tabcontent-block__info plan__tabcontent-block__info_bottom">

                        ${this.divider()}
                       
                        <div class="plan__tabcontent-block__current-plan">
                            <span class="plan__tabcontent-block__current-plan-value">${item.plan}</span>
                            <span class="plan__tabcontent-block__current-plan-descr">тыс.руб.</span>
                        </div>
                    </div>

                    ${index <= 2 ? '<div class="diagram-box_list"></div>' : ''} 
                </div>
            `
        }

        // Рендер ф-ия.
        render() {
            const element = document.createElement('div')
            element.classList.add(this.className)

            if (this.array.length > 3) {
                element.classList.add(this.className)
            }
            else {
                element.classList.add(this.className)
                element.classList.add('plan__tabcontent-block__wrap_min-content')
            }
            let str = ''
            this.array.forEach((i, index) => str += this.createBlockItem(i, index))
            element.innerHTML = ''
            element.innerHTML = str
            this.parent.append(element)
        }

        // Рендер пустого блока.
        renderEmptyBlock() {
            const element = document.createElement('div')
            element.classList.add(this.className)
            this.parent.innerHTML = ''
        }
    }

    // *** Табы (страницы) ***


    // Создание табов.
    function createPages(modifier) {
        const tabContent = document.createElement('div')
        tabContent.classList.add('plan__tabcontent', `plan__tabcontent_p${modifier}`)

        document.querySelector('.plan__tabcontainer').append(tabContent)
    }

    function setPages(pages) {
        if (pages === 0) {
            createPages(1)
        }
        for (let i = 1; i <= pages; i++) {
            createPages(i)
        }
    }

    // Oтображение текущего таба и скрытие прочих.
    function showCurrentPage(tabsContent, page = 0) {
        tabsContent.forEach(i => i.classList.add('hide'))
        tabsContent[page].classList.remove('hide')
    }

    // Создание и вывод на страницу контейнеров для контента. 
    const setPage = pageNumber => {
        return `
            <div class="plan__tabcontent-wrap">
                <div class="plan__tabcontent-element">
                    <div class="plan__tabcontent-block plan__tabcontent-block_p${pageNumber}-m">
                            <svg class="plan__tabcontent-block-bg" viewBox="0 0 1269 1703" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00024 1631.95L1.0001 99.5907L1.0001 36.1923L38.5906 0.999875L248.186 0.999856L267.551 19.1292L315.394 19.1292L329.063 5.2656L414.496 5.26559L440.695 30.8599L1003.41 30.8599L1029.61 5.26554L1233.83 5.26552L1268 38.325L1268 1641.55L1225.85 1681L565.997 1681L544.354 1701.27L113.772 1701.27L92.1288 1681L53.3992 1681L1.00024 1631.95Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-width="2"/>
                        </svg>
                        <div class="plan__tabcontent-block__wrap plan__tabcontent-block__wrap_p${pageNumber}-m"></div>
                    </div>		
                </div>

                <div class="plan__tabcontent-element">
                    <div class="plan__tabcontent-block plan__tabcontent-block_p${pageNumber}-r">
                        <svg class="plan__tabcontent-block-bg" viewBox="0 0 1269 1703" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00024 1631.95L1.0001 99.5907L1.0001 36.1923L38.5906 0.999875L248.186 0.999856L267.551 19.1292L315.394 19.1292L329.063 5.2656L414.496 5.26559L440.695 30.8599L1003.41 30.8599L1029.61 5.26554L1233.83 5.26552L1268 38.325L1268 1641.55L1225.85 1681L565.997 1681L544.354 1701.27L113.772 1701.27L92.1288 1681L53.3992 1681L1.00024 1631.95Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-width="2"/>
                        </svg>

                        <div class="plan__tabcontent-block__wrap plan__tabcontent-block__wrap_p${pageNumber}-r"></div>
                    </div>	
                </div>
            </div>
        `
    }

    // *** ПАГИНАЦИЯ ***

    // Инициализация кнопок-переключателей.
    const btn = num => {
        return `
            <div class="plan__tabitem plan__tabitem-btn ${num === 1 ? 'plan__tabitem_active' : null}" data-page=${num}>
                <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
                </svg>
                <div class="plan__tabitem-value">${num}</div>	
            </div>
        `
    }

    const next = `
        <div class="plan__tabitem plan__tabitem-prev">
            <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
            </svg>
            <div class="plan__tabitem-value">&lt;</div>	
        </div>
    `

    const prev = `
        <div class="plan__tabitem plan__tabitem-next">
            <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"  stroke="#217AFF"/>	
            </svg>
            <div class="plan__tabitem-value">&gt;</div>	
        </div>
    `

    // *** КОНТЕНТ ***

    // Ф-ия выполняет отрисовку контента на странице.
    function setContent(data) {

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
    }

    setContent(getSortData(planData))
})


