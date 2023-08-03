document.addEventListener('DOMContentLoaded', () => {

    //============== переход на второстепенные страницы ==========

    document.querySelector('#portraits').addEventListener('click', () => {
    });

    document.querySelector('#students').addEventListener('click', () => {
    });

    document.querySelector('#finance').addEventListener('click', () => {
    });

    document.querySelector('#staff').addEventListener('click', () => {
    });


   
    //=================== служебные функции =====================

    function progressLength(progressBar, data) {
        let currentValue;

        if (data > 100) {
            currentValue = progressBar.length;
        } else {
            currentValue = Math.round((progressBar.length / 100) * data);
        }

        return currentValue; 
    } 
    
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


    // ======================= фон ===============================

    const baseBackground = {
        color: '#112054',
    }

    function setBackgroundColor(color) {
        document.querySelector('body').style.background = color
    }

    setBackgroundColor(baseBackground.color)

    //=================== центральная диаграмма =====================
    
    const performanceData = {
        absolute: 77,
    }
    
    function performanceDiagram(absoluteValue, animationTime = 6300) {

        const absoluteProgrssbar = Array.from(document.querySelectorAll('.absolute-progrss-bar path'));

        let absoluteLength = progressLength(absoluteProgrssbar, absoluteValue);
       
        setTimeout(() => {
            setProgressBar(absoluteProgrssbar, absoluteLength, '#FB9B2B');
        }, animationTime)
        
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

        document.querySelector('.performance-diagram-absolute-value').textContent = numDataOutput(absoluteValue) + '%';
    }

   

    performanceDiagram(performanceData.absolute);

    //=================== центральный блок данных =====================

    const generalData = {
        students:  4844,
        score: 4.2,
        cash: 28.3,
        subsidies: 7.1,
        seniorityPPS: 75.7,
        seniorityNR: 41.5,
    }
 
    function  generalDataOutput(data) {
        for (let key in data) {
            console.log(key)
            if (key == 'seniorityPPS' || key == 'seniorityNR') document.querySelector(`.circle-block__value_${key}`).textContent = numDataOutput(`${data[key]}%`);
            document.querySelector(`.circle-block__value_${key}`).textContent = numDataOutput(data[key]);
        }
    }

    generalDataOutput(generalData);



    //=================== финансы =====================

    const financeData = {
        date: '2021-10-02',
        total: 600000000,
        budgetResources: 200000000,
        otherResources: 200000000,
        wageFund: 200000000,
        landTax: 1000000000,
        propertyTax: '100000000'
    }

    let wageFundDiagramData = Object.values(financeData).slice(2, 4);
    let сostsDiagramData = Object.values(financeData).slice(4, 7).reverse();

    const getInt = (array)  => array.map( i => parseInt(i))
    
    class Diagram  {
        constructor (title, data, colors, parentSelector, isDecorated = false) {
            this.parentSelector = document.querySelector(`.${ parentSelector }`),
            this.segmentColors  = colors,
            this.isDecorated    = isDecorated,
            this.title          = title,
            this.data           = data,
            this.fill           = 'transparent',
            this.diff(),
            this.offset(),
            this.sector(),
            this.insDiagramSectors(),
            this.diagrammSegmentConfig()
        }
    
        get diagramValues () { 
            const sumValues = this.data.reduce((a, b) => a + b);
    
            let array = this.data.map(i => Math.round( i / sumValues * 100));
            let max = Math.max(...array);
           
            if (this.isDecorated) {
                array = array.map(i => {
                    if (i === 0) {
                        return 0
                    } 
                    else if (i < 5) {
                        return 5
                    }
                    else {
                        return i
                    }
                });
            }

            const sumRatio = array.reduce((a, b) => a + b);
            const diff = sumRatio - 100;
    
            return array.map(i => i === max ? i - diff : i);
        }
    
        get internalEclipseColor () { return this.segmentColors[this.segmentColors.length - 1] }
    
        diff (val) { return 100 - val }
    
        offset (index) { 
            const start = 25;
            let location = 0;
            let sum = 0;
          
            this.diagramValues.map((_, i, array) => {
                if (i == index && i !== 0) {
                    for (let j = 0; j < i; j++) {
                        sum += array[j];
                    }
                    sum = 100 - sum;
                }
            })    
            location = start + sum;
           
            return location;  
        }
    
        diagrammSegmentConfig (r = 15.91549430918954) { return `class="donut-segment" cx="21" cy="21" r="${r}"` }
    
        sector (item, index) { 
            const strokeWidth = index == 0 ? 10 : index == this.diagramValues.length - 1 ? 5 : 7; 
            return `<circle  ${this.diagrammSegmentConfig()} fill="${this.fill}" stroke="${this.segmentColors[index]}" stroke-width="${strokeWidth}" stroke-dasharray="${item} ${this.diff(item)}" stroke-dashoffset="${this.offset(index)}"></circle>`; 
        }
    
        insDiagramSectors() { return this.diagramValues.map((i, index) => this.sector(i, index)).join('') }
      
    
        render () { 
            const diagram = document.createElement('div');
            diagram.classList.add('diagram');
            diagram.innerHTML = `
    
                <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
                    ${this.insDiagramSectors()}
                    <circle ${this.diagrammSegmentConfig(12)} fill="${this.fill}" stroke="${this.internalEclipseColor}" stroke-width="0.3"></circle>
                </svg>
    
                <div class="finance__diagram-text">${this.title}</div>
            `;
            this.parentSelector.append(diagram);
        }
    }
    
    new Diagram('Фонд оплаты труда', getInt(wageFundDiagramData), ['#2BD6FB', '#217AFF'], 'finance__diagram_wage-fund', ).render()
    new Diagram('Затраты', getInt(сostsDiagramData), ['#FFC01D',  '#FB9B2B', '#FD6A6A'], 'finance__diagram_сosts', true).render()

    function financeDataOutput(data) {
        insertToPage('finance__total-value', numDataOutput(data.total));
        insertToPage('finance__diagram-value_budget-resources', numDataOutput(data.budgetResources));
        insertToPage('finance__diagram-value_other-resources', numDataOutput(data.otherResources));
        insertToPage('finance__diagram-value_wage-fund', numDataOutput(data.wageFund));
        insertToPage('finance__diagram-value_land-tax', numDataOutput(data.landTax));
        insertToPage('finance__diagram-value_property-tax', numDataOutput(data.propertyTax));
    }

    financeDataOutput(financeData);

    function setSpace(elem) {
        let strLength = elem.textContent.length;

        let position = 'right'

        if (elem.classList.contains('finance__diagram-value_wage-fund') || elem.classList.contains('finance__diagram-value_other-resources')) {
            position = 'left'
        } 

        if (strLength === 1) {
            elem.style[position] = '1.6vw'
        }
    }

    document.querySelectorAll('.finance__diagram-value').forEach(i => setSpace(i))


    // =============================== сотркдники ====================================

    const staffData = {
        date: '2021-10-02',
        teachingStaff: 73,
        supervisors: 17,
        managementStaff: 42,
        supportStaff: 20,
        serviceStaff: 6,
        professionalEducationAndLyceum: 49
    }

    let staffDiagramData = Object.values(staffData).slice(1);
   
    new Diagram('Состав', getInt(staffDiagramData), [ '#217AFF', '#EF8E8E',  '#2BD6FB', '#627DAE', '#4CD382', '#6C38FF'], 'staff__diagram').render()

    // ============================== студенты ===========================================


    const studentsData = {
        date: '2021-12-01',
        employment: 91,
        load: {
            hours: 9505372332,
            ratio: 6.7
        },
        categories: {
            occupation: {
                fullTime: 30164,
                distance: 5634,
                extramural: 7061
            },
            payment: {
                public: 9831,
                nonBudget: 33928
            },
            groups: {
                bachelors: 1214535,
                specialists: 2421360,
                magisters: 6422663
            }
            
        }

    }


    function teachingLoadDataOutput(data) {
        const teachingLoadProgressbar = Array.from(document.querySelectorAll('.students__teaching-load-progressbar span'));

        const teachingLoadProgressLength = progressLength(teachingLoadProgressbar, data.ratio);

        function setProgressBarteachingLoad (progressBar, length, val) {
            for (let i = 0; i < length; i++) {
                progressBar[i].style.backgroundColor = val;
            }
        }  

        setProgressBarteachingLoad(teachingLoadProgressbar, teachingLoadProgressLength, '#1A5FC7');
        insertToPage('spanstudents__teaching-load-value', data.hours);
        insertToPage('students__teaching-load-ratio', data.ratio + '%');
    }

    teachingLoadDataOutput(studentsData.load);



    function studentsCategoryDataOutput(data) {
        const graphics = Array.from(document.querySelectorAll('.students__graphic svg'));


        function sumData(...data) {
            const result = data;
            const sum = result.reduce((a, b) => a + b);

            return sum;
        } 

        const categoryRatio = (category, sum) => Math.ceil((category / sum) * 100);

        const occupationSum = sumData(data.occupation.fullTime, data.occupation.distance, data.occupation.extramural);
        const paymentSum = sumData(data.payment.public, data.payment.nonBudget);

        graphics[0].setAttribute('width', categoryRatio(data.occupation.fullTime, occupationSum));
        graphics[1].setAttribute('width', categoryRatio(data.occupation.distance, occupationSum));
        graphics[2].setAttribute('width', categoryRatio(data.occupation.extramural, occupationSum));
        graphics[3].setAttribute('width', categoryRatio(data.payment.public, paymentSum));
        graphics[4].setAttribute('width', categoryRatio(data.payment.nonBudget, paymentSum));

        insertToPage('students__graphic-value_fullTime', numDataOutput(data.occupation.fullTime));
        insertToPage('students__graphic-value_distance', numDataOutput(data.occupation.distance));
        insertToPage('students__graphic-value_extramural', numDataOutput(data.occupation.extramural));
        insertToPage('students__graphic-value_public', numDataOutput(data.payment.public));
        insertToPage('students__graphic-value_nonBudget', numDataOutput(data.payment.nonBudget));
    }

    studentsCategoryDataOutput(studentsData.categories)


    // ======================= календарь ===============================

    function calendar () {

        const template = `
          <div class="calendar_staff">
            <div class="calendar-unit">
              <div class="value"></div>
              <div class="calendar__month-progress-bar">
                <svg class="calendar__month-progress-bar__staff" width="100%" height="100%" viewBox="0 0 100 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 0H0.5L11.5 12H15.5L4.5 0Z" fill="#40394D" />
                  <path d="M10.5 0H6.5L17.5 12H21.5L10.5 0Z" fill="#40394D" />
                  <path d="M16.5 0H12.5L23.5 12H27.5L16.5 0Z" fill="#40394D" />
                  <path d="M22.5 0H18.5L29.5 12H33.5L22.5 0Z" fill="#40394D" />
                  <path d="M28.5 0H24.5L35.5 12H39.5L28.5 0Z" fill="#40394D" />
                  <path d="M34.5 0H30.5L41.5 12H45.5L34.5 0Z" fill="#40394D" />
                  <path d="M40.5 0H36.5L47.5 12H51.5L40.5 0Z" fill="#40394D" />
                  <path d="M46.5 0H42.5L53.5 12H57.5L46.5 0Z" fill="#40394D" />
                  <path d="M52.5 0H48.5L59.5 12H63.5L52.5 0Z" fill="#40394D" />
                  <path d="M58.5 0H54.5L65.5 12H69.5L58.5 0Z" fill="#40394D" />
                  <path d="M64.5 0H60.5L71.5 12H75.5L64.5 0Z" fill="#40394D" />
                  <path d="M70.5 0H66.5L77.5 12H81.5L70.5 0Z" fill="#40394D" />
                  <path d="M76.5 0H72.5L83.5 12H87.5L76.5 0Z" fill="#40394D" />
                  <path d="M82.5 0H78.5L89.5 12H93.5L82.5 0Z" fill="#40394D" />
                  <path d="M88.5 0H84.5L95.5 12H99.5L88.5 0Z" fill="#40394D" />
                </svg>
              </div>
            </div>
          </div>
        `
      
        const style = `
          .calendar-unit {display: block;block;margin-top: 0.5vw;}
          .right {text-align: right;}
          .right svg {transform: scaleX(-1);}
          .value {
            font-family: 'Oswald', sans-serif;
            /* text-align: left; */
            font-weight: 400;
            color: #FB9B2B;
            font-size: 0.6vw;
            line-height: 0.6vw;
          }
        `
      
        class HTMLElementExtended extends HTMLElement {
          constructor(html, style, ...mixins) {
            self = super();
            this.constructor.setMixins(mixins);
            const template = this.constructor.setTemplate(html, style);
            this.$ = this.constructor.setShadowDOM(template);
          }
      
          static setMixins (mixins) {
            Object.assign(this.prototype, ...mixins);
          }
      
          static setTemplate (html, style) {
            const template = document.createElement('template');
            template.innerHTML = html + `<style>${style}</style>`;
            
            return template;
          }
          
          static setShadowDOM (template) {
            const shadowRoot = self.attachShadow({ mode: 'open' });;
            shadowRoot.appendChild(template.content.cloneNode(true));;
            return shadowRoot;;
          }
        }
      
        window.HTMLElementExtended = HTMLElementExtended
      
        class Calendar extends HTMLElementExtended {
          constructor() {
            super(template, style);
            this.render();
          }
      
          set currentDate (str) {
            this.date = new Date(str);
          }
            
          get data () { return this.parentNode.getAttribute('data-date'); }
          get bar () { return this.$.querySelector('svg').children; }
          get dir () { return this.getAttribute('dir') === 'left' ? 'left' : 'right'; }
          get diff () { return this.dayOfYear(this.date) / this.daysInYear(this.date); }
      
          get value () {
            return {
              'left' : this.date.toLocaleString('ru-Ru').split(',')[0],
              'right': `год ${ Math.floor(this.diff * 100)}%`
            }[this.dir];
          }
      
          setProgressBar(bar, active, fill) {
            active < 1 ? active = 1 : active;
      
            for (let i = 0; i < active; i++) {
              bar[i].style.fill = fill;
            }
          }
      
          dayOfYear (date) {
            const year = date.getFullYear();
            return Math.floor((date - new Date(year, 0, 0)) / 1000 / 60 / 60 / 24);
          }
      
          daysInYear (date) {
            const year = date.getFullYear();
            return ((year % 4 === 0 && year % 100 > 0) || year % 400 == 0) ? 366 : 365;
          }
      
          lastDay (date) {
            const year = date.getFullYear();
            const month = date.getFullYear();
            return new Date(year, month + 1, 0).getDate();
          }
      
          calc (date, bar) {
            const { length } = bar;
            const left = Math.floor(length * (date.getDate() / this.lastDay(date)));
            const right = Math.floor(length * this.diff);
            return {
              left,
              right
            };
          }
      
          async render () {
            this.currentDate = this.data;
            
            const active = this.calc(this.date, this.bar)[this.dir];
            this.setProgressBar(this.bar, active, '#FB9B2B');
            this.$.firstElementChild.classList.toggle(this.dir);
            this.$.querySelector('.value').textContent = this.value;
          }
        }

        class CalendarSingle extends Calendar {
            constructor () {
                super()
            }

            calc (date, bar) {
                const { length } = bar;
                const left = Math.floor(length * (date.getDate() / this.lastDay(date)));
                const right = Math.floor(length * this.diff);
                return {
                  left
                };
            }

            async render () {
                this.currentDate = this.data;
                
                const active = this.calc(this.date, this.bar)[this.dir];
                this.setProgressBar(this.bar, active, '#FB9B2B');
                this.$.firstElementChild.classList.toggle(this.dir);
                this.$.querySelector('.value').textContent = this.value;
                this.$.querySelector('.value').style = 'float: right';
                this.$.querySelector('.left svg').style = 'transform: scaleX(-1)';
            }
        }
      
        customElements.get('basic-calendar') || customElements.define('basic-calendar', Calendar);
        customElements.get('single-calendar') || customElements.define('single-calendar', CalendarSingle);
    }
      
    document.querySelector('.calendar-staff').setAttribute('data-date', staffData.date);
    document.querySelector('.calendar-finance').setAttribute('data-date', financeData.date);
    document.querySelector('.calendar-students').setAttribute('data-date', studentsData.date);
    
    calendar();


    //  ========= данные для легенды центральной диаграммы в блоке студенты ========

    insertToPage('students__diagram-info__value_bachelors', numDataOutput(studentsData.categories.groups.bachelors));
    insertToPage('students__diagram-info__value_specialists', numDataOutput(studentsData.categories.groups.specialists));
    insertToPage('students__diagram-info__value_magisters', numDataOutput(studentsData.categories.groups.magisters));
})
