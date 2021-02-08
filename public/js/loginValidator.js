let form = document.querySelector('#login');

let email = document.querySelector('#email');

let pass = document.querySelector('#pass');

let smallMail = document.querySelector('#smallMail');

let smallPass = document.querySelector('#smallPass');

let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

pass.addEventListener('blur', function() {
    if (pass.value < 6) {
        smallPass.innerHTML = 'La contraseña debe tener un mínimo de 6 caracteres'
    } else {
        smallPass.innerHTML = ''
    }
})

email.addEventListener('blur', function() {
    if (!regEx.test(email.value)) {
        smallMail.innerHTML = 'Debes ingresar un email correcto'
    } else {
        smallMail.innerHTML = ''
    }
})
