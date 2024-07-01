document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.partners__filter-button');
    const partnerItems = document.querySelectorAll('.partners__list li');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('partners__filter-button_active'));
            this.classList.add('partners__filter-button_active');

            const filter = this.textContent.trim();
            filterPartnerItems(filter);
        });
    });

    function filterPartnerItems(filter) {
        partnerItems.forEach(item => {
            const categories = item.querySelectorAll('.partners__category');
            let shouldShow = false;

            if (filter === 'Все') {
                shouldShow = true;
            } else {
                categories.forEach(category => {
                    if (category.textContent.trim() === filter) {
                        shouldShow = true;
                    }
                });
            }

            if (shouldShow) {
                item.style.display = 'flex'            
            } else {
                item.style.display = 'none'
            }

            
        });
    }
});