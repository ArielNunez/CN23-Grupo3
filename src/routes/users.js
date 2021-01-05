const express = require('express');
const router = express.Router();

const loginValidator = require('../validations/loginValidator');
const usersController = require('../controllers/usersController');

router.get('/registro', usersController.registro);
router.post('/registro', usersController.guardar)

router.get('/ingresar', usersController.ingresar);
router.post('/ingresar', loginValidator, usersController.loggeado)

router.get('/salir', usersController.salir);

module.exports = router;