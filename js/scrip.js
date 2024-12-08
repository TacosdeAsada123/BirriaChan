// Función para ocultar el loader y mostrar el contenido
/*window.onload = function() {
    // Ocultar el loader
    document.getElementById('loader').style.display = 'none';

    // Mostrar el contenido de la página
    document.getElementById('content').style.display = 'block';
};
*/
window.addEventListener('load', function() {
    // La función se ejecuta cuando toda la página ha cargado
    setTimeout(function() {
        // Oculta la pantalla de carga después de 0.5 segundos (500 ms)
        document.getElementById('loader').style.display = 'none';
    }, 500); // Ajusta el tiempo en milisegundos a lo que necesites
});


    // JavaScript para activar y desactivar el menú
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Obtener los elementos
var popup = document.getElementById("popup");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

// Abrir la ventana emergente
openBtn.onclick = function() {
  popup.style.display = "flex"; // Muestra la ventana emergente
}

// Cerrar la ventana emergente
closeBtn.onclick = function() {
  popup.style.display = "none"; // Oculta la ventana emergente
}

// Cerrar la ventana si se hace clic fuera de la ventana emergente
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
