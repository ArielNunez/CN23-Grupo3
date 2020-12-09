const express = require('express');
const router = express.Router();
const multer = require("multer")
const path = require("path")
const productsController = require('../controllers/productsController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/uploads/productimage'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, req.body.idproducto + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

router.get('/detalle', productsController.detalle);
router.get('/carrito-de-compras', productsController.carrito);
router.get('/crear', productsController.crear);
router.post('/crear', upload.single("imagen"), productsController.crearProducto);

router.get('/all', productsController.allProducts)

module.exports = router;