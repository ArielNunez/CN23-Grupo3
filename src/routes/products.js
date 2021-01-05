const express = require('express');
const router = express.Router();
const multer = require("multer")
const path = require("path")
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


router.get('/detalle', guestMiddleware, productsController.detalle);
router.get('/detalle/:id', guestMiddleware, productsController.detalle);
router.get('/carrito-de-compras', authMiddleware, productsController.carrito);
router.post("/carrito-de-compras", productsController.agregarACarrito);
router.get('/all', guestMiddleware, productsController.allProducts)

module.exports = router;    