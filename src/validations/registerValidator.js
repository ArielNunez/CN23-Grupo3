const {check} = require('express-validator');

module.exports = [
    check('nombre')
        .isLength({min:2, max:20})
        .withMessage('Debés ingresar un nombre válido.'),
    check('apellido')
        .isLength({min:2, max:50})
        .withMessage('Debés ingresar un apelido válido.'),
    check('nacimiento')
        .isDate()
        .withMessage('Debés ingresar una fecha válida'),
    check('dni')
        .isLength({min:7, max: 8})
        .withMessage('Debés ingresar un DNI válido'),
    check('email')
        .isEmail()
        .withMessage('Debés ingresar un email válido.'),
    check('pass')
        .isLength({min:6, max:30})
        .withMessage('La contraseña debe tener como mínimo 6 caracteres.')
]