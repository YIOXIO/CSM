const API = {
  base: [
    {
      kind: 'p1',
      date: '28.02.2023',
      title: 'Р1 Объем НИОКР в расчете на одного научно-педагогического работника',
      plan: '421320.00 ',
      fact: '33967.00',
      unit: 'rub'
    },
    {
      kind: 'p2',
      date: '28.02.2023',
      title: 'Р2 Доля работников в возрасте до 39 лет в общей численности профессорско-преподавательского состава',
      plan: '23.16',
      fact: '33.17',
      unit: 'ratio'
    },
    {
      kind: 'p3',
      date: '28.02.2023',
      title: 'Р3 Доля обучающихся по образовательным программам бакалавриата, специалитета, магистратуры по очной форме обучения получивших на бесплатной основе дополнительную квалификацию, в общей численности обучающихся по образовательным программам бакалавриата, специалитета, магистратуры по очной форме обучения ',
      plan: '13.5',
      fact: '0',
      unit: 'ratio'
    },
    {
      kind: 'p4',
      date: '28.02.2023',
      title: 'Р4 Доходы университета из средств от приносящей доход деятельности в расчете на одного НПР',
      plan: '5138530.00',
      fact: '1554279.00',
      unit: 'rub'
    },
    {
      kind: 'p5',
      date: '28.02.2023',
      title: 'Р5 Количество обучающихся по программам ДПО на «цифровой кафедре» образовательной организации высшего образования',
      plan: '1111',
      fact: '1427',
      annualStatistics: [800, 1050, 1110, 1130, 1200, 1190, 1300, 1200, 1400],
      unit: 'people',
    },
    {
      kind: 'p6',
      date: '28.02.2023',
      title: 'Р6 Объем затрат на научные исследования и разработки из собственных средств университета в расчете на одного НПР',
      plan: '675652.00',
      fact: '59271.00',
      unit: 'rub'
    },
  ],
  special: [
    {
      kind: 'p1',
      date: '28.02.2023',
      title: 'Р1 (С1) Количество индексируемых в базе данных Web of Science Core Collection публикаций за последние три полных года, в расчете на одного НПР',
      plan: '0.116',
      fact: '0.167',
      unit: 'item'
    },
    {
      kind: 'p2',
      date: '28.02.2023',
      title: 'Р2 (С1) Количество индексируемых в базе данных Scopus публикаций типов «Article», «Review» за последние три полных года, в расчете на одного НПР',
      plan: '0.475',
      fact: '0.503',
      unit: 'item'
    },
    {
      kind: 'p3',
      date: '28.02.2023',
      title: 'Р3 (С1) Объем доходов от реализации дополнительных профессиональных программ и основных программ профессионального обучения в расчете на одного НПР',
      plan: '273935.00',
      fact: '347036.00',
      unit: 'rub'
    },
    {
      kind: 'p4',
      date: '28.02.2023',
      title: 'Р4 (С1) Объем средств, поступивших от выполнения научно-исследовательских и опытно-конструкторских работ и оказания научно-технических услуг по договорам с организациями реального сектора экономики и за счет средств бюджета субъекта РФ и местных бюджетов, в расчете на одного НПР',
      plan: '231652.00',
      fact: '156714.00',
      unit: 'rub'
    },
    {
      kind: 'p5',
      date: '28.02.2023',
      title: 'Р5 (С1) Доля обучающихся по образовательным программам высшего образования по договорам о целевом обучении в общей численности обучающихся',
      plan: '1.558',
      fact: '1.331',
      unit: 'ratio'
    },
    {
      kind: 'p6',
      date: '28.02.2023',
      title: 'Р6 (С1) Отношение численности обучающихся, принятых в отчетном году на обучение по образовательным программам бакалавриата, специалитета, магистратуры, получивших предыдущее образование (высшее, среднее профессиональное или среднее (полное) общее образование), являющееся основанием для получения образования в университете, в образовательных организациях, расположенных на территории г. Москвы и г. Санкт-Петербурга',
      plan: '64.454',
      fact: '57.849',
      unit: 'ratio'
    },
    {
      kind: 'p7',
      date: '28.02.2023',
      title: 'Р7 (С1) Отношение численности иностранных граждан и лиц без гражданства, обучающихся по программам бакалавриата, специалитета, магистратуры, программам подготовки научно-педагогических кадров в аспирантуре, программам ординатуры, программам ассистентуры-стажировки по очной форме обучения, к численности обучающихся по программам бакалавриата, специалитета, магистратуры, программам подготовки научно-педагогических кадров в аспирантуре, программам ординатуры, программам ассистентуры-стажировки по очной форме обучения',
      plan: '9.103',
      fact: '9.706',
      unit: 'ratio'
    },
    {
      kind: 'p8',
      date: '28.02.2023',
      title: 'Р8 (С1) Объем доходов от результатов интеллектуальной деятельности, права на использование которых были переданы по лицензионному договору (соглашению), договору об отчуждении исключительного права, в расчете на одного НПР',
      plan: '0.711',
      fact: '0',
      unit: 'rub'
    },
  ]
}

