const fs= require("fs");
const path= require("path");
let db = require('../database/models');

var productos= fs.readFileSync(path.join(__dirname, "../database/products.json"), "utf-8");
productos = JSON.parse(productos);

module.exports = {
    detalle: function(req,res) {
        db.Producto.findByPk(req.params.id, {
            include: [
                {association: 'categoriaProducto'},
                {association: "talles"},
                {association: "marca"},
                {association: "imagenes"}
            ]
        }).then(function(producto){
            if(producto.estado == 1) {
                return res.render('products/productDetail', {producto: producto});
            } else {
                return res.redirect('/');
            }
        });
    },
    carrito: function(req,res) {
        res.render('../views/products/productCart');
    },
    crear: function(req, res) {
        let marcas = db.Marca.findAll({
            where: {
                estado: 1
            },
            order: [
                ['marca', 'ASC']
            ]
        });
        let categoriasProductos = db.CategoriaProducto.findAll({
            where: {
                estado: 1
            }
        });
        Promise.all([marcas, categoriasProductos]).then(function([marcas, categoriasProductos]){
            res.render('../views/products/productCreation', {marcas: marcas, categoriasProductos: categoriasProductos});
        })
    },
    crearProducto: function(req, res) {
        db.Producto.create({
            producto: req.body.producto,
            descripcion: req.body.descripcion,
            id_categoria: req.body.categoria,
            id_marca: req.body.marca,
            precio: req.body.precio,
            descuento: req.body.descuento,
            estado: 1
        }).then(function(){
            return res.redirect('/admin/productos/listado');
        });

        // var nuevoProducto = {
        //     id: parseInt(productos[productos.length-1].id)+1,
        //     producto: req.body.producto,
        //     descripcion: req.body.descripcion,
        //     imagen: req.file.filename,
        //     categoria: req.body.categoria,
        //     talles: req.body.talle,
        //     precio: req.body.precio,
        //     descuento: req.body.descuento,
        // }
        // productos.push(nuevoProducto);
        // fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(productos, null, 4));
        // return res.redirect("/productos/detalle/" + nuevoProducto.id);
    },
    editar: function(req,res) {
        db.Producto.findByPk(req.params.id, {
            include: [
                {association: 'categoriaProducto'},
                {association: "talles"},
                {association: "marca"},
                {association: "imagenes"}
            ]
        })
        .then(function(producto) {
            res.render('products/productEdit', {producto: producto})
        });
    },
    editarPUT: function (req, res) {
        db.Producto.update({
            producto: req.body.producto,
            descripcion: req.body.descripcion,
            id_categoria: req.body.categoria,
            id_marca: req.body.marca,
            precio: req.body.precio,
            descuento: req.body.descuento,
            estado: 1
        }, {
            where: { id: req.params.id }
        })
        .then(function() {
            return res.redirect("/productos/detalle/" + req.params.id)
        })
        /* (let i=0; i<productos.length;i++) {
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
        } */
    },
    eliminar: function(req, res) {
        let borrarTalles = db.ProductoTalle.update({
            estado: 0
        }, {
            where: {
                id_producto: req.params.id
            }
        });
        let borrarImagenes = db.Imagen.update({
            estado: 0
        }, {
            where: {
                id_producto: req.params.id
            }
        });
        let borrarProducto = db.Producto.update({
            estado: 0
        }, {
            where: {
                id: req.params.id
            }
        });
        Promise.all([borrarImagenes, borrarTalles, borrarProducto]).then(function(){
            res.redirect('/admin/productos/listado');
        });
    },
    productosTodos: function(req, res) {
        db.Producto.findAll({
            where: {
                estado: 1
            },
            include: [
                {association: "imagenes"}
            ]
        }).then(function(productos){
            res.render('products/productList', {productos: productos});
        });
    },
    listadoAdmin: function(req,res) {
        db.Producto.findAll({
            where: {
                estado: 1
            }
        }).then(function(productos){
            res.render('products/productAdmin', {productos: productos});
        });
    }
}