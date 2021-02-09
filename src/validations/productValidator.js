const {check} = require('express-validator');

module.exports = [
    check('producto')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('descripcion')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('precio')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
]