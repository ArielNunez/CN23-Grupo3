const express = require('express');
const router = express.Router();
const path = require("path")
const multer = require("multer")
const productsController = require('../controllers/productsController');
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');

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

router.get('/productos/crear', authMiddleware, productsController.crear);
router.post('/productos/crear', upload.single("imagen"), productsController.crearProducto);

router.get('/productos/:id/editar', authMiddleware, productsController.editar);
router.put('/productos/:id/editar', upload.single("imagen"), productsController.editarPUT);

router.delete('/productos/:id/eliminar', productsController.eliminar);

router.get('/usuarios/lista', usersController.listado)
module.exports = router;