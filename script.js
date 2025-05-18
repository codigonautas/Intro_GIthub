// Selecciona el botón por su ID
const button = document.getElementById('colorButton');

// Lista de colores para cambiar el fondo
const colors = ['#ffcccb', '#b3e5fc', '#c8e6c9', '#fff9c4'];

// Función para obtener un color aleatorio
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Añade un evento de clic al botón
button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

// Mensaje de consola para la rama main
console.log("Rama por defecto");
