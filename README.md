<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Aljada Digital Signage</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <style>
        :root {
            --aljada-green: #8db600;
            --dark-glass: rgba(0, 0, 0, 0.75);
            --light-glass: rgba(255, 255, 255, 0.9);
            --accent: #ff9f43;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background: linear-gradient(135deg, #1e272e 0%, #485e00 100%);
            color: white;
            height: 100vh;
            overflow: hidden;
        }

        .dashboard {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            grid-template-rows: 80px 1fr 60px;
            gap: 20px;
            height: 100vh;
            padding: 20px;
            box-sizing: border-box;
        }

        /* Cabecera */
        header {
            grid-column: span 2;
            background: var(--light-glass);
            color: #222;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        .logo-area { font-weight: 900; font-size: 1.8rem; letter-spacing: -1px; }
        .clock { font-size: 1.5rem; font-weight: bold; color: var(--aljada-green); }

        /* Panel Izquierdo: Menú Rotativo */
        .menu-panel {
            background: var(--light-glass);
            border-radius: 20px;
            padding: 30px;
            color: #333;
            position: relative;
            box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
        }

        .menu-category { display: none; height: 100%; }
        .menu-category.active { display: block; animation: fadeInRight 0.5s; }

        .category-title {
            font-size: 2.5rem;
            color: var(--aljada-green);
            border-bottom: 4px solid var(--aljada-green);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .menu-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #ddd;
            font-size: 1.4rem;
            font-weight: 600;
        }

        .price-tag {
            background: #222;
            color: white;
            padding: 5px 15px;
            border-radius: 8px;
            font-family: monospace;
        }

        /* Panel Derecho: Publicidad con tus Fotos */
        .promo-panel {
            background: var(--dark-glass);
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            border: 3px solid var(--aljada-green);
        }

        .promo-slide {
            display: none;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
        }

        .promo-slide.active { display: flex; animation: zoomIn 0.6s; }

        .promo-img {
            width: 90%;
            height: 50%;
            object-fit: cover;
            border-radius: 15px;
            margin-bottom: 20px;
            border: 4px solid white;
        }

        .promo-title { font-size: 2.5rem; color: var(--aljada-green); margin: 10px 0; }
        .promo-price { font-size: 4.5rem; font-weight: 900; color: white; margin: 0; text-shadow: 2px 2px 10px rgba(0,0,0,0.5); }

        /* Footer */
        footer {
            grid-column: span 2;
            background: rgba(0,0,0,0.5);
            border-radius: 10px;
            display: flex;
            align-items: center;
            padding: 0 20px;
            font-size: 1.2rem;
        }

        .marquee { overflow: hidden; white-space: nowrap; width: 100%; }
        .marquee span { display: inline-block; padding-left: 100%; animation: marquee 20s linear infinite; }

        @keyframes marquee { 0% { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }
    </style>
</head>
<body>

<div class="dashboard">
    <header>
        <div class="logo-area">IES ALJADA <span style="color: var(--aljada-green)">CANTINA</span></div>
        <div class="clock" id="liveClock">10:32:44</div>
    </header>

    <main class="menu-panel">
        <div class="menu-category active" id="cat-bocadillos">
            <div class="category-title">BOCADILLOS <span>🥖</span></div>
            <div class="menu-item"><span>Tortilla de Patatas</span> <div class="price-tag">2,40€</div></div>
            <div class="menu-item"><span>Atún con Tomate</span> <div class="price-tag">2,40€</div></div>
            <div class="menu-item"><span>Bacon / Lomo</span> <div class="price-tag">3,00€</div></div>
            <div class="menu-item"><span>Vegetal Completo</span> <div class="price-tag">2,40€</div></div>
            <div class="menu-item"><span>Especial "Aljada"</span> <div class="price-tag">1,50€</div></div>
        </div>

        <div class="menu-category" id="cat-bebidas">
            <div class="category-title">REFRESCOS Y CAFÉ <span>☕</span></div>
            <div class="menu-item"><span>Café con Leche</span> <div class="price-tag">1,50€</div></div>
            <div class="menu-item"><span>Zumo de Naranja Natural</span> <div class="price-tag">1,50€</div></div>
            <div class="menu-item"><span>Refrescos (Lata)</span> <div class="price-tag">1,00€</div></div>
            <div class="menu-item"><span>Agua Mineral</span> <div class="price-tag">0,50€</div></div>
        </div>

        <div class="menu-category" id="cat-bolleria">
            <div class="category-title">BOLLERÍA <span>🥐</span></div>
            <div class="menu-item"><span>Napolitanas Chocolate</span> <div class="price-tag">1,20€</div></div>
            <div class="menu-item"><span>Croissant Vegetal</span> <div class="price-tag">2,00€</div></div>
            <div class="menu-item"><span>Empanadillas</span> <div class="price-tag">1,20€</div></div>
        </div>
    </main>

    <aside class="promo-panel">
        <div class="promo-slide active">
            <img src="tu_foto_tortilla.jpg" alt="Tortilla" class="promo-img">
            <div class="promo-title">TORTILLA CASERA</div>
            <p>¡El pincho estrella!</p>
            <div class="promo-price">1,20€</div>
        </div>

        <div class="promo-slide">
            <img src="tu_foto_pan_pizza.jpg" alt="Pizza" class="promo-img">
            <div class="promo-title">PAN PIZZA</div>
            <p>Recién horneado</p>
            <div class="promo-price">1,80€</div>
        </div>

        <div class="promo-slide">
            <img src="tu_foto_napolitanas.jpg" alt="Dulces" class="promo-img">
            <div class="promo-title">DESAYUNO DULCE</div>
            <p>Napolitanas con azúcar</p>
            <div class="promo-price">1,20€</div>
        </div>
    </aside>

    <footer>
        <div class="marquee">
            <span>⚠️ AVISO: El suplemento por vaso para llevar es de 0,20€. ¡Disfruta de tu descanso en el IES Aljada! ⚠️</span>
        </div>
    </footer>
</div>

<script>
    // 1. Reloj en tiempo real
    function updateClock() {
        const now = new Date();
        document.getElementById('liveClock').innerText = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);

    // 2. Rotación del Menú (Izquierda) - Cada 10 segundos
    const categories = document.querySelectorAll('.menu-category');
    let currentCat = 0;
    setInterval(() => {
        categories[currentCat].classList.remove('active');
        currentCat = (currentCat + 1) % categories.length;
        categories[currentCat].classList.add('active');
    }, 10000);

    // 3. Rotación de Ofertas (Derecha) - Cada 5 segundos
    const promos = document.querySelectorAll('.promo-slide');
    let currentPromo = 0;
    setInterval(() => {
        promos[currentPromo].classList.remove('active');
        currentPromo = (currentPromo + 1) % promos.length;
        promos[currentPromo].classList.add('active');
    }, 5000);
</script>

</body>
</html>
