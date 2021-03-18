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

            let errorNombre = document.querySelector('#errorNombre');
                errorApellido = document.querySelector('#errorApellido');
                errorNacimiento = document.querySelector('#errorNacimiento');
                errorDni = document.querySelector('#errorDni');
                errorEmail = document.querySelector('#errorEmail');
                errorConfEmail = document.querySelector('#errorConfEmail');
                errorPass = document.querySelector('#errorPass');
                errorConfPass = document.querySelector('#errorConfPass');
                errorTyC = document.querySelector('.errorTyC')

            let errores = {};
            let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let dateRegEx = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;
            let numRegEx = /^[0-9]+$/;


    // VALIDACIÓN NOMBRE

    if(inputNombre.value.length == 0) {
        errores.nombre = "* Este campo es obligatorio"
        errorNombre.innerText = errores.nombre
    } else if (inputNombre.value.length < 2) { 
        errores.nombre = "* El nombre debe tener como mínimo 2 caracteres"
        errorNombre.innerText = errores.nombre
    } else {
        errorNombre.innerText = "";
    }

    // VALIDACIÓN APELLIDO

    if(inputApellido.value.length == 0) {
        errores.apellido = "* Este campo es obligatorio"
        errorApellido.innerText = errores.apellido
    } else if (inputApellido.value.length < 2) { 
        errores.apellido = "* El apellido debe tener como mínimo 2 caracteres"
        errorApellido.innerText = errores.apellido
    } else {
        errorApellido.innerText = "";
    }

    // VALIDACIÓN NACIMIENTO

    if (!(dateRegEx.test(inputNacimiento.value))) {
    errores.nacimiento = "* Ingrese una fecha de nacimiento válida"
    errorNacimiento.innerText = errores.nacimiento
    } else {
        errorNacimiento.innerText = "";
    }

    // VALIDACIÓN DNI

    if(!(numRegEx.test(inputDni.value))) {
        errores.dni = "* Ingrese un número de DNI válido, sin puntos ni comas"
        errorDni.innerText = errores.dni
    } else {
        errorDni.innerText = "";
    }

    //VALIDACIÓN MAIL
    
    if (inputEmail.value == 0) {
        errorEmail.innerHTML = "* Este campo es obligatorio"
        errores.email = true;
    } else if (!regEx.test(inputEmail.value)) {
        errorEmail.innerHTML = "* Debes ingresar un email válido";
        errores.email = true;
    } else {
        errorEmail.innerText = "";
    }

    //VALIDACIÓN CONFIRMACIÓN EMAIL
    
    if (inputConfEmail.value == 0) {
        errorConfEmail.innerHTML = "* Este campo es obligatorio"
        errores.confEmail = true;
    } else if (!regEx.test(inputEmail.value)) {
        errorConfEmail.innerHTML = "* Debes ingresar un email válido";
        errores.confEmail = true;
    } else if (inputEmail.value !== inputConfEmail.value) {
        errorConfEmail.innerText = "* Los emails no coinciden"
        errores.ConfEmail = true;
    } else {
        errorConfEmail.innerText = "";
    }

    //VALIDACIÓN PASSWORD
    
    if (inputPass.value == 0) {
        errorPass.innerHTML = "* Este campo es obligatorio"
        errores.pass = true;
    } else if (inputPass.value < 6) {
        errorPass.innerHTML = "* La contraseña debe tener un mínimo de 6 caracteres"
        errores.pass = true;
    } else {
        errorPass.innerText = "";
    }

    //VALIDACIÓN CONFIRMACIÓN PASSWORD
    
    if (inputConfPass.value == 0) {
        errorConfPass.innerHTML = "* Este campo es obligatorio"
        errores.confPass = true;
    } else if (inputConfPass.value < 6) {
        errorConfPass.innerHTML = "* La contraseña debe tener un mínimo de 6 caracteres"
        errores.confPass = true;
    } else if (inputPass.value !== inputConfPass.value) {
        errorConfPass.innerText = "* La contraseña debe coincidir con la ingresada anteriormente"
        errores.errorConfPass = true;
    } else {
        errorConfPass.innerText = "";
    }

    // VALIDACIÓN TYC

    if(!inputTyC.checked) {
        errorTyC.innerHTML = "* Debes aceptar los términos y condiciones"
        errores.errorTyC = true;
    } else {
        errorTyC.innerText = "";
    }

    if (Object.keys(errores).length == 0) {
        form.submit()
    }
}) 
})
