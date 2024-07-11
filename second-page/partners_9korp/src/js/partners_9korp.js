const filterButtons = document.querySelectorAll('.partners__filter-button');
const partnerItems = document.querySelectorAll('.partners__list li');

function sortAndDisplayCards() {
    const list = document.querySelector('.partners__list');
    const cards = Array.from(document.querySelectorAll('.partners__card')).filter(card => card.parentElement.style.display !== 'none');

    cards.sort((a, b) => {
        const sumAElement = a.querySelector('.partners-card-sum');
        const sumBElement = b.querySelector('.partners-card-sum');
        const studentAElement = a.querySelector('.partners-card-students');
        const studentBElement = b.querySelector('.partners-card-students');

        let sumA = sumAElement ? parseFloat(sumAElement.textContent.replace(/\s/g, '').replace(',', '.')) : 0;
        let sumB = sumBElement ? parseFloat(sumBElement.textContent.replace(/\s/g, '').replace(',', '.')) : 0;
        let studentA = studentAElement ? parseFloat(studentAElement.textContent.replace(/\s/g, '').replace(',', '.')) : 0;
        let studentB = studentBElement ? parseFloat(studentBElement.textContent.replace(/\s/g, '').replace(',', '.')) : 0;

        // Сначала сортируем по сумме, если суммы равны, то сортируем по количеству студентов
        if (sumB - sumA !== 0) {
            return sumB - sumA;
        } else {
            return studentB - studentA ;
        }
    });

    list.innerHTML = '';
    cards.forEach(card => list.appendChild(card.parentElement));
}

function filterPartnerItems(filter) {
    partnerItems.forEach(item => {
        const categories = item.querySelectorAll('.partners__category');
        const projectsSummary = document.querySelector('.partners__category_type_project') 
        let shouldShow = false;

        if (filter === 'Все') {
            shouldShow = true;
            projectsSummary.style.display = "flex";
        } else {
            categories.forEach(category => {
                if (category.textContent.trim() === filter) {
                    shouldShow = true;
                    projectsSummary.style.display = "none"

                }
            });
        }

        if (shouldShow) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function countCategories(filter) {
    const categories = {
        'education': 0,
        'science': 0,
        'dpo': 0,
        'project': 0
    };

    const cards = document.querySelectorAll('.partners__card');
    let totalSum = 0;

    cards.forEach(card => {
        const categoryElements = card.querySelectorAll('.partners__category');
        let shouldCount = false;

        if (filter === 'Все') {
            shouldCount = true;
        } else {
            categoryElements.forEach(categoryElement => {
                if (categoryElement.textContent.trim() === filter) {
                    shouldCount = true;
                }
            });
        }

        if (shouldCount) {
            totalSum++; 
            categoryElements.forEach(categoryElement => {
                const img = categoryElement.querySelector('img');
                if (img) {
                    const src = img.src;
                    if (src.includes('education-icon-element')) {
                        categories.education++;
                    } else if (src.includes('science-icon-element')) {
                        categories.science++;
                    } else if (src.includes('dpo-icon-element')) {
                        categories.dpo++;
                     } // } else if (src.includes('project-icon-element')) {
                    //     categories.project++;
                    // }
                }
            });
        }
    });

const totalProject = categories.education + categories.science + categories.dpo;

    // document.getElementById('education-summary').textContent = categories.education;
    // document.getElementById('science-summary').textContent = categories.science;
    // document.getElementById('dpo-summary').textContent = categories.dpo;
    document.getElementById('project-summary').textContent = totalProject;
    document.getElementById('all-summary').textContent = totalSum; 
}

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('partners__filter-button_active'));
        this.classList.add('partners__filter-button_active');

        const filter = this.textContent.trim();
        filterPartnerItems(filter);
        countCategories(filter);
    });
});
  
countCategories('Все');
filterPartnerItems('Все');
sortAndDisplayCards();















//=============================================== Отображение карточек в модальном окне ===========================================



// const popup = document.querySelector('.popup');
// const popupContent = document.querySelector('.popup__content');

// function openPopup(content) {
//     popupContent.innerHTML = '';
//     popupContent.appendChild(content);
//     popup.classList.add('popup_is_active');
//     popup.addEventListener('click', handleOverlayClosePopup);
//     document.addEventListener('keydown', handleEscClosePopup);
// }

// function closePopup(evt) {
//     if (evt.target === evt.currentTarget || evt.target.classList.contains('close')) {
//         popup.classList.remove('popup_is_active');
//         popupContent.innerHTML = '';
//         popup.removeEventListener('click', handleOverlayClosePopup);
//         document.removeEventListener('keydown', handleEscClosePopup);
//     }
// }

// function handleOverlayClosePopup(evt) {
//     if (evt.target === evt.currentTarget) {
//         closePopup(evt);
//     }
// }

// function handleEscClosePopup(evt) {
//     if (evt.key === 'Escape') {
//         closePopup(evt);
//     }
// }

// function handleClick(elementSelector) {
//     let elements = document.querySelectorAll(elementSelector);

//     elements.forEach(function(element) {
//         element.addEventListener('click', function(evt) {
//             evt.preventDefault();
//             let content = element.cloneNode(true);

//             let brTags = content.querySelectorAll('br');
//             brTags.forEach(function(br) {
//                 br.parentNode.removeChild(br);
//             });

//             let clonedLinks = content.querySelectorAll('a');
//             clonedLinks.forEach(function(link) {
//                 link.addEventListener('click', function(evt) {
//                     if (!this.classList.contains('link-unvailable')) {
//                         evt.preventDefault();

//                     }
//                 });
//             });

//             openPopup(content);
//         });
//     });
// }

// handleClick('.partners__card');

