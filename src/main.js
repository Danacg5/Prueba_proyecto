document.addEventListener('DOMContentLoaded', () => {
    // 1. Reloj
    const updateClock = () => {
        const now = new Date();
        const clockElement = document.getElementById('liveClock');
        if (clockElement) {
            clockElement.innerText = now.toLocaleTimeString('es-ES', { hour12: false });
        }
    };
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Rotación Menú
    const categories = document.querySelectorAll('.category');
    let currentCat = 0;
    if(categories.length > 0) {
        setInterval(() => {
            categories[currentCat].classList.remove('active');
            currentCat = (currentCat + 1) % categories.length;
            categories[currentCat].classList.add('active');
        }, 10000);
    }

    // 3. Rotación Promos
    const promos = document.querySelectorAll('.promo');
    let currentPromo = 0;
    if(promos.length > 0) {
        setInterval(() => {
            promos[currentPromo].classList.remove('active');
            currentPromo = (currentPromo + 1) % promos.length;
            promos[currentPromo].classList.add('active');
        }, 6000);
    }
});
