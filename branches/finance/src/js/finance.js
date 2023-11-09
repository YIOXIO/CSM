document.addEventListener('DOMContentLoaded', () => {
    
    // данные с сервера.

    const financeServerData = {
        date: '01.09.2021',
        total: 4082793989,
        stateAssignment: 2519696233,
        subsidies: 100000000,
        scholarshipSupport: 64066897.35,
        taxDate: '01.10.2021',
        propertyTax: 0,
        transportTax: 20,
        landTax: 40,
        budgetResources: 1016043100.08,
        otherResources: 2,
        totalEstate: 6984734981.58,
        realEstate: 10,
        personalEstate: 878448252.1,
        totalEstateInItems: 258479,
        realEstateInItems: 91,
        personalEstateInItems: 368,
    }


    // вспомогательная ф-ия для вывода данных.

    const insertToPage = (className, data) => document.querySelector(`.${className}`).textContent = data;

    // ф-ця для получения кол-ва элементов необходимых к закраске.

    function progressLength(progressBar, data) {
        let currentValue;

        

        if (data > 100) {
            currentValue = progressBar.length;
        }
        else {
            currentValue = Math.round((progressBar.length / 100) * data );
        }

        return currentValue; 
    }
    
    // ф-ця закрашивающая элементы.

    function setProgressBar(progressBar, length, val) {
    
        for (let i = 0; i < length; i++) {
            progressBar[i].style.fill = val;
        }
    }  

    function setProgressBarTriple(progressBar, lengthLeft = 0, lengthCenter = 0, valLeft, valCenter) {
        if (lengthCenter < 1) {
            lengthCenter = 1;
        }
        let length = lengthLeft + lengthCenter;

        for (let i = 0; i <= length; i++) {
            if (i <= lengthLeft) {
                progressBar[i].style.fill = valLeft;
                
            } 
            else {
                progressBar[i].style.fill = valCenter;
            }
        }
    }  

    // ф-ця для получения соотношения данных из одной категории.

    const getValueInPercents = (num, total) => (num / total) * 100;

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

    function finance(data) {
        // инициализация диаграмм.

        const taxProgressbar = Array.from(document.querySelectorAll('.tax-progrssbar-item'));
        const resourcesProgressbar = Array.from(document.querySelectorAll('.resources-progrssbar-item'));
        const estateProgressbar = Array.from(document.querySelectorAll('.estate-progrssbar-item'));


        // инициализация служебных переменных.


        let propertyTaxRatio, transportTaxRatio, landTaxRatio, totalTax, transportTaxLength, propertyTaxLength;
        let budgetResourcesRatio, otherResourcesRatio, totalResources, budgetResourcesLength;
        let realEstateRatio, personalEstateRatio,  differenceEstateRatio, differenceEstate, realEstateLength, totalEstate, differenceEstateInItems;
        
        
        // ф-ця для преобразования числовых данных в нужный вид: (##,#%)


        const rateDataOutput = num => num.toString().substr(0, 4).replace('.', ',') + '%';


        // ф-ця для вывода данных на страницу.


        function dataMount(modifier, total, ratioLeft, ratioRight, sumLeft, sumRight) {
            document.querySelector(`.finance__info-total_${modifier} span`).textContent = numDataOutput(total.toFixed(2) + ' ');
            document.querySelector(`.finance__info-ratio-left_${modifier}`).textContent = rateDataOutput(ratioLeft);
            document.querySelector(`.finance__info-ratio-right_${modifier}`).textContent = rateDataOutput(ratioRight);
            document.querySelector(`.finance__info-sum-left_${modifier} span`).textContent = numDataOutput(sumLeft.toFixed(2) + ' ');
            document.querySelector(`.finance__info-sum-right_${modifier} span`).textContent = numDataOutput(sumRight.toFixed(2) + ' ');
        }

        // получаем сумму для каждой категории.


        totalTax =  parseInt(data.propertyTax) + parseInt(data.landTax) + parseInt(data.transportTax);
        totalResources = parseInt(data.budgetResources) + parseInt(data.otherResources);
       
        totalEstate = parseInt(data.totalEstate);
        differenceEstate = parseInt(data.totalEstate) - (parseInt(data.realEstate) + parseInt(data.personalEstate));
        differenceEstateInItems = parseInt(data.totalEstateInItems) - (parseInt(data.realEstateInItems) + parseInt(data.personalEstateInItems));
        

        
      
        // получаем процентое показание для каждого показателя каждой категории.


        propertyTaxRatio = getValueInPercents(data.propertyTax, totalTax);
        landTaxRatio = getValueInPercents(data.landTax, totalTax);
        transportTaxRatio = getValueInPercents(data.transportTax, totalTax);

        budgetResourcesRatio = getValueInPercents(data.budgetResources, totalResources);
        otherResourcesRatio = getValueInPercents(data.otherResources, totalResources);

        realEstateRatio = getValueInPercents(data.realEstate, totalEstate);
        personalEstateRatio = getValueInPercents(data.personalEstate, totalEstate);
        differenceEstateRatio = getValueInPercents(differenceEstate , totalEstate);

    
        


        // получаем кол-во элементов диаграммы, которое необходимо закрасить.


        propertyTaxLength = progressLength(taxProgressbar, propertyTaxRatio);
        transportTaxLength = progressLength(taxProgressbar, transportTaxRatio);

        budgetResourcesLength = progressLength(resourcesProgressbar, budgetResourcesRatio);

        realEstateLength = progressLength(estateProgressbar, realEstateRatio);
        differenceEstateLength = progressLength(estateProgressbar, differenceEstateRatio);
        
    
        // выводим данные на страницу.
        
        insertToPage('finance__info-ratio-left_tax', rateDataOutput(propertyTaxRatio));
        insertToPage('finance__info-sum-left_tax span', numDataOutput(data.propertyTax) + ' ');

        insertToPage('finance__info-ratio-center_tax', rateDataOutput(transportTaxRatio));
        insertToPage('finance__info-sum-center_tax span', numDataOutput(data.transportTax.toFixed(2) + ' '));

        insertToPage('finance__info-ratio-right_tax', rateDataOutput(landTaxRatio));
        insertToPage('finance__info-sum-right_tax span', numDataOutput(data.landTax) + ' ');

        insertToPage('finance__info-total_tax span', numDataOutput(totalTax));

        
        dataMount('resources', totalResources, budgetResourcesRatio, otherResourcesRatio, data.budgetResources, data.otherResources);

        insertToPage('finance__info-ratio-left_estate', rateDataOutput(realEstateRatio));
        insertToPage('finance__info-sum-left_estate span', numDataOutput(data.realEstate) + ' ');

        insertToPage('finance__info-sum-center_estate span', numDataOutput(differenceEstate.toFixed(2) + ' '))
        insertToPage('finance__info-ratio-center_estate', rateDataOutput(differenceEstateRatio))

        insertToPage('finance__info-ratio-right_estate', rateDataOutput(personalEstateRatio));
        insertToPage('finance__info-sum-right_estate span', numDataOutput(data.personalEstate) + ' ');

        insertToPage('finance__info-total_estate span', numDataOutput(totalEstate));

        
        insertToPage('prompt__text_total-estate', numDataOutput(data.totalEstateInItems) + ' шт.')
        insertToPage('prompt__text_real-estate',  numDataOutput(data.realEstateInItems) + ' шт.')
        insertToPage('prompt__text_diff-estate',  numDataOutput(differenceEstateInItems) + ' шт.')
        insertToPage('prompt__text_personal-estate',  numDataOutput(data.personalEstateInItems) + ' шт.')

        // закрашиваем диаграммы.


        setProgressBar(resourcesProgressbar, budgetResourcesLength, '#217AFF');
        setProgressBarTriple(taxProgressbar,  propertyTaxLength, transportTaxLength, '#FB9B2B', '#AB8E6D');
        setProgressBarTriple(estateProgressbar,  realEstateLength, differenceEstateLength, '#A7EB17', '#71814F');

        // круговая диаграмма.

        // вывод даты.

        insertToPage('finance__diagramm-date', data.date);

        // тотал.

        insertToPage('finance__diagramm-value', numDataOutput(data.total))


        // вывод данных в блок finance__data.

        insertToPage('finance__data-value-state-assignment', numDataOutput(data.stateAssignment) + ' ');
        insertToPage('finance__data-value-subsidies', numDataOutput(data.subsidies) + ' ');
        insertToPage('finance__data-value-scholarship-support', numDataOutput(data.scholarshipSupport) + ' ');

        insertToPage('finance__info-subheader-date', data.taxDate);
    }

   finance(financeServerData)

    
});