window.addEventListener('load', function() {

    let form = document.querySelector('#form');

    form.addEventListener('submit', function(event) {
            event.preventDefault();

            let inputNombre = document.querySelector('#nombre');
                inputDescripcion = document.querySelector('#descripcion');
                inputImagen = document.querySelector('#imagen');
                inputCategoria = document.querySelector('#categoria');
                inputMarca = document.querySelector('#marca');
                inputTalles = document.querySelector('#talles');
                inputDescuento = document.querySelector('#descuento');
                inputPrecio = document.querySelector('#precio');

            let errorNombre = document.querySelector('#errorNombre');
                errorDescripcion = document.querySelector('#errorDescripcion');
                errorImagen = document.querySelector('#errorImagen');
                errorCategoria = document.querySelector('#errorCategoria');
                errorMarca = document.querySelector('#errorMarca');
                errorTalles = document.querySelector('#errorTalles');
                errorDescuento = document.querySelector('#errorDescuento');
                errorPrecio = document.querySelector('#errorPrecio');

            let errores = {};
            //let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            //let dateRegEx = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;
            let numRegEx = /^[0-9]+$/;


    // VALIDACIÓN NOMBRE

    if(inputNombre.value.length == 0) {
        errores.nombre = "* Este campo es obligatorio"
        errorNombre.innerText = errores.nombre
    } else if (inputNombre.value.length < 2) { 
        errores.nombre = "* El nombre del producto debe tener como mínimo 2 caracteres"
        errorNombre.innerText = errores.nombre
    }

    // VALIDACIÓN DESCRIPCIÓN

    if(inputDescripcion.value.length == 0) {
        errores.descripcion = "* Este campo es obligatorio"
        errorDescripcion.innerText = errores.descripcion
    } else if (inputDescripcion.value.length < 2) { 
        errores.descripcion = "* La descripción del producto debe tener como mínimo 20 caracteres"
        errorDescripcion.innerText = errores.descripcion
    }

   // VALIDACIÓN IMAGEN

   if (inputImagen.files.length <= 0) {
        errores.imagen = "* Debe cargar al menos una imagen"
        errorImagen.innerText = errores.imagen
   };
   
   //VALIDACIÓN TALLES

    var tallesElegidos = 0;

      if (document.querySelector('#t35').checked == true) { 
                        tallesElegidos++
    } if (document.querySelector('#t36').checked == true) {  
                        tallesElegidos++
    } if (document.querySelector('#t37').checked == true) {
                        tallesElegidos++
    } if (document.querySelector('#t38').checked == true) { 
                        tallesElegidos++
    } if (document.querySelector('#t39').checked == true) { 
                        tallesElegidos++
    } if (document.querySelector('#t40').checked == true) { 
                        tallesElegidos++
    } if (document.querySelector('#t41').checked == true) { 
                        tallesElegidos++
    } if (document.querySelector('#t42').checked == true) { 
                        tallesElegidos++
    } if (document.querySelector('#t43').checked == true) { 
                        tallesElegidos++
    } if (document.querySelector('#t44').checked == true) { 
                        tallesElegidos++
    }

    if (tallesElegidos == 0) {
    errores.talles = "* Debe elegir al menos un talle"
    errorTalles.innertext = errores.talles
    }

   // VALIDACIÓN PRECIO

   if(!(numRegEx.test(inputPrecio.value))) {
    errores.precio = "* Ingrese un precio válido"
    errorPrecio.innerText = errores.precio
    }

    // VALIDACIÓN DESCUENTO

   if(!(numRegEx.test(inputDescuento.value))) {
    errores.descuento = "* Ingrese un número del 1 al 99"
    errorDescuento.innerText = errores.descuento
    }

    if (Object.keys(errores).length == 0) {
        form.submit()
    }
}) 
})
