const pdfFiles = [
  './assets/defaultSecond/dist/pdf/act2.pdf',
  './assets/defaultSecond/dist/pdf/act1.pdf',
  './assets/defaultSecond/dist/pdf/act3.pdf',
  './assets/defaultSecond/dist/pdf/act4.pdf',
  './assets/defaultSecond/dist/pdf/act5.pdf',
  './assets/defaultSecond/dist/pdf/act6.pdf',
  './assets/defaultSecond/dist/pdf/act7.pdf',
  './assets/defaultSecond/dist/pdf/act8.pdf',
];

// Инициализация PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.js';

// Функция для отображения pdf-файла в модальном окне
let canvas; // Объявляем canvas в глобальной области видимости
let ctx; // Объявляем ctx в глобальной области видимости

function openPdfModal(fileIndex) {
  const modal = document.getElementById('pdfPopup');
  let pdfDoc = null;
  let pageNum = 1;
  let pageRendering = false;
  let scale = 1.1;

  // Проверяем, что индекс файла находится в допустимом диапазоне
  if (fileIndex >= 0 && fileIndex < pdfFiles.length) {
    // Создаем новый canvas
    canvas = document.createElement('canvas');
    canvas.id = 'pdfCanvas';
    canvas.className = 'pdf-canvas';
    canvas.width = modal.offsetWidth;
    canvas.height = modal.offsetHeight;
    modal.appendChild(canvas);

    ctx = canvas.getContext('2d');

    // Используем PDF.js для загрузки PDF файла
    pdfjsLib.getDocument(pdfFiles[fileIndex]).promise.then(function(pdfDoc_) {
      pdfDoc = pdfDoc_;
      renderPage(pageNum);
    }).catch(function(error) {
      console.error('Ошибка загрузки PDF файла:', error);
    });

    // Открываем модальное окно
    modal.style.display = 'flex';
  } else {
    console.error("Индекс файла вне диапазона");
  }

  // Функция для отрисовки страницы
  function renderPage(num) {
    if (pageRendering) {
      // Если страница уже отрисовывается, то не отрисовываем ее еще раз
      return;
    }
    pageRendering = true;
    // Получаем страницу
    pdfDoc.getPage(num).then(function(page) {
      var viewport = page.getViewport({scale: scale});
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };

      var renderTask = page.render(renderContext);

      renderTask.promise.then(function() {
        pageRendering = false;
      });
    }).catch(function(error) {
      console.error('Ошибка при отрисовке страницы:', error);
    });
  }


  document.getElementById('next').addEventListener('click', function() {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    renderPage(pageNum);
  });

}
// Находим кнопки и добавляем обработчики событий
const openPdfButtons = document.querySelectorAll('.openPdfButton');
openPdfButtons.forEach(button => {
  button.addEventListener('click', function() {
      const fileIndex = parseInt(this.getAttribute('data-file-index'));
      openPdfModal(fileIndex);
  });
});

function closePdfModal() {
  const modal = document.getElementById('pdfPopup');
  const canvas = document.getElementById('pdfCanvas');
  let pageNum = 1; // Если вы хотите сбросить номер страницы, инициализируйте его здесь
  let scale = 1; // Если вы хотите сбросить масштаб, инициализируйте его здесь

  // Удаляем существующий canvas
  if (canvas) {
    canvas.remove();
  }


  pageNum = 0;
  scale = 0;

  // Скрываем модальное окно
  modal.style.display = 'none';
}


// Добавляем функцию в качестве обработчика событий для overlay
const closeModalOverlay = document.querySelector('.pdf-overlay');
closeModalOverlay.addEventListener('click', closePdfModal);

