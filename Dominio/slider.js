const imagenes = [
    "Basica.jpeg", 
    "", 
    "Operadores.jpeg",
    "Radio.jpeg",
    "Inmarsat.jpeg"
];

let indice = 0;
let intervalo;

const slider = document.getElementById("sliderImagen");

function mostrarImagen() {
    slider.style.opacity = 0;
    setTimeout(() => {
        slider.src = imagenes[indice];
        slider.style.opacity = 1;
    }, 200);
}

function cambiarImagen(direccion) {
    indice = (indice + direccion + imagenes.length) % imagenes.length;
    mostrarImagen();
}

function iniciarSlider() {
    intervalo = setInterval(() => {
        cambiarImagen(1);
    }, 5000); // cambia cada 5 segundos
}

function detenerSlider() {
    clearInterval(intervalo);
}

// Eventos para pausar y reanudar el slider al pasar el mouse
slider.addEventListener("mouseover", detenerSlider);
slider.addEventListener("mouseout", iniciarSlider);

// Inicializa el slider
iniciarSlider();

// Espera que cargue el DOM para iniciar las animaciones
document.addEventListener("DOMContentLoaded", function () {
    // Animación para elementos con clase 'fade-in'
    const elementosFade = document.querySelectorAll('.fade-in');
    const observerFade = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });

    elementosFade.forEach(el => observerFade.observe(el));

    // Animación para elementos con clase 'animar' (como quienes somos)
    const elementosAnimar = document.querySelectorAll('.animar');
    const observerAnimar = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    elementosAnimar.forEach(el => observerAnimar.observe(el));
});

    document.getElementById("mapaBtn").addEventListener("click", function() 
    {
        this.remove(); // Elimina el botón
        window.open("https://www.google.com/maps", "_blank"); // Abre Google Maps (puedes cambiar el enlace)
    }
);


