const { check } = require('express-validator');

module.exports = [
    check('email')
        .isEmail()
        .withMessage('Debés ingresar un email válido.'),
    check('pass')
        .isLength({ min: 8})
        .withMessage('La contraseña debe tener como mínimo 8 caracteres')
]