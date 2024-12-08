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