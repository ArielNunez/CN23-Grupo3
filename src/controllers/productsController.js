const fs= require("fs");
const path= require("path");

let productos= fs.readFileSync(path.join(__dirname, "../database/products.json"), "utf-8");
let productosGuardados = JSON.parse(productos);

module.exports = {
    detalle: function(req,res) {
        for(let i=0; i<productosGuardados.length;i++) {
            if(req.params.id == productosGuardados[i].id) {
                return res.render('../views/products/productDetail', {producto: productosGuardados[i]});
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
        let nuevoProducto = {
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
    allProducts: function(req, res) {
        res.render('../views/products/productList', {productos: productosGuardados})
    }
    
}