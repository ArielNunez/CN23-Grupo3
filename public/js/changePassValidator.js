let qs = (element) => {
    return document.querySelector(element);
}

window.addEventListener('load', function() {
    let form = qs('.perfilDeUsuario .infoUsuario');
    let pass = qs('#pass');
    let newPass = qs('#newPass');
    let confNewPass = qs('#confNewPass');

    let errorPass = qs('#errorPass');
    let errorNewPass = qs('#errorNewPass');
    let errorConfNewPass = qs('#errorConfNewPass');

    let errores = {}

    pass.addEventListener('blur', function() {
        if(this.value.length == 0) {
            errorPass.innerHTML = "* Este campo es obligatorio";
            errores.pass = true;
        } else {
            errorPass.innerHTML = '';
            delete errores.pass
        }
    });

    newPass.addEventListener('blur', function(){
        if(this.value.length < 6) {
            errorNewPass.innerHTML = '* La contraseña debe tener como mínimo 6 caracteres';
            errores.newPass = true;
        } else {
            errorNewPass.innerHTML = '';
            delete errores.newPass;
        }
    });

    confNewPass.addEventListener('blur', function() {
        if(this.value != newPass.value) {
            errorConfNewPass.innerHTML = '* Las contraseñas no coinciden';
            errores.confNewPass = true;
        } else {
            errorConfNewPass.innerHTML = '';
            delete errores.confNewPass;
        }
    });

    form.addEventListener('submit', function(e) {
        if(Object.keys(errores).length != 0) {
            e.preventDefault();
        }
    });
});