const DIAGRAM_MAX_VAL =  API.base[4].max_value || 2000

// tabs

const tabs = document.querySelectorAll('.priority__tab')
const tabcontent = document.querySelectorAll('.priority__tabcontent')

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabcontent.forEach(item => item.classList.remove('show'))
    tabcontent.forEach(item => item.classList.add('hide'))
    tabcontent[index].classList.add('show')

    tabs.forEach(item => {
      item.querySelector('svg').querySelector('path').setAttribute('stroke', 'rgba(33, 122, 255, 0.2)')
      item.classList.remove('priority__tab_active')
    })

    tab.querySelector('svg').querySelector('path').setAttribute('stroke', '#217AFF')
    tab.classList.add('priority__tab_active')
  })
})

// helpers 

const addSpases = num => {
  let str = num.toString()
  let out

  if (str.indexOf('.') !== -1) {
    str = num.toString().split('.')

    const intPart = str[0]
    const decimalPart = str[1]

    if (intPart.length <= 3) {
      out = intPart
    }
    else {
      out = intPart.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
    }

    out += '.' + decimalPart
  }
  else {
    if (str.length <= 3) {
      out = str
    }
    else {
      out = str.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
    }
  }

  return out
}

const setUnit = value => {
  let out
  switch(value) {
    case 'people': 
      out = ' чел.'
    break
    case 'rub':    
      out = ' руб.'
    break
    case 'item':   
      out = ' ед.'
    break
    case 'ratio':  
      out = '%'
    break
  }
  return out
}  


// *** ДИАГРАММА ***

// ф-ия устанавливает временную шкалу начиная с определенного месяца.   
const setMonthsLine = (mounths, position) => {
  let start = mounths.slice(position - 1, mounths.length)
  let end = mounths.slice(0, position - 1)

  return [...start, ...end]
}

