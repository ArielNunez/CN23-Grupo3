const fs= require("fs");
const path= require("path");

let productos= fs.readFileSync(path.join(__dirname, "../database/products.json"), "utf-8");
let productosGuardados = JSON.parse(productos);

module.exports = {
    detalle: function(req,res) {
        res.render('../views/products/productDetail');
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
            imagen: req.file,
            categoria: req.body.categoria,
            talle: req.body.talle,
            precio: req.body.precio,

        }
        productosGuardados.push(nuevoProducto);
        fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(productosGuardados, null, 4));
        return res.redirect("/productos/crear");
    }
    
}