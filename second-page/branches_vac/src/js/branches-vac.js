document.addEventListener('DOMContentLoaded', () => {

    const branchVacDataFromServer = [  // Server data exemple.
        {
            totalStaffAllBranches: 1260,
            totalVaccinated: 913,
            totalUnvaccinated: 185,
            totalrecovered: 54,
            totalUnsuitable: 100,
            totalSick: 5
        },
        {
            branchName: 'Брянск',
            totalStaff: 82,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 5,
            unsuitable: 7,
            sick: 5
        },
        {
            branchName: 'Брянск',
            totalStaff: 85,
            vaccinated: 167,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 90,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 99,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 67,
            unvaccinated: 12,
            recovered: 0,
            unsuitable: 111111113,
            sick: 0
        },
        {
            branchName: 'Брянск',
            totalStaff: 84,
            vaccinated: 167,
            unvaccinated: 2212,
            recovered: 0,
            unsuitable: 3,
            sick: 0
        },
        
    ]

    // Инициализация класса для генерации элемента списка филиалов. 

    class branchVacData {
        constructor( branchName, totalStaff, vaccinated, unvaccinated, recovered, unsuitable, sick, parentSelector) {
            this.branchName        = branchName;
            this.totalStaff        = totalStaff;
            this.vaccinated        = vaccinated;
            this.unvaccinated      = unvaccinated;
            this.recovered         = recovered;
            this.sick              = sick;
            this.unsuitable        = unsuitable;
            this.vaccinatedColor   = '#217AFF';
            this.unvaccinatedColor = '#6C38FF';
            this.recoveredColor    = '#A7EB17';
            this.sickColor         = '#FD6A6A';
            this.unsuitableColor   = '#FB9B2B';
            this.className         = 'branches-vac__list-item';
            this.parent            = document.querySelector(parentSelector);
            this.categoryRatio();
            this.setGraphiс();
            
        }

        // получение суммы данных для расчета соотнашения показателей графика.

        get sumData() {
            const result = [this.vaccinated, this.unvaccinated, this.recovered, this.sick, this.unsuitable];
            const sum = result.reduce((a, b) => a + b)

            return sum;
        } 


        // ф-ия изменяет окончание в слове "человек(ка)". 

        get person () {
            const array = this.totalStaff.toString().split('');

            const lastNum = +array[array.length - 1];

            let str = 'челове';

            if (lastNum === 2 || lastNum === 3 || lastNum === 4) {
                str += 'ка'
            } 
            else {
                str += 'к'
            }

            return str;
        }
        
        // ф-ия для вывода данных в процентном отношении.

        categoryRatio(category) {
            return Math.ceil((category / this.sumData) * 100);
        }

        // ф-ия для генерации графика данных.

        setGraphiс(category, color) {
            return `
                <svg width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <svg class="branches-vac__graphiс-data" width="${this.categoryRatio(category) + 1}" x="0" y="0" >
                        <rect class="branches-vac__graphiс-row" fill=${color} x="0" y="0" transform="translate(-10)"/>
                        <text class="branches-vac__graphiс-value" x="100%" y="60%"  text-anchor="middle" dy="0.3em" transform="translate(5)">
                            ${this.categoryRatio(category)}%
                        </text>>
                    </svg>
                </svg>
            `;
        }

        // рендер ф-ия.

        render() {
            const element = document.createElement('div');

            element.classList.add(this.className);

            element.innerHTML = `
            <div class="branches-vac__list-info">
                <div class="branches-vac__list-title">${this.branchName}</div>
                <div class="branches-vac__list-staff">
                    <div class="branches-vac__list-value">${this.totalStaff}</div>
                    <div class="branches-vac__list-descr">${this.person} <br> всего</div>
                </div>
            </div>
            <div class="branches-vac__graphiс">
                ${this.setGraphiс(this.vaccinated, this.vaccinatedColor)}
                ${this.setGraphiс(this.unvaccinated, this.unvaccinatedColor)}
                ${this.setGraphiс(this.recovered, this.recoveredColor)}
                ${this.setGraphiс(this.sick, this.sickColor)}
                ${this.setGraphiс(this.unsuitable, this.unsuitableColor)}
            </div>
            `;

            this.parent.append(element);
        }
    }

    // ф-ия создает массив объектов исключая обобщенные данные из нулевого элемента массива. 

    const datasetPerBranch = branchVacDataFromServer.filter((obj, i) => i !== 0);

    // вспомогательная ф-ия для вывода данных.

    const insertToPage = (className, data) => document.querySelector(`.${className}`).textContent = data;
    
    // ф-ия принимает обобщенные данные по всем филиалам и выводит их на страницу.

    function dataOutput(totalObj) {
        insertToPage('branches-vac__diagramm-value', totalObj.totalStaffAllBranches);
        insertToPage('branches-vac__legend-data-value_sick', totalObj.totalSick);
        insertToPage('branches-vac__legend-data-value_vaccinated', totalObj.totalVaccinated);
        insertToPage('branches-vac__legend-data-value_unvaccinated', totalObj.totalUnvaccinated);
        insertToPage('branches-vac__legend-data-value_recovered', totalObj.totalrecovered);
        insertToPage('branches-vac__legend-data-value_unsuitable', totalObj.totalUnsuitable);
    }

    
  
    // ========  изменение окончании слова "человек(ка)", блок вакцинация =========

    function setVaccinationtDescription(data) {
        const description = document.querySelector('.branches-vac__diagramm-descr');

        const getlastNum = () => {
            let array = data.toString().split('');

            return +array[array.length - 1]
        } 

        const lastNum = getlastNum()

        let str = 'сотрудни';
        if (lastNum === 1) {
            str += 'к'
        }
        else if  (lastNum === 2 || lastNum === 3 || lastNum === 4) {
            str += 'ка'
        } 
        else {
            str += 'ков'
        }
        
        description.textContent = str;
    }

    setVaccinationtDescription(branchVacDataFromServer[0].totalStaffAllBranches)

    // рендеринг списка данных по каждому филиалу.

    datasetPerBranch.forEach(({
        branchName,
        totalStaff,
        vaccinated,
        unvaccinated,
        recovered,
        unsuitable,
        sick
    }) => {

        new branchVacData(branchName, totalStaff, vaccinated, unvaccinated, recovered, unsuitable, sick, '.branches-vac__list').render();
    });

    // вывод обобщенных данных.

    dataOutput(branchVacDataFromServer[0]);
})

