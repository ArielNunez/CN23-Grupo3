window.addEventListener('load', () => {
    let inputsCategoria = document.querySelectorAll('input.categoria');
    let inputsMarca = document.querySelectorAll('input.marca');
    let contenedorProductos = document.querySelector('section.der');
    let botonFiltro = document.querySelector('.filtro button');
    let categorias = document.querySelector('div.categoria');
    let marcas = document.querySelector('div.marca');
    let selectOrden = document.querySelector('#orden');
    
    function filtrar() {
        let query = "?";

        for(let i=0; i<inputsCategoria.length; i++) {
            if(inputsCategoria[i].checked) {
                query += "categoria=" + inputsCategoria[i].value + "&"
            }
        }
        for(let i=0; i<inputsMarca.length; i++) {
            if(inputsMarca[i].checked) {
                query += "marcas=" + inputsMarca[i].value + "&"
            }
        }
        query += `orden=${selectOrden.value}`
        fetch("/api/productos" + query)
            .then(res => res.json())
            .then(productos => {
                contenedorProductos.innerHTML = "";
                productos.products.forEach(producto => {
                    if(producto.descuento == null || producto.descuento == 0) {
                        contenedorProductos.innerHTML += `
                            <div class="producto">
                                <a href="/productos/detalle/${producto.id}" id="enlace"></a>
                                <img src="/img/uploads/productimage/${producto.imagen}" alt="">
                                <h5>${producto.producto}</h5>
                                <p>$${producto.precio}</p>
                            </div>
                        `
                    } else {
                        contenedorProductos.innerHTML += `
                            <div class="producto">
                                <a href="/productos/detalle/${producto.id}" id="enlace"></a>
                                <img src="/img/uploads/productimage/${producto.imagen}" alt="">
                                <h5>${producto.producto}</h5>
                                <div class="descuento">
                                    <p><span class="precioTachado">$${producto.precio}</span><span class="precioConDescuento">$${(producto.precio / 100 * (100-producto.descuento)) - (producto.precio / 100 * (100-producto.descuento))%1}</span></p>
                                    <h3 class="porcentaje">${producto.descuento}% OFF</h3>
                                    <div class="circle"></div>
                                </div>
                            </div>
                        `
                    } 
                });
            });
    }

    inputsCategoria.forEach(input => {input.addEventListener('click', filtrar)});
    inputsMarca.forEach(input => {input.addEventListener('click', filtrar)});
    selectOrden.addEventListener('change', filtrar);

    if(window.location.search == '?deportivo') {
        inputsCategoria[1].checked = 1;
        filtrar();
    } else if(window.location.search == '?urbano'){
        inputsCategoria[0].checked = 1;
    }

    // RESPONSIVE
    botonFiltro.addEventListener('click', () => {
        categorias.classList.toggle('display-none');
        marcas.classList.toggle('display-none');
    });
});