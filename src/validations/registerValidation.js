const path = require('path');
const fs = require('fs');
const { check, body } = require('express-validator');

let users = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf-8');
users = JSON.parse(users);

module.exports = [
    check('nombre')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('apellido')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('nacimiento')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('dni')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
        .isLength({min: 8, max: 8})
        .withMessage('* El número de documento es inválido'),
    check('email')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
        .isEmail()
        .withMessage('* Debes ingresar un correo electrónico válido'),
    check('confmail')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('pass')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
        .isLength({min: 6})
        .withMessage('* La contraseña debe tener mínimo 6 caracteres'),
    check('confpass')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('TyC')
        .isIn(['si'])
        .withMessage('* Debes aceptar los términos y condiciones antes de continuar')
]
