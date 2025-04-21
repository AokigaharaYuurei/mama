let menuOpen = false;

function toggleMenu() {
    const menu = document.querySelector('.list');
    const login = document.querySelector('.login');
    
    if (menuOpen) {
        menu.style.display = 'none'; // Скрываем меню
        login.style.display = 'none'; // Скрываем иконку и текст "войти"
    } else {
        menu.style.display = 'flex'; // Показываем меню
        login.style.display = 'flex'; // Показываем иконку и текст "войти"
    }
    
    menuOpen = !menuOpen; // Переключаем состояние меню
}

// Закрыть меню при клике на элемент списка
document.querySelectorAll('.list_element').forEach(item => {
    item.addEventListener('click', () => {
        menuOpen = false; // Устанавливаем состояние меню в закрытое     document.querySelector('.list').style.display = 'none'; // Скрываем меню
        document.querySelector('.login').style.display = 'none'; // Скрываем логин
    });
});
