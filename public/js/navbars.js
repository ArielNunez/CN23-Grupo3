window.addEventListener('load', () => {
    /* Nav desplegable del header */
    let headerNav = document.querySelector('header .nav1 ul');
    let burger = document.querySelector('header .nav1 span');
    let hr = document.querySelector('header .nav1 hr.perfil');
    let perfil = document.querySelector('header .nav1 li.perfil');

    if (burger) {
        burger.addEventListener('click', () => {
        headerNav.classList.toggle('display-none');
        burger.classList.toggle('cross');
        perfil.classList.toggle('display-none');
        hr.classList.toggle('display-none');
    });
}

    /* Nav desplegable de edición de perfil */
    let userNav = document.querySelector('.perfilDeUsuario nav.userNav div.nav1');
    let button = document.querySelector('.perfilDeUsuario nav div.nav2 span');

    if(button) {
        button.addEventListener('click', () => {
            userNav.classList.toggle('display-none');
            button.classList.toggle('arrow-up');
        });
    }
    
    /* Nav desplegable de admin */
    let adminNav = document.querySelector('header .navAdmin div.admin');
    let burgerAdmin = document.querySelector('header .navAdmin span');

    if(burgerAdmin) {
        burgerAdmin.addEventListener('click', () => {
            adminNav.classList.toggle('display-none');
            burgerAdmin.classList.toggle('cross');
        });
    }
    
});