// main.js

// Rotar Menú Izquierdo cada 8 segundos
const boxes = document.querySelectorAll('.category-box');
let currentBox = 0;

setInterval(() => {
    boxes[currentBox].classList.remove('active');
    currentBox = (currentBox + 1) % boxes.length;
    // Pequeño timeout para reiniciar la animación CSS
    setTimeout(() => { 
        boxes[currentBox].classList.add('active'); 
    }, 50);
}, 8000);


// Rotar Promos Derecha cada 5 segundos
const promos = document.querySelectorAll('.promo-content');
let currentPromo = 0;

setInterval(() => {
    promos[currentPromo].classList.remove('active');
    currentPromo = (currentPromo + 1) % promos.length;
    promos[currentPromo].classList.add('active');
}, 5000);
