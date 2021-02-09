window.addEventListener('load', function() {

    let form = document.querySelector('#login');

    let email = document.querySelector('#email');
    let pass = document.querySelector('#pass');

    let smallMail = document.querySelector('#smallMail');
    let smallPass = document.querySelector('#smallPass');

    let errores = {};

    let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    pass.addEventListener('blur', function() {
        if (pass.value < 6) {
            smallPass.innerHTML = '* La contraseña debe tener un mínimo de 6 caracteres';
            errores.pass = true;
        } else {
            smallPass.innerHTML = '';
            delete errores.pass;
        }
    });

    email.addEventListener('blur', function() {
        if (!regEx.test(email.value)) {
            smallMail.innerHTML = '* Debes ingresar un email correcto';
            errores.email = true;
        } else {
            smallMail.innerHTML = '';
            delete errores.email;
        }
    });

    form.addEventListener('submit', function(event) {
        if(Object.keys(errores).length != 0) {
            event.preventDefault();
        }
    });

})