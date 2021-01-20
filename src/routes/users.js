const express = require('express');
const router = express.Router();

const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/registro', guestMiddleware, usersController.registro);
router.post('/registro', registerValidator, usersController.guardar);

router.get('/ingresar', guestMiddleware, usersController.ingresar);
router.post('/ingresar', loginValidator, usersController.conectado);

router.get('/salir', authMiddleware, usersController.salir);

module.exports = router;