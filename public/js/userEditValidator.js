let qs = (element) => {
    return document.querySelector(element);
}

window.addEventListener('load', function() {
    let form = qs('.perfilDeUsuario .infoUsuario form');

    let nombre = qs('#nombre');
    let apellido = qs('#apellido');
    let nacimiento = qs('#nacimiento');
    let dni = qs('#dni');
    let email = qs('#email');

    let errorNombre = qs('#errorNombre');
    let errorApellido = qs('#errorApellido');
    let errorNacimiento = qs('#errorNacimiento');
    let errorDNI = qs('#errorDNI');
    let errorEmail = qs('#errorEmail');

    let errores = {}

    let nacimientoRegEx = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;
    let emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    nombre.addEventListener('blur', function() {
        if(nombre.value.length < 2 || nombre.value.length > 20) {
            errorNombre.innerHTML = '* Debés ingresar un nombre válido';
            errores.nombre = true;
        } else {
            errorNombre.innerHTML = '';
            delete errores.nombre;
        }
    });

    apellido.addEventListener('blur', function() {
        if(apellido.value.length < 2 || apellido.value.length > 50) {
            errorApellido.innerHTML = '* Debés ingresar un apellido válido';
            errores.apellido = true;
        } else {
            errorApellido.innerHTML = '';
            delete errores.apellido;
        }
    });

    nacimiento.addEventListener('blur', function() {
        if(!nacimientoRegEx.test(nacimiento.value)) {
            errorNacimiento.innerHTML = '* Debés ingresar una fecha válida.';
            errores.nacimiento = true;
        } else {
            errorNacimiento.innerHTML = '';
            delete errores.nacimiento;
        }
    });

    dni.addEventListener('blur', function() {
        if(dni.value.length < 7 || dni.value.length > 8) {
            errorDNI.innerHTML = '* Debés ingresar un DNI válido';
            errores.dni = true;
        } else {
            errorDNI.innerHTML = '';
            delete errores.dni;
        }
    });

    email.addEventListener('blur', function() {
        if(!emailRegEx.test(email.value)) {
            errorEmail.innerHTML = '* Debés ingresar un email válido';
            errores.email = true;
        } else {
            errorEmail.innerHTML = '';
            delete errores.email;
        }
    });

    form.addEventListener('submit', function(e) {
        if(Object.keys(errores).length != 0) {
            e.preventDefault();
        }
    });
});
