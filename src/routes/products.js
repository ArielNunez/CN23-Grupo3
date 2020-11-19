const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/detalle', productsController.detalle);
router.get('/carrito-de-compras', productsController.carrito);

module.exports = router;