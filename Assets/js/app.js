const n = document.querySelector('header nav');
const burger = document.querySelector('#menu-check');

/* mueve el menú fuera del viewport */
function hideMenu() {
    burger.setAttribute('checked', 'false');
    n.setAttribute("right", "-100%");
    n.classList.remove("mostrar");
}


//al clickear en el menu hamburguesa le damos una clase al menu de navegacion
//que nos permita referenciarlo mas tarde para ocultarlo (la llamamos: mostrar)
burger.addEventListener("click", () => {
    n.classList.toggle("mostrar");
});

// asociamos un eventListener a cada etiqueta <a>
// para invocar a hideMenu cuando se clickea en un enlace
const navLink = document.querySelectorAll('body nav a');
navLink.forEach((link) =>
link.addEventListener("click", hideMenu));