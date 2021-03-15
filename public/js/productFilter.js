window.addEventListener('load', () => {
    let inputsCategoria = document.querySelectorAll('input.categoria');
    let inputsMarca = document.querySelectorAll('input.marca');
    let contenedorProductos = document.querySelector('section.der');
    
    function filtrar(input) {
            input.addEventListener('click', () => {
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
        });
    }

    inputsCategoria.forEach(input => filtrar(input));
    inputsMarca.forEach(input => filtrar(input));
});