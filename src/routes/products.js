const express = require('express');
const router = express.Router();
const multer = require("multer")
const path = require("path")
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


router.get('/detalle/:id', productsController.detalle);
router.get('/carrito-de-compras', authMiddleware, productsController.carrito);
router.get('/all', productsController.allProducts)

module.exports = router;    