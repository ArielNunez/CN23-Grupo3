const {check} = require('express-validator');

module.exports = [
    check('producto')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('descrpicion')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('precio')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
]