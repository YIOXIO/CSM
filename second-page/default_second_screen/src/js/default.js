const pdfFiles = [
    './pdf/A4.pdf',
    './pdf/act.pdf',
    './pdf/buklet.pdf'
];
  // Функция для отображения pdf-файла в модальном окне
  function openPdfModal(fileIndex) {
    const modal = document.getElementById('pdfPopup');
    const iframe = document.getElementById('pdfViewer');
  
    // Проверяем, что индекс файла находится в допустимом диапазоне
    if (fileIndex >= 0 && fileIndex < pdfFiles.length) {
      // Устанавливаем URL нужного PDF-файла
      iframe.src = pdfFiles[fileIndex];
      // Открываем модальное окно
      modal.style.display = 'flex';
    } else {
      console.error("Индекс файла вне диапазона");
    }
  }
  
  // Находим кнопку, на которую будем нажимать, и добавляем обработчик события
  const openPdfButtons = document.querySelectorAll('.openPdfButton');

  // Для каждой кнопки добавляем обработчик события
  openPdfButtons.forEach(button => {
      button.addEventListener('click', function() {
          const fileIndex = parseInt(this.getAttribute('data-file-index'));
          openPdfModal(fileIndex);
      });
  });
  
  // Закрытие модального окна при нажатии на крестик
  const closeModalButton = document.getElementsByClassName('pdfCloseButton')[0];
  closeModalButton.addEventListener('click', function() {
    const modal = document.getElementById('pdfPopup');
    modal.style.display = 'none';
  });