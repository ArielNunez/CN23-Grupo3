window.addEventListener('load', () => {
    /* Nav desplegable del header */
    let headerNav = document.querySelector('header .nav1 ul');
    let burger = document.querySelector('header .nav1 span');

    burger.addEventListener('click', () => {
        headerNav.classList.toggle('display-none');
        burger.classList.toggle('cross');
    });

    /* Nav desplegable de edición de perfil */
    let userNav = document.querySelector('.perfilDeUsuario nav.userNav div.nav1');
    let button = document.querySelector('.perfilDeUsuario nav div.nav2 span');

    if(button) {
        button.addEventListener('click', () => {
            userNav.classList.toggle('display-none');
            button.classList.toggle('arrow-up');
        });
    }
    
});