const express = require('express');
const router = express.Router();
const path = require("path")
const multer = require("multer")
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

router.get('/productos/crear', productsController.crear);
router.post('/productos/crear', upload.single("imagen"), productsController.crearProducto);

router.get('/productos/:id/editar', productsController.editar);
router.put('/productos/:id/editar', productsController.editarPUT);

module.exports = router;