const diagramMounths = [
  'Сен',
  'Окт',
  'Ноя',
  'Дек',
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
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
      },
      border: {
        color: '#FFFFFF',
      }
    },
    y: {
      stacked: true,
      min: 0,
      max: DIAGRAM_MAX_VAL,
      ticks: {
        stepSize: DIAGRAM_MAX_VAL,
        color: '#FFFFFF',
        callback: function (tick) {
          return ''
        }
      },
      grid: {
        display: false,
        borderColor: '#FFFFFF',
      },
      border: {
        color: '#FFFFFF',
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
function showChart(elem, kind, array) {
  const itemData = array.find(i => i.kind == kind)
  let box = elem.querySelector(`.diagram-box`)
  box.innerHTML = `<canvas class="line-chart-${kind}"></canvas>`
  createChart(`line-chart-${kind}`, itemData, diagramOptions, diagramMounths)
}


// Элементы блока данных
 
const rectIcon = () => {
  return `
  <svg width=".8vw" height=".8vw" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4.52548" y="15.5" width="14.9333" height="14.9333" transform="rotate(-45 4.52548 15.5)"
    stroke="#FB9B2B" stroke-width="6.4" />
  </svg>
  `
}

const progressbar = ratio => {
  return `
  <svg class="priority__item-progressbar" viewBox="0 0 1054 60" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.05" x="-2" width="100%" height="100%" fill="white"></rect>
    <rect y="1" width="${ratio}%" height="100%" fill="url(#p1-m-1)"></rect>
    <path d="M15.3077 1H20.1543L-24.2247 60H-29.0713L15.3077 1Z" fill="#112054"></path>
    <path d="M1042.03 60L1086.41 1H1081.56L1037.18 60H1042.03Z" fill="#112054"></path>
    <path d="M1022.64 60L1067.02 1H1062.18L1017.8 60H1022.64Z" fill="#112054"></path>
    <path d="M1003.26 60L1047.64 1H1042.79L998.411 60H1003.26Z" fill="#112054"></path>
    <path d="M983.872 60L1028.25 1H1023.4L979.025 60H983.872Z" fill="#112054"></path>
    <path d="M964.484 60L1008.86 1H1004.02L959.638 60H964.484Z" fill="#112054"></path>
    <path d="M945.098 60L989.477 1H984.63L940.251 60H945.098Z" fill="#112054"></path>
    <path d="M925.712 60L970.091 1H965.245L920.866 60H925.712Z" fill="#112054"></path>
    <path d="M906.326 60L950.705 1H945.858L901.479 60H906.326Z" fill="#112054"></path>
    <path d="M886.939 60L931.318 1H926.472L882.093 60H886.939Z" fill="#112054"></path>
    <path d="M867.552 60L911.931 1H907.085L862.706 60H867.552Z" fill="#112054"></path>
    <path d="M848.165 60L892.544 1H887.697L843.318 60H848.165Z" fill="#112054"></path>
    <path d="M828.779 60L873.158 1H868.311L823.932 60H828.779Z" fill="#112054"></path>
    <path d="M809.392 60L853.771 1H848.924L804.545 60H809.392Z" fill="#112054"></path>
    <path d="M790.006 60L834.385 1H829.539L785.16 60H790.006Z" fill="#112054"></path>
    <path d="M770.619 60L814.998 1H810.151L765.772 60H770.619Z" fill="#112054"></path>
    <path d="M751.233 60L795.612 1H790.766L746.387 60H751.233Z" fill="#112054"></path>
    <path d="M731.848 60L776.227 1H771.38L727.001 60H731.848Z" fill="#112054"></path>
    <path d="M712.461 60L756.84 1H751.994L707.615 60H712.461Z" fill="#112054"></path>
    <path d="M693.075 60L737.454 1H732.607L688.228 60H693.075Z" fill="#112054"></path>
    <path d="M673.687 60L718.066 1H713.22L668.841 60H673.687Z" fill="#112054"></path>
    <path d="M654.302 60L698.681 1H693.834L649.455 60H654.302Z" fill="#112054"></path>
    <path d="M634.915 60L679.294 1H674.447L630.068 60H634.915Z" fill="#112054"></path>
    <path d="M615.528 60L659.907 1H655.06L610.681 60H615.528Z" fill="#112054"></path>
    <path d="M596.141 60L640.52 1H635.673L591.294 60H596.141Z" fill="#112054"></path>
    <path d="M576.754 60L621.133 1H616.287L571.908 60H576.754Z" fill="#112054"></path>
    <path d="M557.369 60L601.748 1H596.901L552.522 60H557.369Z" fill="#112054"></path>
    <path d="M537.983 60L582.362 1H577.515L533.136 60H537.983Z" fill="#112054"></path>
    <path d="M518.597 60L562.976 1H558.129L513.75 60H518.597Z" fill="#112054"></path>
    <path d="M499.209 60L543.588 1H538.742L494.363 60H499.209Z" fill="#112054"></path>
    <path d="M479.823 60L524.202 1H519.356L474.977 60H479.823Z" fill="#112054"></path>
    <path d="M460.437 60L504.816 1H499.969L455.59 60H460.437Z" fill="#112054"></path>
    <path d="M441.051 60L485.43 1H480.583L436.204 60H441.051Z" fill="#112054"></path>
    <path d="M421.663 60L466.042 1H461.195L416.816 60H421.663Z" fill="#112054"></path>
    <path d="M402.276 60L446.655 1H441.809L397.43 60H402.276Z" fill="#112054"></path>
    <path d="M382.891 60L427.27 1H422.423L378.044 60H382.891Z" fill="#112054"></path>
    <path d="M363.504 60L407.883 1H403.037L358.658 60H363.504Z" fill="#112054"></path>
    <path d="M344.118 60L388.497 1H383.651L339.271 60H344.118Z" fill="#112054"></path>
    <path d="M324.732 60L369.111 1H364.264L319.885 60H324.732Z" fill="#112054"></path>
    <path d="M305.345 60L349.724 1H344.877L300.498 60H305.345Z" fill="#112054"></path>
    <path d="M285.958 60L330.337 1H325.491L281.112 60H285.958Z" fill="#112054"></path>
    <path d="M266.572 60L310.951 1H306.105L261.726 60H266.572Z" fill="#112054"></path>
    <path d="M247.185 60L291.565 1H286.718L242.339 60H247.185Z" fill="#112054"></path>
    <path d="M227.799 60L272.178 1H267.332L222.953 60H227.799Z" fill="#112054"></path>
    <path d="M208.412 60L252.791 1H247.944L203.565 60H208.412Z" fill="#112054"></path>
    <path d="M189.026 60L233.405 1H228.559L184.18 60H189.026Z" fill="#112054"></path>
    <path d="M169.64 60L214.019 1H209.172L164.793 60H169.64Z" fill="#112054"></path>
    <path d="M150.252 60L194.631 1H189.785L145.406 60H150.252Z" fill="#112054"></path>
    <path d="M130.867 60L175.246 1H170.399L126.02 60H130.867Z" fill="#112054"></path>
    <path d="M111.48 60L155.859 1H151.012L106.633 60H111.48Z" fill="#112054"></path>
    <path d="M92.0942 60L136.473 1H131.627L87.2476 60H92.0942Z" fill="#112054"></path>
    <path d="M72.7079 60L117.087 1H112.24L67.8613 60H72.7079Z" fill="#112054"></path>
    <path d="M53.3202 60L97.6993 1H92.8527L48.4736 60H53.3202Z" fill="#112054"></path>
    <path d="M33.9345 60L78.3135 1H73.4669L29.0879 60H33.9345Z" fill="#112054"></path>
    <path d="M14.5493 60L58.9283 1H54.0817L9.70264 60H14.5493Z" fill="#112054"></path>
    <path d="M-4.83796 60L39.5411 1H34.6945L-9.68457 60H-4.83796Z" fill="#112054"></path>
    <svg>
      <defs>
        <linearGradient id="p1-m-1" x1="1054" y1="1" x2="0" y2="1" gradientUnits="userSpaceOnUse">
          <stop stop-color="#4CD380"></stop>
          <stop offset="1" stop-color="#217AFF"></stop>
        </linearGradient>
      </defs>
    </svg>
  </svg>
  `
}

const templateData = (
  { 
    kind, 
    plan, 
    fact, 
    unit 
  }, 
  ratio, modifier) => {
  if ((kind == 'p2' ||  kind == 'p3') 
    && modifier != 'special') {
    return `
    <div class="priority__item-data">
      <div class="priority__item-data__wrap">
        <div class="priority__item-fact">
          <div>${fact}${setUnit(unit)}</div>
        </div>
        <div style="left:${(+plan + 2).toString()}%;" class="priority__item-plan">
          <div>${plan}${setUnit(unit)}</div>
        </div>
      </div>
      ${progressbar(fact)}
      <div class="priority__item-data__wrap">
        <div class="priority__item-fact">
          <span>Факт</span>
        </div>
        <div style="left:${(+plan + 2).toString()}%;" class="priority__item-plan">
          <span>Плановое значение</span>
        </div>
      </div>
      <div style="left:${plan}%;" class="planned-line"></div>
    </div>
    `
  }
  if (kind == 'p5' && modifier == 'charted') {
    return `
    <div class="priority__item-data">
      <div class="priority__item-data__wrap">
        <div class="priority__item-fact">
          <span>Факт</span>
          <div>${fact}</div>
          <span>${setUnit(unit)}</span>
        </div>
        <div class="priority__item-plan">
        </div>
      </div>
      <div class="diagram-wrap"> 
        <div class="diagram-box"></div>
        <div class="planned-box">
          <div style="height:${(plan / DIAGRAM_MAX_VAL) * 100}%;" class="planned-line">
            <div class="priority__item-plan">
              <span>Плановое значение</span>
              <div>${plan}</div>
              <span>${setUnit(unit)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
  return `
  <div class="priority__item-data">
    <div class="priority__item-data__wrap">
      <div class="priority__item-fact">
        <span>Факт</span>
        <div>${addSpases(fact)}${setUnit(unit)}</div>
      </div>
      <div class="priority__item-plan">
        <span>План</span>
        <div>${addSpases(plan)}${setUnit(unit)}</div>
      </div>
    </div>
    ${progressbar(ratio)}
  </div>
  `
}

const template = (data, modifier = 'default', fraction = 1) => {
  const {date, title, plan, fact } = data

  let ratio = fact
  if (modifier != 'planned' && fact != 0) {
    ratio = (fact / plan * 100).toFixed(fraction)
  } 

  return `
  <div class="priority__item priority__item_${modifier}">
    <div class="priority__item-date">Фактические значения на ${date} г.</div>
    <div class="priority__item-info">
      <div class="priority__item-title">${title}</div>
      <div class="priority__item-value">
        <div>${ratio}</div>
        <span>%</span>
      </div>
      ${templateData(data, ratio, modifier)}
    </div>
  </div>
  `
}


// Вывод данных

function setItems() {
  let diagramData = [],
  base = '',
  special = ''

  API.base.forEach(x => {
    const { kind, annualStatistics } = x 

    if (kind == 'p2' || kind == 'p3') {
      base += template(x, 'planned')
      return
    }
    if (kind == 'p5') {
      diagramData.push({
        kind,
        annualStatistics
      }) 
      base += template(x, 'charted')
      return
    }
    base += template(x)
  })

  API.special.forEach(x => special += template(x, 'special'))

  document.querySelector('#base.priority__items').innerHTML = base
  document.querySelector('#special.priority__items').innerHTML = special

  const chartBlock = document.querySelector('#base .priority__item_charted')
  showChart(chartBlock, 'p5', diagramData)
}
setItems()

