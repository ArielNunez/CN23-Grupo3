const fs= require("fs");
const path= require("path");

var productos= fs.readFileSync(path.join(__dirname, "../database/products.json"), "utf-8");
productos = JSON.parse(productos);

module.exports = {
    detalle: function(req,res) {
        for(let i=0; i<productos.length;i++) {
            if(req.params.id == productos[i].id) {
                return res.render('../views/products/productDetail', {producto: productos[i]});
            }
        }
        return res.send('Error, producto no encontrado');
    },
    carrito: function(req,res) {
        res.render('../views/products/productCart');
    },
    crear: function(req, res) {
        res.render('../views/products/productCreation');
    },
    crearProducto: function(req, res) {
        var nuevoProducto = {
            id: parseInt(productos[productos.length-1].id)+1,
            producto: req.body.producto,
            descripcion: req.body.descripcion,
            imagen: req.file.filename,
            categoria: req.body.categoria,
            talles: req.body.talle,
            precio: req.body.precio,
            descuento: req.body.descuento,
        }
        productos.push(nuevoProducto);
        fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(productos, null, 4));
        return res.redirect("/productos/detalle/" + nuevoProducto.id);
    },
    editar: function(req,res) {
        for(let i=0; i<productos.length;i++) {
            if(req.params.id == productos[i].id) {
                return res.render('products/productEdit', {producto: productos[i]})
            }
        }
        return res.send('Error, producto no encontrado');
    },
    editarPUT: function (req, res) {
        for(let i=0; i<productos.length;i++) {
            if(req.params.id == productos[i].id) { 
                if(req.file != undefined) {
                    productos[i].imagen = req.file.filename;
                }
                productos[i].producto = req.body.producto;
                productos[i].descripcion = req.body.descripcion;
                productos[i].categoria = req.body.categoria;
                productos[i].talles = req.body.talle;
                productos[i].precio = req.body.precio;
                productos[i].descuento = req.body.descuento;
                fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(productos, null, 4));
                return res.redirect("/productos/detalle/" + req.params.id);   
            }
        }
    },
    eliminar: function(req, res) {
        productos = productos.filter(producto => producto.id != req.params.id)
        fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(productos, null, 4))
        res.redirect('/admin/productos/listado');
    },
    productosTodos: function(req, res) {
        res.render('products/productList', {productos: productos})
    },
    listadoAdmin: function(req,res) {
        res.render('products/productAdmin', {productos: productos});
    }
}