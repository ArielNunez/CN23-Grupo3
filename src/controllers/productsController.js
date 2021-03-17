const fs= require("fs");
const path= require("path");
const {validationResult} = require('express-validator');
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
                let mismaMarca = db.Producto.findAll({
                    where: {
                        id_marca: producto.id_marca,
                        id: {
                            [db.Sequelize.Op.ne]: producto.id
                        }
                    },
                    limit: 4,
                    include: [
                        {association: "imagenes"}
                    ]
                });

                let mismaCategoria = db.Producto.findAll({
                    where: {
                        id_categoria: producto.id_categoria,
                        id: {
                            [db.Sequelize.Op.ne]: producto.id
                        }
                    },
                    limit: 4,
                    include: [
                        {association: "imagenes"}
                    ]
                });

                Promise.all([mismaMarca, mismaCategoria])
                    .then(([mismaMarca, mismaCategoria]) => {
                        let similares = mismaMarca.concat(mismaCategoria);
                        return res.render('products/productDetail', {producto: producto, similares: similares});
                    })
                    .catch(() => {
                        return res.redirect('/');
                    });
            } else {
                return res.redirect('/');
            }
        });
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
        let errors = validationResult(req);
        if(!errors.isEmpty()) {
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
                res.render('../views/products/productCreation', {marcas: marcas, categoriasProductos: categoriasProductos, errors: errors.mapped()});
            })
        } else {
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
        }
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
        let errors = validationResult(req);
        if(!errors.isEmpty()) {
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
                res.render('../views/products/productEdit', {marcas: marcas, categoriasProductos: categoriasProductos, producto: producto, errors: errors.mapped()});
                })  
        } else {
            let imagenes = [];
            if(req.files.length != 0) {
                for(let i=0; i<req.files.length;i++) {
                    imagenes.push({
                        nombre: req.files[i].filename,
                        id_producto: req.params.id,
                        estado: 1
                    });
                }
            }
            let talles = [];
            for(let i=0; i<req.body.talle.length; i++) {
                talles.push({
                    talle: parseInt(req.body.talle[i])
                });
            }

            let editarProducto = db.Producto.update({
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
                ],
                where: { id: req.params.id }
            });

            let encontrarTalles = db.Talle.findAll({
                where: {
                    [db.Sequelize.Op.or]: talles
                }
            });

            let cargarImagenes = db.Imagen.bulkCreate(imagenes);

            Promise.all([editarProducto, encontrarTalles, cargarImagenes])
            .then(function([productoActualizado, tallesEncontrados, imagenesCargadas]) {
                db.Producto.findByPk(req.params.id)
                .then(function(producto){
                    return producto.setTalles(tallesEncontrados, {save: false});
                })
                .then(function(){
                    return res.redirect('/admin/productos/listado');
                });
            })
        }
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

        let ofertas = db.Producto.findAll({
            where: {
                descuento: {[db.Sequelize.Op.ne]: null},
                estado: 1
            },
            order: [
                ['descuento', 'DESC']
            ],
            limit: 4,
            include: [
                {association: "imagenes"}
            ]
        });

        let marcas = db.Marca.findAll({
            where: {
                estado: 1
            },
            order: [
                ['marca', 'ASC']
            ]
        });

        let talles = db.Talle.findAll({
            where: {
                estado: 1
            }
        });

        let productos = db.Producto.findAll({
            where: {
                estado: 1
            },
            include: [
                {association: "imagenes"}
            ]
        })
        
        Promise.all([marcas, talles, productos, ofertas])
        .then(function([marcas, talles, productos, ofertas]){
            res.render('products/productList', {marcas: marcas, talles: talles, productos: productos, ofertas: ofertas});
            }) 
    },
    listadoAdmin: function(req,res) {
        db.Producto.findAll({
            where: {
                estado: 1
            }
        }).then(function(productos){
            res.render('products/productListAdmin', {productos: productos});
        });
    },
    productosOfertas: function(req, res) {

            let ofertas = db.Producto.findAll({
                where: {
                    descuento: {[db.Sequelize.Op.ne]: null},
                    estado: 1
                },
                order: [
                    ['descuento', 'DESC']
                ],
                limit: 4,
                include: [
                    {association: "imagenes"}
                ]
            });
    
            let marcas = db.Marca.findAll({
                where: {
                    estado: 1
                },
                order: [
                    ['marca', 'ASC']
                ]
            });
    
            let talles = db.Talle.findAll({
                where: {
                    estado: 1
                }
            });
    
            let productos = db.Producto.findAll({
                where: {
                    estado: 1
                },
                include: [
                    {association: "imagenes"}
                ]
            })
            
            Promise.all([marcas, talles, productos, ofertas])
            .then(function([marcas, talles, productos, ofertas]){
                res.render('products/productOfertas', {marcas: marcas, talles: talles, productos: productos, ofertas: ofertas});
                }) 
        }
    }