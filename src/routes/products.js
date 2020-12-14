const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/detalle', productsController.detalle);
router.post("/carrito-de-compras", productsController.agregarACarrito);
router.get('/carrito-de-compras', productsController.carrito);
router.get('/creacion', productsController.crear);
router.post('/creacion', productsController.crearProducto);

module.exports = router;    