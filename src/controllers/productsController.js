module.exports = {
    detalle: function(req,res) {
        res.render('../views/products/productDetail');
    },
    carrito: function(req,res) {
        res.render('../views/products/productCart');
    }
}