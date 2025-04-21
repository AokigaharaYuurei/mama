
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
    }

    // Обработчик события для кнопки "Вперед"
    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length; 
        updateCarousel();
    });

    // Обработчик события для кнопки "Назад"
    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length; 
        updateCarousel();
    });

    updateCarousel();
