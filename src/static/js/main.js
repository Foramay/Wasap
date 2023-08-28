//Acá voy a dejar todas las funciones



//Esta funcion lo que hace es abrir y cerrar el offcanvas
document.addEventListener("DOMContentLoaded", function () {
    const offcanvas = document.querySelector(".offcanvas");
    const toggleButton = document.querySelector(".toggle-offcanvas");
    const closeButton = document.querySelector(".close-offcanvas");

    toggleButton.addEventListener("click", function () {
        offcanvas.classList.add("active");
    });

    closeButton.addEventListener("click", function () {
        offcanvas.classList.remove("active");
    });

    const offcanvas2 = document.querySelector(".offcanvas-comunidad");
    const toggleButton2 = document.querySelector(".toggle-offcanvas-comunidad");
    const closeButton2 = document.querySelector(".close-offcanvas-comunidad");

    toggleButton2.addEventListener("click", function () {
        offcanvas2.classList.add("active");
    });

    closeButton2.addEventListener("click", function () {
        offcanvas2.classList.remove("active");
    });

    const offcanvas3 = document.querySelector(".offcanvas-mensajes");
    const toggleButton3 = document.querySelector(".toggle-offcanvas-mensajes");
    const closeButton3 = document.querySelector(".close-offcanvas-mensajes");

    toggleButton3.addEventListener("click", function () {
        offcanvas3.classList.add("active");
    });

    closeButton3.addEventListener("click", function () {
        offcanvas3.classList.remove("active");
    });
});


