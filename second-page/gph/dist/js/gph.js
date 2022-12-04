document.addEventListener('DOMContentLoaded', () => {
    // Server data exemple. 

    const gphData = [
        {
            id: 1,
            name: 'A',
            color: 'green',
            inWork: 15,
            expired: 0,
            items: [
                {
                    id: 11,
                    name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса») 1',
                    inWork: 0,
                    expired: 0,
                },
                {
                    id: 12,
                    name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса») 2',
                    inWork: 10,
                    expired: 0,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 10,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 10,
                        },
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 10,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 10,
                        },
                    ]
                   
                },
                {
                    id: 13,
                    name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса») 3 ',
                    inWork: 0,
                    expired: 0,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 10,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 10,
                        },
                    ]
                   
                },
                {
                    id: 14,
                    name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса») 4  ',
                    inWork: 5,
                    expired: 0,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 10,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 10,
                        },
                    ]
                    
                }
            ]
        },
        {
            id: 2,
            name: 'Б',
            color: '#EF8E8E',
            inWork: 5,
            expired: 3,
            items: [
                {
                    id: 21,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                    inWork: 5,
                    expired: 3,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 0,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 10,
                        },
                    ]
                },
            ]
        },
        {
            id: 3,
            name: 'B',
            color: 'yellow',
            inWork: 3,
            expired: 0,
            items: [
                {
                    id: 31,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы»1',
                    inWork: 2,
                    expired: 2,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 0,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 0,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 0,
                        },

                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 0,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 0,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 0,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Rванов Иван Иванович',
                            daysLeft: 0,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 0,
                        },
                    ]
                },
                {
                    id: 32,
                    name: 'Базовая кафедра» 2',
                    inWork: 2,
                    expired: 1,
                    projects: [
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Иванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2016',
                            workerFullName: 'Михалков Никита Сергеевич',
                            daysLeft: 0,
                        },
                    ]
                },
                {
                    id: 35,
                    name: 'Базовая кафедра «!!!» 3',
                    inWork: 2,
                    expired: 1,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Иванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2016',
                            workerFullName: 'Михалков Никита Сергеевич',
                            daysLeft: 0,
                        },
                    ]
                },
                {
                    id: 33,
                    name: 'Базовая кафедра 4',
                    inWork: 3,
                    expired: 10,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Иванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2016',
                            workerFullName: 'Михалков Никита Сергеевич',
                            daysLeft: 0,
                        },
                    ]
                },
                {
                    id: 34,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» 5',
                    inWork: 3,
                    expired: 10,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Иванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2016',
                            workerFullName: 'Михалков Никита Сергеевич',
                            daysLeft: 0,
                        },
                    ]
                },
                {
                    id: 35,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                    inWork: 3,
                    expired: 10,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Иванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2016',
                            workerFullName: 'Михалков Никита Сергеевич',
                            daysLeft: 0,
                        },
                    ]
                },
                {
                    id: 36,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                    inWork: 3,
                    expired: 10,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Иванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2016',
                            workerFullName: 'Михалков Никита Сергеевич',
                            daysLeft: 0,
                        },
                    ]
                },
                {
                    id: 37,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» e',
                    inWork: 3,
                    expired: 10,
                    projects: [
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Иванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2016',
                            workerFullName: 'Михалков Никита Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Иванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2016',
                            workerFullName: 'Михалков Никита Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Иванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',    
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2016',
                            workerFullName: 'Михалков Никита Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2021',
                            workerFullName: 'Иванов Иван Иванович',
                            daysLeft: 6,
                        },
                        {
                            startDate: '16.03.2019',
                            workerFullName: 'Сидоров Виктор Андреевич',
                            daysLeft: 7,
                        },
                        {
                            startDate: '11.08.2017',
                            workerFullName: 'Петров Алексей Сергеевич',
                            daysLeft: 0,
                        },
                        {
                            startDate: '20.05.2016',
                            workerFullName: 'Михалков Никита Сергеевич',
                            daysLeft: 0,
                        },
                    ]
                },
            ]
        },
        {
            id: 4,
            name: 'Центр социально-экономических проектов',
            color: '#627DAE',
            inWork: 3,
            expired: 11,
            items: []
        },
        {
            id: 5,
            name: 'Институт бизнеса и управленческого образования "Business and executive education"',
            color: '#6C38FF',
            inWork: 3,
            expired: 7,
        },
        {
            id: 6,
            name: 'Московский приборостроительный техникум',
            color: '#FB9B2B',
            inWork: 3,
            expired: 2,
            items: []
        },  
        {
            id: 7,
            name: 'Московский приборостроительный техникум',
            color: '#FB9B2B',
            inWork: 3,
            expired: 2,
            items: []
        },  
        {
            id: 8,
            name: 'Московский приборостроительный техникум',
            color: '#FB9B2B',
            inWork: 3,
            expired: 2,
            items: []
        },  
        {
            id: 9,
            name: 'Московский приборостроительный техникум',
            color: '#FB9B2B',
            inWork: 3,
            expired: 2,
            items: []
        },  
        {
            id: 10,
            name: 'Московский приборостроительный техникум',
            color: '#FB9B2B',
            inWork: 3,
            expired: 2,
            items: []
        },  
        {
            id: 11,
            name: 'Центр социально-экономических проектов',
            color: '#627DAE',
            inWork: 3,
            expired: 11,
            items: []
        },
        {
            id: 12,
            name: 'Институт бизнеса и управленческого образования "Business and executive education"',
            color: '#6C38FF',
            inWork: 3,
            expired: 7,
        },
        {
            id: 13,
            name: 'Московский приборостроительный техникум',
            color: '#FB9B2B',
            inWork: 3,
            expired: 2,
            items: []
        },  
        {
            id: 14,
            name: 'Московский приборостроительный техникум',
            color: '#FB9B2B',
            inWork: 3,
            expired: 2,
            items: []
        },  
        {
            id: 15,
            name: 'Московский приборостроительный техникум',
            color: '#FB9B2B',
            inWork: 3,
            expired: 2,
            items: []
        },  
        {
            id: 16,
            name: 'Московский приборостроительный техникум',
            color: '#FB9B2B',
            inWork: 3,
            expired: 2,
            items: []
        },  
        {
            id: 17,
            name: 'Московский приборостроительный техникум',
            color: '#FB9B2B',
            inWork: 3,
            expired: 2,
            items: []
        },  
        
        
    ]



    // *** ЗАГОЛОВОК ***

    // ф-ия для установки заголовка.
    const setTitle = title => document.querySelector('.gph__header-title').textContent = title

    // ф-ия для установки в подзаголовок кол-ва элементов в отображемом списке.
    const setSubtitle = num => {
        document.querySelector('.gph__header-subtitle-num').innerHTML = num +  `<span> в работе</span>`
    }

    // Установка заголовка по умолчанию.
    const defaultTitle = 'Сводные данные по договорам ГПХ'
    setTitle(defaultTitle)

    // *** МЕНЮ ***

    // ф-ия создающая блок меню.
    const menuItem = item => {
        const { name, color, id, expired} = item

        return `
            <div class="gph__menu-block" data-id=${id}>
                <svg class="gph__graphiс" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect class="gph__graphiс-row" height="5%"  width="10%" fill="${color}" x="3" y="0.4" />
                    <rect  class="gph__graphiс-right-rect" stroke="${color}" x="10%" y="0"  fill="white"/>
                    <rect  class="gph__graphiс-left-rect" stroke="${color}" x="0" y="0" fill="transparent"/>
                </svg>
                <div class="gph__menu-block__wrap">
                    <div class="gph__menu-block__descr">${name}</div>
                    <sapn class="gph__menu-block__value"> ${expired > 0 ? expired : ''} </sapn>
                </div>
            </div>
        `
    }

    // ф-ия выводит меню на страницу.
    function setMenu(data) {
        
        let out = document.querySelector('.gph__tabcontent-block__wrap_menu')
        let menuResult = ''

        data.sort(byField('expired')).map(item => {
            menuResult += menuItem(item)
        })

        out.innerHTML = menuResult
    }

    setMenu(gphData)

    // Инициализация DOM элементов меню. 
    const menuBlocks = document.querySelectorAll('.gph__menu-block')
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

        gphData.map(partner => {

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

            line.setAttribute('width', `10%`)
            rect.setAttribute('x', `10%`)
        })
    }

    setLinesDefault(gphData)

    // Клик на элемент меню.
    menuBlocks.forEach(elem => {
        elem.addEventListener('click', function (e) {
            let id = +elem.getAttribute('data-id')

            // Логика связанная с непосредственным выбором элемента меню.
        
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
                setContent(getSortData(gphData, id))

                // Отображение диаграммы. 
                menuBlocks.forEach(b => b.classList.remove('gph__menu-block_opened'))
                menuDiagramBoxes.forEach(b => b.innerHTML = '')
                elem.classList.add('gph__menu-block_opened')
                // showChart(elem, id, gphData, 'menu')
            

        })
    })


    // Сброс фильтра.
    document.querySelector('.header__link_get-all-gph').addEventListener('click', () => {
        setContent(getSortData(gphData))
        setTitle(defaultTitle)
        setLinesDefault()
        menuBlocks.forEach(b => b.classList.remove('gph__menu-block_opened'))
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

    function byField(field) {
        return (a, b) => a[field] < b[field] ? 1 : -1
    }


    // Сортировка массива данных. 
    function getSortData(data, id) {
        sortData = []
        let sumInWork = 0 

        // Сортировка при выборе категории в меню.
        if (id !== undefined) {
            data.find(partner => {
                if (partner.items && partner.id == id) {
                    search(partner)
                    sumInWork += partner.inWork
                }
            })
        }
        // Сортировка по умолчанию.
        else {
            data.map(partner => {
                if (partner.items) {
                    search(partner)
                }
                sumInWork += partner.inWork
            })
        }

        

        // Установка подзаголовка.
        setSubtitle(sumInWork)
        
        return sortData.sort(byField('expired'))
    }



    // *** ЭЛЕМЕНТ СПИСКА ***

    // Класс генерирующий отдельный блок контента со списком элементов выбранной категории. 
    class Partner {
        constructor(array, modifier) {
            this.array = array,
                this.className = 'gph__tabcontent-block__wrap',
                this.modifier = modifier,
                this.parent = document.querySelector(`.gph__tabcontent-block_${this.modifier}`),
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
                <svg class="gph__tabcontent-block__bg gph__tabcontent-block__bg_${bgOffsetModifier} hide" viewBox="0 0 1269 675" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <svg class="gph__tabcontent-block__divider" viewBox="0 0 800 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.1" x="4.07481" y="21.4018" width="17.3267" height="17.3267" transform="rotate(-90 4.07481 21.4018)" stroke="white" stroke-width="8.14962"/>
                    <rect opacity="0.1" x="516.938" y="15.4238" width="14.3771" height="14.3771" transform="rotate(-45 516.938 15.4238)" stroke="white" stroke-width="6.76226"/>
                    <rect opacity="0.1" x="785.288" y="29.4766" width="8.22526" height="8.22526" transform="rotate(-45 785.288 29.4766)" stroke="white" stroke-width="3.86875"/>
                    <rect opacity="0.1" x="259.308" y="27.4766" width="6.78323" height="6.78323" transform="rotate(-45 259.308 27.4766)" stroke="white" stroke-width="3.1905"/>
                </svg>
            `
        }

        inWork(value) {
            return `
            <div class="gph__tabcontent-block__in-work">
                <span class="gph__tabcontent-block__title">В работе</span>
                <span class="gph__tabcontent-block__value">${value}</span>
            </div>
            `
        }

        expired(value) {
            return `
            <span  class="gph__tabcontent-block__vertical-divider"></span>
            <div class="gph__tabcontent-block__expired">
                <span class="gph__tabcontent-block__title">Просрочено</span>
                <span class="gph__tabcontent-block__value">${value}</span>
            </div>
            `
        }

        // Mетод создающий отдельный элемент списка.
        createBlockItem(item, index) {

            return `
                <div class="gph__tabcontent-block__item ${item.expired > 0 ? 'gph__tabcontent-block__item_is-expired' : ''}" data-id="${item.id}">
                
                    ${index === 3 ? '<div class="diagram-box_list"></div>' : ''} 

                    ${this.bg(index)}
                    
                    <div class="gph__tabcontent-block__info">
                        <svg class="gph__tabcontent-block__mark" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect stroke="${item.color}" x="0" y="0" fill="white"/>
                        </svg>
                        <div class="gph__tabcontent-block__descr">${item.name}</div>
                        <div class="gph__tabcontent-block__info">
                            ${item.inWork > 0 ? this.inWork(item.inWork) : ''}
                            ${item.expired > 0 ? this.expired(item.expired) : ''}
                        </div>
                    </div>
             
         
                    <div class="gph__tabcontent-block__info gph__tabcontent-block__info_bottom">

                        ${this.divider()}
                       
                        
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
                element.classList.add('gph__tabcontent-block__wrap_min-content')
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
        tabContent.classList.add('gph__tabcontent', `gph__tabcontent_p${modifier}`)

        document.querySelector('.gph__tabcontainer').append(tabContent)
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
            <div class="gph__tabcontent-wrap">
                <div class="gph__tabcontent-element">
                    <div class="gph__tabcontent-block gph__tabcontent-block_p${pageNumber}-m">
                            <svg class="gph__tabcontent-block-bg" viewBox="0 0 1269 1703" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00024 1631.95L1.0001 99.5907L1.0001 36.1923L38.5906 0.999875L248.186 0.999856L267.551 19.1292L315.394 19.1292L329.063 5.2656L414.496 5.26559L440.695 30.8599L1003.41 30.8599L1029.61 5.26554L1233.83 5.26552L1268 38.325L1268 1641.55L1225.85 1681L565.997 1681L544.354 1701.27L113.772 1701.27L92.1288 1681L53.3992 1681L1.00024 1631.95Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-width="2"/>
                        </svg>
                        <div class="gph__tabcontent-block__wrap gph__tabcontent-block__wrap_p${pageNumber}-m"></div>
                    </div>		
                </div>

                <div class="gph__tabcontent-element">
                    <div class="gph__tabcontent-block gph__tabcontent-block_p${pageNumber}-r">
                        <svg class="gph__tabcontent-block-bg" viewBox="0 0 1269 1703" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00024 1631.95L1.0001 99.5907L1.0001 36.1923L38.5906 0.999875L248.186 0.999856L267.551 19.1292L315.394 19.1292L329.063 5.2656L414.496 5.26559L440.695 30.8599L1003.41 30.8599L1029.61 5.26554L1233.83 5.26552L1268 38.325L1268 1641.55L1225.85 1681L565.997 1681L544.354 1701.27L113.772 1701.27L92.1288 1681L53.3992 1681L1.00024 1631.95Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-width="2"/>
                        </svg>

                        <div class="gph__tabcontent-block__wrap gph__tabcontent-block__wrap_p${pageNumber}-r"></div>
                    </div>	
                </div>
            </div>
        `
    }

    // *** ПАГИНАЦИЯ ***

    // Инициализация кнопок-переключателей.
    const btn = num => {
        return `
            <div class="gph__tabitem gph__tabitem-btn ${num === 1 ? 'gph__tabitem_active' : null}" data-page=${num}>
                <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
                </svg>
                <div class="gph__tabitem-value">${num}</div>	
            </div>
        `
    }

    const next = `
        <div class="gph__tabitem gph__tabitem-prev">
            <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
            </svg>
            <div class="gph__tabitem-value">&lt;</div>	
        </div>
    `

    const prev = `
        <div class="gph__tabitem gph__tabitem-next">
            <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"  stroke="#217AFF"/>	
            </svg>
            <div class="gph__tabitem-value">&gt;</div>	
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

        const tabsContent = document.querySelectorAll('.gph__tabcontent')

        showCurrentPage(tabsContent)

        // Создание массива данных содержащих представление панели переключателей пагинации. 
        for (let i = 1; i <= pages; i++) {
            pagination.push(btn(i))
        }

        // Вывод пагинации на страниу, с последующим навешиванием прослушки клика 
        // на кнопки со стрелками стрелки и кнопки с номерами страниц.
        function innerPaginationToPage(pagination) {
            document.querySelector('.gph__tabheader-btns').innerHTML = ''
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

            document.querySelector('.gph__tabheader-btns').innerHTML = `
                ${result.join('')}
            `

            document.querySelector('.gph__tabitem-next').addEventListener('click', nextClick)
            document.querySelector('.gph__tabitem-prev').addEventListener('click', prevClick)
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
                document.querySelectorAll('.gph__tabitem-btn').forEach(i => {
                    i.classList.remove('gph__tabitem_active')
                    if (i.getAttribute('data-page') == currentPage) {
                        i.classList.add('gph__tabitem_active')
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

            document.querySelectorAll('.gph__tabitem-btn').forEach(i => {
                i.classList.remove('gph__tabitem_active')
                if (i.getAttribute('data-page') == currentPage) {
                    i.classList.add('gph__tabitem_active')
                }
            })

            showCurrentPage(tabsContent, currentPage - 1)
        }

        // Ф-ия переключает табы при нажатии на кнопку соответствующую порядковому номеру таба.
        function togglePage() {
            document.querySelectorAll('.gph__tabitem-btn').forEach(i => {
                i.addEventListener('click', (e) => {
                    document.querySelectorAll('.gph__tabitem-btn').forEach(item => {
                        item.classList.remove('gph__tabitem_active')
                    })

                    i.classList.add('gph__tabitem_active')
                    let pageNum = i.getAttribute('data-page')
                    currentPage = pageNum
                    flag = false
                    showCurrentPage(tabsContent, currentPage - 1)
                })
            })
        }

        document.querySelector('.gph__tabheader').addEventListener('selectstart', () => {
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
        let listItems = document.querySelectorAll('.gph__tabcontent-block__item')
        let listDiagramBoxes = document.querySelectorAll('.diagram-box_list')
        let listItemBgs = document.querySelectorAll('.gph__tabcontent-block__bg')

        // Отображение диаграммы.
        listItems.forEach(elem => {
            elem.addEventListener('click', () => {
                let id = +elem.getAttribute('data-id')
                overlay.classList.add('overlay_show')
                modalLarge.classList.add('modal_show')
                if (id !== undefined) {     
                    gphData.map(partner => {
                        if (partner.items) {
                            partner.items.find(item => {
                                if (item.id && item.id == id) {
                                    console.log(item)
                                    modalLarge.innerHTML = setModalBody(item)
                                }
                            })
                        }
                        
                    }) 
                }
                
                
            })
        })

        // Скрытие диаграммы.
        document.addEventListener('click', (e) => {
            elem = e.target.className

            if (elem == 'gph__wrapper' || elem == 'gph__tabcontent-wrap' || elem == 'gph__tabcontent-block__wrap gph__tabcontent-block__wrap_min-content' || elem == 'gph__header-title' || elem == 'gph__header' || elem == 'subtitle' || elem == 'gph__tabcontent gph__tabcontent_p1') {
                listItemBgs.forEach(bg => bg.classList.remove('show'))
                listDiagramBoxes.forEach(b => b.innerHTML = '')
            }
        })
    }


    // *** МОДАЛЬНОЕ ОКНО ***

    // Инициализация DOM элементов модального окна.
    const overlay  = document.querySelector('.overlay')
    const modals   = document.querySelectorAll('.modal') 
    const modalLarge  = document.querySelector('.modal_large')
    
    // Скрытие модальных окон при клике на подложку.
    overlay.addEventListener('click', () => {
        closeModals()
    })
  
    // Скрытие модальных окон. 
    function closeModals() {
        overlay.classList.remove('overlay_show')
        modals.forEach(i => i.classList.remove('modal_show'))
    }
    

    modalLarge.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('modal-close')) {
            closeModals()
        }
    })

    function inWork(value) {
        return `
        <div class="gph__tabcontent-block__in-work">
            <span class="gph__tabcontent-block__title">В работе</span>
            <span class="gph__tabcontent-block__value">${value}</span>
        </div>
        `
    }

    function expired(value) {
        return `
        <span  class="gph__tabcontent-block__vertical-divider"></span>
        <div class="gph__tabcontent-block__expired">
            <span class="gph__tabcontent-block__title">Просрочено</span>
            <span class="gph__tabcontent-block__value">${value}</span>
        </div>
        `
    }

    function projects(items) { 
        let sortItems = items.sort(byField('daysLeft')).reverse() 
        let out = ''
        console.log(sortItems)
        sortItems.map(i => {
           out += `<p>${i.startDate}</p><p>${i.workerFullName}</p><p class="days-left ${i.daysLeft <= 0 ? 'font-blue' : ''}">${i.daysLeft}</p>`
        })

        return out
    }

    function frame(expired, projects) {
        if (projects !== undefined && projects.length > 3) {
            document.querySelector('.modal').classList.add('frame-modal')
            return `
                <svg class="modal-bg" viewBox="0 0 1265 1431" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_1616_9132" maskUnits="userSpaceOnUse" x="-2" y="-2" width="1269" height="1433" fill="black">
                <rect fill="white" x="-2" y="-2" width="1269" height="1433"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 35V656V666V1369.5L42 1408.5H700.5L721.5 1427.61L895 1428.5H1153L1174 1408.5H1213L1265 1359.5V666V656V37L1231 4H1026.5L1001 29.5H439.5L413 4H327L313.5 18H266L247 0H37L0 35Z"/>
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 35V656V666V1369.5L42 1408.5H700.5L721.5 1427.61L895 1428.5H1153L1174 1408.5H1213L1265 1359.5V666V656V37L1231 4H1026.5L1001 29.5H439.5L413 4H327L313.5 18H266L247 0H37L0 35Z" fill="url(#paint0_linear_1616_9156)"/>
                <path d="M0 35L-1.3744 33.5471L-2 34.1388V35H0ZM0 1369.5H-2V1370.37L-1.3609 1370.97L0 1369.5ZM42 1408.5L40.6391 1409.97L41.2146 1410.5H42V1408.5ZM700.5 1408.5L701.846 1407.02L701.274 1406.5H700.5V1408.5ZM721.5 1427.61L720.154 1429.09L720.722 1429.61L721.49 1429.61L721.5 1427.61ZM895 1428.5L894.99 1430.5H895V1428.5ZM1153 1428.5V1430.5H1153.8L1154.38 1429.95L1153 1428.5ZM1174 1408.5V1406.5H1173.2L1172.62 1407.05L1174 1408.5ZM1213 1408.5V1410.5H1213.79L1214.37 1409.96L1213 1408.5ZM1265 1359.5L1266.37 1360.96L1267 1360.36V1359.5H1265ZM1265 37H1267V36.154L1266.39 35.5648L1265 37ZM1231 4L1232.39 2.56484L1231.81 2H1231V4ZM1026.5 4V2H1025.67L1025.09 2.58579L1026.5 4ZM1001 29.5V31.5H1001.83L1002.41 30.9142L1001 29.5ZM439.5 29.5L438.113 30.9411L438.694 31.5H439.5V29.5ZM413 4L414.387 2.55886L413.806 2H413V4ZM327 4V2H326.15L325.56 2.61173L327 4ZM313.5 18V20H314.35L314.94 19.3883L313.5 18ZM266 18L264.625 19.4519L265.203 20H266V18ZM247 0L248.375 -1.45191L247.797 -2H247V0ZM37 0V-2H36.2039L35.6256 -1.45294L37 0ZM2 656V35H-2V656H2ZM2 666V656H-2V666H2ZM2 1369.5V666H-2V1369.5H2ZM43.3609 1407.03L1.3609 1368.03L-1.3609 1370.97L40.6391 1409.97L43.3609 1407.03ZM700.5 1406.5H42V1410.5H700.5V1406.5ZM722.846 1426.13L701.846 1407.02L699.154 1409.98L720.154 1429.09L722.846 1426.13ZM895.01 1426.5L721.51 1425.61L721.49 1429.61L894.99 1430.5L895.01 1426.5ZM1153 1426.5H895V1430.5H1153V1426.5ZM1172.62 1407.05L1151.62 1427.05L1154.38 1429.95L1175.38 1409.95L1172.62 1407.05ZM1213 1406.5H1174V1410.5H1213V1406.5ZM1263.63 1358.04L1211.63 1407.04L1214.37 1409.96L1266.37 1360.96L1263.63 1358.04ZM1263 666V1359.5H1267V666H1263ZM1263 656V666H1267V656H1263ZM1263 37V656H1267V37H1263ZM1229.61 5.43516L1263.61 38.4352L1266.39 35.5648L1232.39 2.56484L1229.61 5.43516ZM1026.5 6H1231V2H1026.5V6ZM1002.41 30.9142L1027.91 5.41421L1025.09 2.58579L999.586 28.0858L1002.41 30.9142ZM439.5 31.5H1001V27.5H439.5V31.5ZM411.613 5.44114L438.113 30.9411L440.887 28.0589L414.387 2.55886L411.613 5.44114ZM327 6H413V2H327V6ZM314.94 19.3883L328.44 5.38827L325.56 2.61173L312.06 16.6117L314.94 19.3883ZM266 20H313.5V16H266V20ZM245.625 1.45191L264.625 19.4519L267.375 16.5481L248.375 -1.45191L245.625 1.45191ZM37 2H247V-2H37V2ZM1.3744 36.4529L38.3744 1.45294L35.6256 -1.45294L-1.3744 33.5471L1.3744 36.4529Z" fill="white" mask="url(#path-1-outside-1_1616_9156)"/>
                <defs>
                <linearGradient id="paint0_linear_1616_9156" x1="1267" y1="446.259" x2="2.00001" y2="446.259" gradientUnits="userSpaceOnUse">
                <stop stop-color="${expired <= 0 ? '#2479FD' : '#EF6B74'}"/>
                <stop offset="1" stop-color="#2479FD"/>
                </linearGradient>
                </defs>
                </svg>
            `
        }
        else {
            document.querySelector('.modal').classList.remove('frame-modal')
            return `
            <svg  class="modal-bg"  viewBox="0 0 1269 896" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_1616_9156" maskUnits="userSpaceOnUse" x="0" y="0" width="1269" height="896" fill="black">
                <rect fill="white" width="1269" height="896"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 37V521V548V834.5L44 873.5H702.5L723.5 892.61L897 893.5H1155L1176 873.5H1215L1267 824.5V548V521V39L1233 6H1028.5L1003 31.5H441.5L415 6H329L315.5 20H268L249 2H39L2 37Z"/>
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 37V521V548V834.5L44 873.5H702.5L723.5 892.61L897 893.5H1155L1176 873.5H1215L1267 824.5V548V521V39L1233 6H1028.5L1003 31.5H441.5L415 6H329L315.5 20H268L249 2H39L2 37Z" fill="url(#paint0_linear_1616_9156)"/>
                <path d="M2 37L0.6256 35.5471L0 36.1388V37H2ZM2 834.5H0V835.372L0.639098 835.966L2 834.5ZM44 873.5L42.6391 874.966L43.2146 875.5H44V873.5ZM702.5 873.5L703.846 872.021L703.274 871.5H702.5V873.5ZM723.5 892.61L722.154 894.089L722.722 894.606L723.49 894.61L723.5 892.61ZM897 893.5L896.99 895.5H897V893.5ZM1155 893.5V895.5H1155.8L1156.38 894.948L1155 893.5ZM1176 873.5V871.5H1175.2L1174.62 872.052L1176 873.5ZM1215 873.5V875.5H1215.79L1216.37 874.956L1215 873.5ZM1267 824.5L1268.37 825.956L1269 825.363V824.5H1267ZM1267 39H1269V38.154L1268.39 37.5648L1267 39ZM1233 6L1234.39 4.56484L1233.81 4H1233V6ZM1028.5 6V4H1027.67L1027.09 4.58579L1028.5 6ZM1003 31.5V33.5H1003.83L1004.41 32.9142L1003 31.5ZM441.5 31.5L440.113 32.9411L440.694 33.5H441.5V31.5ZM415 6L416.387 4.55886L415.806 4H415V6ZM329 6V4H328.15L327.56 4.61173L329 6ZM315.5 20V22H316.35L316.94 21.3883L315.5 20ZM268 20L266.625 21.4519L267.203 22H268V20ZM249 2L250.375 0.548095L249.797 0H249V2ZM39 2V0H38.2039L37.6256 0.547063L39 2ZM4 521V37H0V521H4ZM4 548V521H0V548H4ZM4 834.5V548H0V834.5H4ZM45.3609 872.034L3.3609 833.034L0.639098 835.966L42.6391 874.966L45.3609 872.034ZM702.5 871.5H44V875.5H702.5V871.5ZM724.846 891.131L703.846 872.021L701.154 874.979L722.154 894.089L724.846 891.131ZM897.01 891.5L723.51 890.61L723.49 894.61L896.99 895.5L897.01 891.5ZM1155 891.5H897V895.5H1155V891.5ZM1174.62 872.052L1153.62 892.052L1156.38 894.948L1177.38 874.948L1174.62 872.052ZM1215 871.5H1176V875.5H1215V871.5ZM1265.63 823.044L1213.63 872.044L1216.37 874.956L1268.37 825.956L1265.63 823.044ZM1265 548V824.5H1269V548H1265ZM1265 521V548H1269V521H1265ZM1265 39V521H1269V39H1265ZM1231.61 7.43516L1265.61 40.4352L1268.39 37.5648L1234.39 4.56484L1231.61 7.43516ZM1028.5 8H1233V4H1028.5V8ZM1004.41 32.9142L1029.91 7.41421L1027.09 4.58579L1001.59 30.0858L1004.41 32.9142ZM441.5 33.5H1003V29.5H441.5V33.5ZM413.613 7.44114L440.113 32.9411L442.887 30.0589L416.387 4.55886L413.613 7.44114ZM329 8H415V4H329V8ZM316.94 21.3883L330.44 7.38827L327.56 4.61173L314.06 18.6117L316.94 21.3883ZM268 22H315.5V18H268V22ZM247.625 3.45191L266.625 21.4519L269.375 18.5481L250.375 0.548095L247.625 3.45191ZM39 4H249V0H39V4ZM3.3744 38.4529L40.3744 3.45294L37.6256 0.547063L0.6256 35.5471L3.3744 38.4529Z" fill="white" mask="url(#path-1-outside-1_1616_9156)"/>
                <defs>
                <linearGradient id="paint0_linear_1616_9156" x1="1267" y1="446.259" x2="2.00001" y2="446.259" gradientUnits="userSpaceOnUse">
                <stop stop-color="${expired <= 0 ? '#2479FD' : '#EF6B74'}"/>
                <stop offset="1" stop-color="#2479FD"/>
                </linearGradient>
                </defs>
                </svg>
            

            `
        }
 
    }

    function setModalBody(item) {
        return `
        ${frame(item.expired, item.projects)}
        <div class="modal__body">
            <svg class="modal-close" width="2vw" height="2vw" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2.70711" y1="1.29289" x2="50.7071" y2="49.2929" stroke="${item.expired <= 0 ? '#FFFFFF' : '#112054'}" stroke-width="2"/>
                <line x1="1.29289" y1="49.2929" x2="49.2929" y2="1.2929" stroke="${item.expired <= 0 ? '#FFFFFF' : '#112054'}" stroke-width="2"/>
            </svg>
            <div class="gph__tabcontent-block__item data-id="${item.id}">
                <div class="gph__tabcontent-block__info">
                    <svg class="gph__tabcontent-block__mark" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect stroke="${item.color}" x="0" y="0" fill="white"/>
                    </svg>
                    <div class="gph__tabcontent-block__descr">${item.name}</div>
                    <div class="gph__tabcontent-block__info">
                        ${item.inWork > 0 ? inWork(item.inWork) : ''}
                        ${item.expired > 0 ? expired(item.expired) : ''}
                    </div>
                </div>
            </div>
            <diV class="gph__tabcontent-block__table">
                <span>Дата начала работы</span>
                <span>ФИО</span>
                <span>Осталось дней на оформление ГПХ</span>
            </diV>  
            <diV class="gph__tabcontent-block__table gph__tabcontent-block__table-body">
                ${item.projects ? projects(item.projects) : ''}
            </diV>  
        </div>
        `
    }

   
    setContent(getSortData(gphData))
})


