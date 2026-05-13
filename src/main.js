async function cargarMenu() {
    try {
        // Carga el JSON desde la carpeta data
        const response = await fetch('../data/productos.json');
        const data = await response.json();
        const grid = document.getElementById('menu-grid');
        
        // Comprobar si es hora del recreo para ofertas flash
        const ahora = new Date();
        const horaActual = ahora.getHours() + ":" + ahora.getMinutes().toString().padStart(2, '0');
        const esRecreo = (horaActual >= data.configuracion.recreo_inicio && 
                         horaActual <= data.configuracion.recreo_fin);

        actualizarCabecera(esRecreo);

        data.categorias.forEach(cat => {
            cat.items.forEach(item => {
                const esOfertaFlash = esRecreo && item.flash;
                
                const card = document.createElement('div');
                card.className = `card ${esOfertaFlash ? 'oferta-activa' : ''}`;
                
                card.innerHTML = `
                    ${esOfertaFlash ? '<div class="badge-flash">OFERTA FLASH</div>' : ''}
                    <img src="../assets/img/${item.imagen || 'default.jpg'}" alt="${item.nombre}">
                    <h3>${item.nombre}</h3>
                    <p class="precio">${item.precio.toFixed(2)}€</p>
                `;
                grid.appendChild(card);
            });
        });
    } catch (error) {
        console.error("Error cargando el menú:", error);
    }
}

function actualizarCabecera(esRecreo) {
    const status = document.getElementById('status-bar');
    if (esRecreo) {
        status.textContent = "🔥 ¡OFERTAS FLASH ACTIVAS! 🔥";
        status.style.background = "#ff0055";
    } else {
        status.textContent = "Menú del Día - IES Aljada";
    }
}

// Reloj en tiempo real
setInterval(() => {
    const d = new Date();
    document.getElementById('reloj').textContent = d.toLocaleTimeString();
}, 1000);

window.onload = cargarMenu;