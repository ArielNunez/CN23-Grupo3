const express = require('express');
const router = express.Router();
const path = require("path")
const multer = require("multer")
const fs = require('fs');
const productsController = require('../controllers/productsController');
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

var productos= fs.readFileSync(path.join(__dirname, "../database/products.json"), "utf-8");
productos = JSON.parse(productos);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/uploads/productimage'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, parseInt(productos[productos.length-1].id)+1 + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

router.get('/', usersController.ingresar);

router.get('/productos/listado', authMiddleware, adminMiddleware, productsController.listadoAdmin);

router.get('/productos/crear', authMiddleware, adminMiddleware, productsController.crear);
router.post('/productos/crear', upload.any(), productsController.crearProducto);

router.get('/productos/:id/editar', authMiddleware, adminMiddleware, productsController.editar);
router.put('/productos/:id/editar', upload.any(), productsController.editarPUT);

router.delete('/productos/:id/eliminar', productsController.eliminar);

router.get('/usuarios/listado', usersController.listado);
router.get('/usuarios/editar/:id', usersController.editar);
router.post('/usuarios/editar/:id', usersController.update);
router.delete('/usuarios/editar/:id', usersController.delete);

module.exports = router;