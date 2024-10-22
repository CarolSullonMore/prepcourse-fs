//Cambiar el titulo de mi pestana
let previousTitle = document.title

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = 'A donde fuiste... 👀';
})

window.addEventListener('focus', () => {
    previousTitle = document.title;
})


// Esperar a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Crear un objeto de audio con el sonido deseado
    const sound = new Audio('path/to/your/sound.mp3'); // Asegúrate de que el archivo de sonido esté en la ruta correcta

    // Función para reproducir sonido (por ajora np funciona hehe)
    function playSound() {
        sound.currentTime = 0; // Reiniciar el sonido
        sound.play(); // Reproducir el sonido
    }

    // Reproducir sonido al pasar sobre los paneles con la clase 'decorated-box'
    const panels = document.querySelectorAll('.decorated-box');
    panels.forEach(panel => {
        panel.addEventListener('mouseenter', playSound); // Sonido al hacer hover sobre el panel
    });

    // Desplazamiento suave al hacer clic en los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault(); // Prevenir el comportamiento por defecto
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
                playSound(); // Reproducir sonido
            }
        });
    });
});

const btn = document.querySelector(".scrollUpButton");

btn.addEventListener("click", () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
