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


//Estilos para el dropdown
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".dropdown-toggle");
    const dropdown = document.querySelector(".dropdown");

    toggleButton.addEventListener("click", function () {
        dropdown.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && !toggleButton.contains(event.target)) {
            dropdown.classList.remove("open");
        }
    });
});



//Dropdown de chats
const chevronIcon = document.querySelector('.fas.fa-chevron-down');
const dropdownContainer = document.querySelector('.opciones-contacto');
const dropdownItems = document.querySelectorAll('.dropdown-item');

chevronIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdownContainer.classList.toggle('open');
});

// Evento de clic en el documento para cerrar el dropdown al hacer clic fuera de él
document.addEventListener('click', (event) => {
    if (!dropdownContainer.contains(event.target) && dropdownContainer.classList.contains('open')) {
        dropdownContainer.classList.remove('open');
    }
});

// Animación de aparición suave para cada elemento del dropdown
dropdownItems.forEach((item, index) => {
    item.style.transitionDelay = (index * 0.1) + 's'; // Ajusta el retraso para cada elemento
});



//Textarea de offcanvas de mensajes
// Obtener el elemento del textarea
var textarea = document.getElementById('contacto');

// Agregar un evento de enfoque (focus) al textarea
textarea.addEventListener('focus', function() {
    // Eliminar el atributo placeholder
    this.removeAttribute('placeholder');
});


//
// Obtener el elemento del textarea y el botón de limpiar
var textarea = document.getElementById('contacto');
var clearButton = document.getElementById('clearButton');

// Guardar el valor original del placeholder
var placeholder = textarea.placeholder;

// Agregar un evento de clic al botón de limpiar
clearButton.addEventListener('click', function() {
    // Restaurar el valor del placeholder al textarea
    textarea.value = '';
    textarea.placeholder = placeholder;
    // Ocultar el botón de limpiar
    clearButton.style.display = 'none';
});

// Agregar un evento de entrada (input) al textarea
textarea.addEventListener('input', function() {
    // Mostrar el botón de limpiar si el textarea tiene contenido
    if (textarea.value.length > 0) {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }
});


//

const toggleButton = document.querySelector('.informacion-del-usuario-toggle-button');
const offcanvasPanel = document.querySelector('.informacion-del-usuario-panel');
const closeButton = document.querySelector('.close-button');
const content = document.querySelector('.content');

toggleButton.addEventListener('click', () => {
    if (offcanvasPanel.style.right === '0px') {
        closeOffcanvas();
    } else {
        openOffcanvas();
    }
});

closeButton.addEventListener('click', () => {
    closeOffcanvas();
});

function openOffcanvas() {
    offcanvasPanel.style.right = '0px';
    content.style.marginLeft = '250px';
}

function closeOffcanvas() {
    offcanvasPanel.style.right = '-250px';
    content.style.marginLeft = '0';
}

