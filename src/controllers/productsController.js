const fs= require("fs");
const path= require("path");

var productos= fs.readFileSync(path.join(__dirname, "../database/products.json"), "utf-8");
var productosGuardados = JSON.parse(productos);

module.exports = {
    detalle: function(req,res) {
        for(let i=0; i<productosGuardados.length;i++) {
            if(req.params.id == productosGuardados[i].id) {
                return res.render('../views/products/productDetail', {producto: productosGuardados[i]});
            }
        }
        return res.send('Error, producto no encontrado');
    },
    agregarACarrito: function(req, res) {
        res.send("../views/products/productCart");
    },
    carrito: function(req,res) {
        res.render('../views/products/productCart');
    },
    crear: function(req, res) {
        res.render('../views/products/productCreation');
    },
    crearProducto: function(req, res) {
        var nuevoProducto = {
            id: req.body.idproducto,
            producto: req.body.producto,
            descripcion: req.body.descripcion,
            imagen: req.file.filename,
            categoria: req.body.categoria,
            talles: req.body.talle,
            precio: req.body.precio,
            descuento: req.body.descuento,
        }
        productosGuardados.push(nuevoProducto);
        fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(productosGuardados, null, 4));
        return res.redirect("/admin/productos/crear");
    },
    editar: function(req,res) {
        for(let i=0; i<productosGuardados.length;i++) {
            if(req.params.id == productosGuardados[i].id) {
                return res.render('products/productEdit', {producto: productosGuardados[i]})
            }
        }
        return res.send('Error, producto no encontrado');
    },
    editarPUT: function (req, res) {
        for(let i=0; i<productosGuardados.length;i++) {
            if(req.params.id == productosGuardados[i].id) { 
                if(req.file != undefined) {
                    productosGuardados[i].imagen = req.file.filename;
                }
                productosGuardados[i].producto = req.body.producto;
                productosGuardados[i].descripcion = req.body.descripcion;
                productosGuardados[i].categoria = req.body.categoria;
                productosGuardados[i].talles = req.body.talle;
                productosGuardados[i].precio = req.body.precio;
                productosGuardados[i].descuento = req.body.descuento;
                fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(productosGuardados, null, 4));
                return res.redirect("/productos/detalle/" + req.params.id);   
            }
        }
    },
    eliminar: function(req, res) {
        productosGuardados = productosGuardados.filter(producto => producto.id != req.params.id)
        fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(productosGuardados, null, 4))
        res.send('prodcuto eliminado')
    },
    allProducts: function(req, res) {
        res.render('products/productList', {productos: productosGuardados})
    }
}