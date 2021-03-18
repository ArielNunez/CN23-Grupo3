let db = require('../database/models');

module.exports = {
    guardarCarrito: function (req, res) {
        db.ProductosUsuarios.create ({
            usuario_id: req.session.user.id,
            producto_id: req.body.productoId,
            imagen: req.body.imagen,
            cantidad: 1,
            talle: req.body.talle
        })
        .then(function(productoUsuario){
            console.log(productoUsuario)
            res.redirect('/productos/carrito-de-compras');
        })
        .catch(function(err){
            res.send("Hubo un error al agregar el producto al carrito.")
        })
    },
    getCarrito: function (req, res) {
        db.ProductosUsuarios.findAll({
            where: {
                usuario_id: req.session.user.id
            },
            include: [
                {association: "producto"}
            ]
        })
        .then(function(carrito){
            let totalCarrito = 0;
            for(let i=0; i<carrito.length; i++) {
                totalCarrito += parseFloat(carrito[i].producto.precio);
            }
            res.render('products/productCart', {carrito:carrito, totalCarrito: totalCarrito});
        })

    },
    deleteItem: function (req, res) {
        db.ProductosUsuarios.destroy ({
            where: {
                producto_id: req.body.idProducto
            }
        })
        .then(function(){
            res.redirect('/productos/carrito-de-compras')
        })
    }
}