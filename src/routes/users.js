const express = require('express');
const router = express.Router();

const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const editUserValidator = require('../validations/editUserValidator');
const changePassValidator = require('../validations/changePassValidator');
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/registro', guestMiddleware, usersController.registro);
router.post('/registro', registerValidator, usersController.guardar);

router.get('/ingresar', guestMiddleware, usersController.ingresar);
router.post('/ingresar', loginValidator, usersController.logueado);

router.get('/perfil', authMiddleware, usersController.perfil);

router.get('/editar', authMiddleware, usersController.editarPerfil);
router.put('/editar', editUserValidator, usersController.guardarCambios);

router.get('/editar/pass', authMiddleware, usersController.editarPass);
router.put('/editar/pass', changePassValidator, usersController.updatePass);

router.get('/salir', authMiddleware, usersController.salir);

module.exports = router;