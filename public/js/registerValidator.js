window.addEventListener('load', function() {

    let form = document.querySelector('#registro');

    form.addEventListener('submit', function(event) {
            event.preventDefault();

            let inputNombre = document.querySelector('#nombre');
        inputApellido = document.querySelector('#apellido');
        inputNacimiento = document.querySelector('#nacimiento');
        inputDni = document.querySelector('#dni');
        inputEmail = document.querySelector('#email');
        inputConfEmail = document.querySelector('#confEmail');
        inputPass = document.querySelector('#pass');
        inputConfPass = document.querySelector('#confPass');
        inputTyC = document.querySelector('#TyC');

    let errorNombre = document.querySelector('errorNombre');
        errorApellido = document.querySelector('errorApellido');
        errorNacimiento = document.querySelector('errorNacimiento');
        errorDni = document.querySelector('errorDni');
        errorEmail = document.querySelector('errorEmail');
        errorConfEmail = document.querySelector('errorConfEmail');
        errorPass = document.querySelector('errorPass');
        errorConfPass = document.querySelector('errorConfPass');
        errorNombre = document.querySelector('errorTyC')

    let errores = {};
    let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let dateRegEx = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    let numRegEx = /^[0-9]+$/;


    // VALIDACIÓN NOMBRE

    if(inputNombre.value.length == 0) {
        errores.nombre = "* Este campo es obligatorio"
        errorNombre.innerText = errores.nombre
    } else if (inputNombre.value.length < 2) { 
        errores.nombre = "* El nombre debe tener como mínimo 2 caracteres"
        errorNombre.innerText = errores.nombre
    }

    // VALIDACIÓN APELLIDO

    if(inputApellido.value.length == 0) {
        errores.apellido = "* Este campo es obligatorio"
        errorApellido.innerText = errores.apellido
    } else if (inputApellido.value.length < 2) { 
        errores.apellido = "* El apellido debe tener como mínimo 2 caracteres"
        errorApellido.innerText = errores.apellido
    }

    // VALIDACIÓN NACIMIENTO

    if (!(dateRegEx.test(inputNacimiento.value))) {
    errores.nacimiento = "* Ingrese una fecha de nacimiento válida"
    errorNacimiento.innerText = errores.nacimiento
    }

    // VALIDACIÓN DNI

    if(!(numRegEx.test(inputDni.value))) {
        errores.dni = "* Ingrese un número de DNI válido, sin puntos ni comas"
        errorDni.innerText = errores.dni
    }

    //VALIDACIÓN MAIL
    
    if (inputEmail.value == 0) {
        errorEmail.innerHTML = "* Este campo es obligatorio"
        errores.email = true;
    } else if (!regEx.test(inputEmail.value)) {
        errorEmail.innerHTML = "* Debes ingresar un email válido";
        errores.email = true;
    }

    //VALIDACIÓN CONFRMACIÓN EMAIL
    
    if (inputEmail.value == 0) {
        errorEmail.innerHTML = "* Este campo es obligatorio"
        errores.email = true;
    } else if (!regEx.test(inputEmail.value)) {
        errorEmail.innerHTML = "* Debes ingresar un email válido";
        errores.email = true;
    } else if (inputEmail.value !== inputConfEmail.value) {
        errorConfEmail.innerText = "* La contraseña debe coincidir con la ingresada anteriormente"
        errores.errorConfEmail = true;
    }

    //VALIDACIÓN PASSWORD
    
    if (inputPass.value == 0) {
        errorPass.innerHTML = "* Este campo es obligatorio"
        errores.pass = true;
    } else if (inputPass.value < 6) {
        errorPass.innerHTML = "* La contraseña debe tener un mínimo de 6 caracteres"
        errores.pass = true;
    }

    //VALIDACIÓN CONFIRMACIÓN PASSWORD
    
    if (inputPass.value == 0) {
        errorPass.innerHTML = "* Este campo es obligatorio"
        errores.pass = true;
    } else if (inputPass.value < 6) {
        errorPass.innerHTML = "* La contraseña debe tener un mínimo de 6 caracteres"
        errores.pass = true;
    } else if (inputPass.value !== inputConfPass.value) {
        errorConfPass.innerText = "* La contraseña debe coincidir con la ingresada anteriormente"
        errores.errorConfPass = true;
    }

    // VALIDACIÓN TYC

    if(!suscripcion.registro.checkbox.checked) {
        errorTyC.innerHTML = "* Debes aceptar los términos y condiciones"
        errores.tyc = true;
    }

    if(Object.keys(errores).length == 0) {
        form.submit()
    }
}) 
})