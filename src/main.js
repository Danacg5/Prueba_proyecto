document.addEventListener('DOMContentLoaded', () => {
    // 1. Reloj en tiempo real
    const updateClock = () => {
        const now = new Date();
        const clockElement = document.getElementById('liveClock');
        if (clockElement) {
            clockElement.innerText = now.toLocaleTimeString();
        }
    };
    setInterval(updateClock, 1000);
    updateClock(); // Llamada inicial

    // 2. Rotación del Menú (Izquierda) - Cada 10 segundos
    const categories = document.querySelectorAll('.menu-category');
    let currentCat = 0;
    if (categories.length > 0) {
        setInterval(() => {
            categories[currentCat].classList.remove('active');
            currentCat = (currentCat + 1) % categories.length;
            categories[currentCat].classList.add('active');
        }, 10000);
    }

    // 3. Rotación de Ofertas (Derecha) - Cada 5 segundos
    const promos = document.querySelectorAll('.promo-slide');
    let currentPromo = 0;
    if (promos.length > 0) {
        setInterval(() => {
            promos[currentPromo].classList.remove('active');
            currentPromo = (currentPromo + 1) % promos.length;
            promos[currentPromo].classList.add('active');
        }, 5000);
    }
});
