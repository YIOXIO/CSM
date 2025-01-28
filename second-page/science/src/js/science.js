document.addEventListener('DOMContentLoaded', () => {

    const scienceServerData = {
        date: '04.02.2024',
        currentPlan: 0 ,
        currentReceipts: 0,
        expectedReceipts: {
            date: '31.12.2024',
            sum: 0
        },
        //Добавлены данные для НИР и научно-техническим услугам
        currentPlanTechnical:101749.4,
        currentReceiptsTechnicals: 75310.7,
        expectedReceiptsTechnicals: {
            sum: 101749.4,
        },
        //______________________________________________________
        
        publications: {
            scopus: {
                scopusTotal: 694,
                q1q2Total: 113,
                scopusInSixMonths: [
                    {
                        month: 'Май',
                        value: 151
                    },
                    {
                        month: 'Июнь',
                        value: 112
                    },
                    {
                        month: 'Июль',
                        value: 70
                    },
                    {
                        month: 'Август',
                        value: 94
                    },
                    {
                        month: 'Сентябрь',
                        value: 59
                    },
                    {
                        month: 'Октябрь',
                        value: 41
                    },
                ],
                q1q2InSixMonths: [
                    {
                        month: 'Май',
                        value: 25
                    },
                    {
                        month: 'Июнь',
                        value: 59
                    },
                    {
                        month: 'Июль',
                        value: 28
                    },
                    {
                        month: 'Август',
                        value: 45
                    },
                    {
                        month: 'Сентябрь',
                        value: 33
                    },
                    {
                        month: 'Октябрь',
                        value: 13
                    },
                ],
            },
            wos: {
                wosTotal: 407,
                q1q2Total: 113,
                wosInSixMonths: [
                    {
                        month: 'Май',
                        value: 55
                    },
                    {
                        month: 'Июнь',
                        value: 32
                    },
                    {
                        month: 'Июль',
                        value: 61
                    },
                    {
                        month: 'Август',
                        value: 68
                    },
                    {
                        month: 'Сентябрь',
                        value: 44
                    },
                    {
                        month: 'Октябрь',
                        value: 44
                    },
                ],
                q1q2InSixMonths: [
                    {
                        month: 'Май',
                        value: 18
                    },
                    {
                        month: 'Июнь',
                        value: 7
                    },
                    {
                        month: 'Июль',
                        value: 6
                    },
                    {
                        month: 'Август',
                        value: 8
                    },
                    {
                        month: 'Сентябрь',
                        value: 6
                    },
                    {
                        month: 'Октябрь',
                        value: 17
                    },
                ]
            }
            
        },

    }

    // ====================== служебные функции ===============================

    const insertToPage = (className, data) => document.querySelector(`.${className}`).innerHTML = data;

    function numDataOutput(num) {
        let str = num.toString();
        let out;

        if (str.indexOf('.') !== -1) {
            str = num.toString().split('.');

            const intPart = str[0];
            const decimalPart = str[1];

            if (intPart.length <= 3) {
                out = intPart
            }
            else {
                out = intPart.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
            }
    
            out += '.' + decimalPart;
        }
        else {
            if (str.length <= 3) {
                out = str;
            }
            else {
                out = str.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
            }
        }    

        return out;
    } 


    function progressLength(progressBar, data) {
        let currentValue;

        if (data > 100) {
            currentValue = progressBar.length;
        } else {
            currentValue = Math.round((progressBar.length / 100) * data);
        }

        return currentValue; 
    }


    function setProgressBar(progressBar, length, val) {
        for (let i = 0; i < length; i++) {
            progressBar[i].style.fill = val;
        }
    } 

    function science(data) {


        // Проверка на 0 или NaN
        
        const isInvalid = (value) => value === 0 || isNaN(value);

        if(isInvalid(data.currentPlan) || isInvalid(data.currentReceipts) || isInvalid(data.expectedReceipts.sum)){
            document.querySelector('.science__data-plan').style.display = 'none'
            document.querySelector('.science__inner').style.display = 'none'
            document.querySelector('.science__separator').style.margin = "0 0 1.5vh"
        }

        // ==================== вывод данных в блок science__info =================

        // Выполнение плана по НИР
        insertToPage('science__info-title__date', data.date);
        // insertToPage('science__info-title__year', data.date.split('.')[2]);
        insertToPage('science__info-block-value_current-receipt', numDataOutput(data.currentReceipts));
        insertToPage('science__info-block-value_expected-receipt', numDataOutput(data.expectedReceipts.sum));
        insertToPage('science__info-block-descr_expected-receipt span', data.expectedReceipts.date);

        // Выполнение плана по НИР и научно-техническим услугам
        insertToPage('science__info-block_technical-value_current-receipt', numDataOutput(data.currentReceiptsTechnicals));
        insertToPage('science__info-block_technical-value_expected-receipt', numDataOutput(data.expectedReceiptsTechnicals.sum));
        insertToPage('science__info-block-descr_technical-expected-receipt span', data.expectedReceipts.date);
        // _____________________________________________________________________________________________


        // Вертикальные диаграммы
        insertToPage('science__info-block-value_scoups', numDataOutput(data.publications.scopus.scopusTotal));
        insertToPage('science__info-block-value_scoups_q1-q2', numDataOutput(data.publications.scopus.q1q2Total));
        insertToPage('science__info-block-value_wos', numDataOutput(data.publications.wos.wosTotal));
        insertToPage('science__info-block-value_wos_q1-q2', numDataOutput(data.publications.wos.q1q2Total));


        // ====================== прогрессбар =======================

        const sciencePlanProgressbar = Array.from(document.querySelectorAll('.science-nir__data-plan__progressbar path'));
        const planProgress = ((data.currentReceipts / data.currentPlan) * 100).toFixed(2);

        const sciencePlanProgressbarLength = progressLength(sciencePlanProgressbar, planProgress);

        setProgressBar(sciencePlanProgressbar,  sciencePlanProgressbarLength, '#217Aff');

        insertToPage('science__data-plan__info-ratio_fact', planProgress + '%');
        insertToPage('science__data-plan__info-value_fact', numDataOutput(data.currentReceipts));
        insertToPage('science__data-plan__info-value_planned', numDataOutput(data.currentPlan));
      
        //Прогрессбар для НИР и научно-техническим услугам
        const technicalPlanProgressbar = Array.from(document.querySelectorAll('.science-technical__data-plan__progressbar path'));
        const technicalPlanProgress = ((data.currentReceiptsTechnicals / data.currentPlanTechnical) * 100).toFixed(2);

        const technicalPlanProgressbarLength = progressLength(technicalPlanProgressbar, technicalPlanProgress);

        setProgressBar(technicalPlanProgressbar,  technicalPlanProgressbarLength, '#FB9B2B');

        insertToPage('science-technical__data-plan__info-ratio_fact', technicalPlanProgress + '%');
        insertToPage('science-technical__data-plan__info-value_fact', numDataOutput(data.currentReceiptsTechnicals));
        insertToPage('science-technical__data-plan__info-value_planned', numDataOutput(data.currentPlanTechnical));

        // ________________________________________________________________________________________________________
        // ====================== вертикальные диаграммы =======================


        // инициализация селекторов и данных scopus.

        const scopusInSixMonths = data.publications.scopus.scopusInSixMonths;
        const scopusInSixMonthsQ1Q2 = data.publications.scopus.q1q2InSixMonths;

        const diagramScoups = Array.from(document.querySelectorAll('.science__data-diagram__item-scopus'));
        const diagramScoupsQ1Q2 = Array.from(document.querySelectorAll('.science__data-diagram__item-scopus-q1-q2'));

        const diagramScoupsValues = Array.from(document.querySelectorAll('.science__data-diagram__item-value-scopus'));
        const diagramScoupsValuesQ1Q2 = Array.from(document.querySelectorAll('.science__data-diagram__item-value-scopus-q1-q2'));

        const diagramScoupsMonths = Array.from(document.querySelectorAll('.science__data-diagram__months-scopus span'));


        // инициализация селекторов и данных wos.

        const wosInSixMonths = data.publications.wos.wosInSixMonths ;
        const wosInSixMonthsQ1Q2 = data.publications.wos.q1q2InSixMonths;

        const diagramWos = Array.from(document.querySelectorAll('.science__data-diagram__item-wos'));
        const diagramWosQ1Q2 = Array.from(document.querySelectorAll('.science__data-diagram__item-wos-q1-q2'));

        const diagramWosValues = Array.from(document.querySelectorAll('.science__data-diagram__item-value-wos'));
        const diagramWosValuesQ1Q2 = Array.from(document.querySelectorAll('.science__data-diagram__item-value-wos-q1-q2'));

        const diagramWosMonths = Array.from(document.querySelectorAll('.science__data-diagram__months-wos span'));


       // ф-ия для рендера диаграмм.
        
        function setDiagram(originData, q1q2Data, originValues, q1q2Values, originCols, q1q2Cols, months, colors) {

            // ф-ия для инициализаци массива значений исходного объекта.

            const getArray = data => data.map(i => i.value);

            // получение массивов значений 

            const origin = getArray(originData);
            const q1q2 = getArray(q1q2Data);

            // получение объединенного массива значений.

            const result = [...origin, ...q1q2];

            // получение наибольшего значения из объединенного массива.

            const max = Math.max(...result);

            // ф-ия для вывода данных.
            
            function dataOutput(data, values, cols, max, color) {
                data.map((i, index) => {
                    values[index].textContent = i.value;
                    
                    let value = (i.value / max) * 100;
                    
                    cols[index].setAttribute('height', `${value}%`);
                    cols[index].setAttribute('y', `${100 - value}%`);
                    cols[index].querySelector('rect').setAttribute('fill', color);
                })
            }
            
            originData.map((i, index) => months[index].textContent = i.month);

            dataOutput(originData, originValues, originCols, max, colors[0]);
            dataOutput(q1q2Data, q1q2Values, q1q2Cols, max, colors[1]);
            
        }

        setDiagram(scopusInSixMonths, scopusInSixMonthsQ1Q2, diagramScoupsValues, diagramScoupsValuesQ1Q2, diagramScoups, diagramScoupsQ1Q2, diagramScoupsMonths, ['#217AFF', '#44BCFF']);
        setDiagram(wosInSixMonths, wosInSixMonthsQ1Q2, diagramWosValues, diagramWosValuesQ1Q2, diagramWos, diagramWosQ1Q2, diagramWosMonths, ['#FB9B2B', '#FFDD85']);
    }

    science(scienceServerData);
});