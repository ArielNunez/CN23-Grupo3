const {check} = require('express-validator');

module.exports = [
    check('nombre')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
        .isLength({min:2, max:20})
        .withMessage('* Debés ingresar un nombre válido.'),
    check('apellido')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
        .isLength({min:2, max:50})
        .withMessage('* Debés ingresar un apellido válido.'),
    check('nacimiento')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
        .isDate()
        .withMessage('* Debés ingresar una fecha válida.'),
    check('dni')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
        .isLength({min:7, max: 8})
        .withMessage('* Debés ingresar un DNI válido.'),
    check('email')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
        .isEmail()
        .withMessage('* Debés ingresar un email válido.'),
    check('confEmail')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('pass')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
        .isLength({min:6, max:30})
        .withMessage('* La contraseña debe tener como mínimo 6 caracteres.'),
    check('confPass')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('TyC')
        .isIn(['si'])
        .withMessage('* Debés aceptar los términos y condiciones antes de continuar.')
]