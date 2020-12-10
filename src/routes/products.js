const express = require('express');
const router = express.Router();
const multer = require("multer")
const path = require("path")
const productsController = require('../controllers/productsController');



router.get('/detalle/:id', productsController.detalle);
router.get('/carrito-de-compras', productsController.carrito);


router.get('/all', productsController.allProducts)

module.exports = router;