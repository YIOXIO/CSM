document.addEventListener('DOMContentLoaded', () => {


    // =============== Exemple Server Data ======================

    const studentsData = {
            date: '01.10.2021',
            branchName: 'Воронеж',
            performanceData = {
                absolute: 77,
                quality: 55
            },
            load: {
                date: '01.12.2023',
                hours: 950537.84,
                ratio: 23.4,
            },
            score: 4.2,
            inDetail: [
                {
                    title: 'Высшее образование',
                    total: 18558,
                    categories: {
                        occupation: {
                            fullTime: 14361,
                            distance: 4170,
                            extramural: 27
                        },
                        payment: {
                            public: 4495,
                            nonBudget: 14063
                        },
                        groups: {
                            bachelors: 14535,
                            specialists: 1360,
                            magisters: 2663
                        }
                    },
                },
                {
                    title: 'Аспирантура, докторантура',
                    total: 434,
                    categories: {
                        occupation: {
                            fullTime: 396,
                            distance: 0,
                            extramural: 38
                        },
                        payment: {
                            public: 283,
                            nonBudget: 151
                        },
                    },
                },
                {
                    title: 'Среднее профессиональное образование',
                    total: 4811,
                    categories: {
                        occupation: {
                            fullTime: 4647,
                            distance: 0,
                            extramural: 164
                        },
                        payment: {
                            public: 2107,
                            nonBudget:  2704
                        },
                    },
                },
                {
                    title: 'Лицей',
                    total: 412,
                    categories: {
                        occupation: {
                            fullTime: 377,
                            distance: 35,
                            extramural: 0
                        },
                        payment: {
                            public: 412,
                            nonBudget: 0
                        },
                    },
                },
            ]
    
        
    }


    // ================  служебные функции ====================


    const insertToPage = (className, data) => document.querySelector(`.${className}`).innerHTML = data;

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

    function numDataOutput(num) {
        const str = num.toString().split('.');
        const intPart = str[0];
        const decimalPart = str[1];
       
        let out;

        if (intPart.length <= 3) {
            out = intPart
        }
        else {
            out = intPart.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        }

        return out += '.' + decimalPart;
    } 

    function intNumDataOutput(num) {
        const str = num.toString();
    
        let out;

        if (str.length <= 3) {
            out = str;
        }
        else {
            out = str.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        }

        return out;
    } 

    


   


    function students(data) {
        // ================ вертикальные диаграммы ====================
    
        const colsHigherEducation = Array.from(document.querySelectorAll('.students__diagram-column_higher-education'));
        // const colsBranches = Array.from(document.querySelectorAll('.students__diagram-column_branches'));


        colsHigherEducation.forEach(i => i.style.height = '100%')

        function diagramDataOutput(diagram, data, category) {
            const groups = [];
            let sum = 0;

            for (let key in data) {
                document.querySelector(`.students__diagram-${category}-body-value_${key}`).textContent = intNumDataOutput(data[key]);
                groups.push(data[key]);
            }
            sum = groups.reduce((a, b) => a + b);

            diagram.map((i, index) => {
                let ratio  = Math.ceil((groups[index] / sum) * 100) + '%';
                i.style.height = ratio;
            })       
        }

        diagramDataOutput(colsHigherEducation, data.inDetail[0].categories.groups, 'higher-education')
        // diagramDataOutput(colsBranches, data.inDetail[1].categories.groups, 'branches')


         // ================ графики данных  ====================

        const graphiсContainers = Array.from(document.querySelectorAll('.students__graphic-container'));

        class studentsInfoGraphic {
            constructor( obj, parentSelector) {
                this.obj               = obj;
                this.fullTime          = this.obj.categories.occupation.fullTime;
                this.distance          = this.obj.categories.occupation.distance;
                this.extramural        = this.obj.categories.occupation.extramural;
                this.public            = this.obj.categories.payment.public;
                this.nonBudget         = this.obj.categories.payment.nonBudget;
                this.color             = '#217AFF';
                this.className         = 'students__graphic-wrap';
                this.parent            = parentSelector;
                this.categoryRatio();
                this.setGraphiс();
                
            }
    
            // получение суммы данных для расчета соотнашения показателей графика.

            get occupationSumData() {
                const result = [this.obj.categories.occupation.fullTime, this.obj.categories.occupation.distance, this.obj.categories.occupation.extramural];
                const sum = result.reduce((a, b) => a + b);
    
                return sum;
            }

            get  paymentSumData() {
                const result = [this.obj.categories.payment.public, this.obj.categories.payment.nonBudget];
                const sum = result.reduce((a, b) => a + b);
    
                return sum;
            }
            
            // ф-ия для вывода данных в процентном отношении.
    
            categoryRatio(category, sum) {
                return Math.ceil((category / sum) * 100);
            }
    
            // ф-ия для генерации графика данных.
    
            setGraphiс(categoryName, value, sum, color) {

                return `
                <div class="students__graphic-item">
                    <div class="students__graphic-info">
                        <div class="students__graphic-descr">${categoryName}</div>
                    </div>
                    
                    <svg class="students__graphic-line" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <svg class="students__graphic-line-data" width="${this.categoryRatio(value, sum)}%" x="0" y="0" >
                            <rect class="students__graphic-line-row" width="100%" fill="${color}" x="3" y="0.55"/>
                            <rect  class="students__graphic-line-right-rect" stroke="${color}"; x="100%" y="0"  fill="white"/>
                            <text class="students__graphic-line-value" x="100%" y="-2"  text-anchor="middle" dy="0.3em" transform="translate(${this.categoryRatio(value, sum) <= 15 ? '10' : '-8' })">
                                ${value ? intNumDataOutput(value) : 0}
							</text>>
                        </svg>
                    </svg>
                </div>
                `;
            }
    
            // рендер ф-ия.
    
            render() {
                const element = document.createElement('div');
    
                element.classList.add(this.className);
    
                element.innerHTML = `
                    <div class="students__graphic-header">
                        <div class="students__title">${this.obj.title}</div>
                        <div class="students__graphic-total">${intNumDataOutput(this.obj.total)}</div>
                    </div>
                    <div class="students__graphic-body">
                        ${this.fullTime   || this.fullTime   === 0 ? this.setGraphiс('Очное',         this.fullTime,   this.occupationSumData, this.color) : ''}
                        ${this.distance   || this.distance   === 0 ? this.setGraphiс('Очно-заочное',  this.distance,   this.occupationSumData, this.color) : ''}
                        ${this.extramural || this.extramural === 0 ? this.setGraphiс('Заочное',       this.extramural, this.occupationSumData, this.color) : ''}
                        ${this.public     || this.public     === 0 ? this.setGraphiс('Бюджет',        this.public,     this.paymentSumData,    this.color) : ''}
                        ${this.nonBudget  || this.nonBudget  === 0 ? this.setGraphiс('Внебюджет',     this.nonBudget,  this.paymentSumData,    this.color) : ''}
                    </div>
                `;
                this.parent.append(element);
            }
        }

        data.inDetail.forEach((i, index) => {
            new studentsInfoGraphic(i, graphiсContainers[index]).render();
        })   

        insertToPage('students__data-block-date-wrap p span', data.date);



        // ================  трудоустройство выпускников ====================

        insertToPage('students__data-block-indicator-wrap .students__title', `Показатели (${data.branchName})`);


        const employmentProgressbar = Array.from(document.querySelectorAll('.students__employment-progressbar-data path'));

        const employmentProgressbarLength = progressLength(employmentProgressbar, data.load.ratio);

        setProgressBar(employmentProgressbar, employmentProgressbarLength, '#D1CB33');
    
        insertToPage('students__employment-progressbar-ratio span', data.load.ratio + '%');
        insertToPage('students__employment-progressbar-ratio p', `Фактически выполненная на ${data.load.date} г`);


        // ================  педагогическая нагрузка ====================

        insertToPage('students__score-value',  data.score);

        // ===================== успеваемость ============================

        const absolutePerfomanceProgressbar = Array.from(document.querySelectorAll('.students__graphic-perfomance__progrssbar-absolute path'));
        const qualityPerfomanceProgressbar = Array.from(document.querySelectorAll('.students__graphic-perfomance__progrssbar-quality path'));

        const absolutePerfomanceProgressbarLength = progressLength(absolutePerfomanceProgressbar, data.performanceData.absolute);
        const qualityPerfomanceProgressbarLength = progressLength(qualityPerfomanceProgressbar, data.performanceData.quality);

        setProgressBar(absolutePerfomanceProgressbar, absolutePerfomanceProgressbarLength, '#FB9B2B');
        setProgressBar(qualityPerfomanceProgressbar, qualityPerfomanceProgressbarLength, '#1F70EF');

        insertToPage('students__graphic-total_absolute-perfomance', data.performanceData.absolute + '%');
        insertToPage('students__graphic-total_quality-perfomance', data.performanceData.quality + '%');
        
    }

    students(studentsData)
});