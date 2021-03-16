const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/detalle/:id', productsController.detalle);
router.get('/carrito-de-compras', authMiddleware, productsController.carrito);
router.get('/add-to-cart/:id, ')
router.get('/explorar', productsController.productosTodos)
router.get('/ofertas', productsController.productosOfertas)

module.exports = router;    