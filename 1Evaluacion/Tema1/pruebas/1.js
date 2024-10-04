// Función para mostrar un saludo
function mostrarSaludo() {
    alert("¡Hola desde el archivo script.js!");
}

// Agregar el evento al botón cuando el contenido del documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const botonSaludo = document.getElementById("botonSaludo");
    botonSaludo.addEventListener("click", mostrarSaludo);
});
