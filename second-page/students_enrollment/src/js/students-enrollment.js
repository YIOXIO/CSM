const tabs = document.querySelectorAll('.students-enrollment__tab')
const tabcontent = document.querySelectorAll('.students-enrollment__tabcontent')

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabcontent.forEach(item => item.classList.remove('show'))
        tabcontent.forEach(item => item.classList.add('hide'))
        tabcontent[index].classList.add('show')

        tabs.forEach(item => {
            item.querySelector('svg').querySelector('path').setAttribute('stroke', 'rgba(33, 122, 255, 0.2)')
            item.classList.remove('students-enrollment__tab_active')
        })

        tab.querySelector('svg').querySelector('path').setAttribute('stroke', '#217AFF')
        tab.classList.add('students-enrollment__tab_active')
    })
})

// Закрузка Excel файла
const XLSX = require('xlsx');
const fileUrl = '/assets/studentsEnrollment/dist/data/report-b.xlsx';


async function loadExcelFile() {
    const container = document.getElementById('tableContainer');

    try {
        const response = await fetch(fileUrl, {
            method: 'GET',
            headers: { 'Cache-Control': 'no-cache' }
        });

        if (!response.ok) {
            throw new Error(`Файл не найден ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();

        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const htmlTable = XLSX.utils.sheet_to_html(worksheet);

        container.innerHTML = htmlTable;

    } catch (err) {
        console.error(err);
    }
}


window.onload = loadExcelFile;