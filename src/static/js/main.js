//Acá voy a dejar todas las funcionalidades de JavaScript


//Esta función la cree para que cuando el usuario haga click en el icono de buscar, se conecte automaticamente con el textarea
document.getElementById('icono').addEventListener('click', function() {
    document.getElementById('textarea').focus();
});


//Esta función lo que hace es que cuando el usuario haga click sobre el textarea, desaparezca el placeholder
document.getElementById('textarea').addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});

document.getElementById('textarea').addEventListener('blur', function() {
    if (!this.value) {
        this.setAttribute('placeholder', 'Busca un chat o inicia uno nuevo.');
    }
});


//Esta función lo que hace es solamente cambiar de un icono a otro al hacer click en el textarea
document.getElementById('textarea').addEventListener('focus', function() {
    this.removeAttribute('placeholder');
    document.getElementById('icono').classList.replace('fa-magnifying-glass', 'fa-arrow-left');
});

document.getElementById('textarea').addEventListener('blur', function() {
    if (!this.value) {
        this.setAttribute('placeholder', 'Busca un chat o inicia uno nuevo.');
        document.getElementById('icono').classList.replace('fa-arrow-left', 'fa-magnifying-glass');
    }
});






