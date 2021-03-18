const express = require('express');
const carritoController = require('../controllers/carritoController');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/detalle/:id', productsController.detalle);
router.post('/detalle/:id', authMiddleware, carritoController.guardarCarrito)
router.get('/carrito-de-compras', authMiddleware, carritoController.getCarrito);
router.delete('/carrito-de-compras', carritoController.deleteItem);
router.get('/explorar', productsController.productosTodos)
router.get('/ofertas', productsController.productosOfertas)

module.exports = router;    