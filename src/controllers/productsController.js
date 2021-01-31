const fs= require("fs");
const path= require("path");
let db = require('../database/models');

var productos= fs.readFileSync(path.join(__dirname, "../database/products.json"), "utf-8");
productos = JSON.parse(productos);

module.exports = {
    detalle: function(req,res) {
        db.Producto.findByPk(req.params.id, {
            include: [
                {association: "categoriaProducto"},
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
        let imagenes = [];
        for(let i=0; i<req.files.length;i++) {
            imagenes.push({
                nombre: req.files[i].filename, estado: 1
            });
        }
        let talles = [];
        for(let i=0; i<req.body.talle.length; i++) {
            talles.push({
                talle: parseInt(req.body.talle[i])
            });
        }

        let crearProducto = db.Producto.create({
            producto: req.body.producto,
            descripcion: req.body.descripcion,
            id_categoria: req.body.categoria,
            id_marca: req.body.marca,
            precio: req.body.precio,
            descuento: req.body.descuento,
            estado: 1,
            imagenes: imagenes
        }, {
            include: [
                {association: 'imagenes'}
            ]
        });

        let encontrarTalles = db.Talle.findAll({
            where: {
                [db.Sequelize.Op.or]: talles
            }
        });

        Promise.all([crearProducto, encontrarTalles])
        .then(function([producto,tallesEncontrados]){
            return producto.setTalles(tallesEncontrados, {save: false});
        })
        .then(function(){
            res.redirect('/admin/productos/listado');
        })
        .catch(function(){
            res.redirect('/admin/productos/listado');
        });
    },
    editar: function(req,res) {

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
        
        let producto = db.Producto.findByPk(req.params.id, {
            include: [
                {association: "categoriaProducto"},
                {association: "talles"},
                {association: "marca"},
                {association: "imagenes"}
            ]
        })
        
        Promise.all([marcas, categoriasProductos, producto])
        .then(function([marcas, categoriasProductos, producto]){
            res.render('../views/products/productEdit', {marcas: marcas, categoriasProductos: categoriasProductos, producto: producto});
        })
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
        });
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
            res.render('products/productListAdmin', {productos: productos});
        });
    }
}