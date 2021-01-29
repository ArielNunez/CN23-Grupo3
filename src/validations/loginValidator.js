const path = require('path');
const fs = require('fs');
const { check, body } = require('express-validator');

module.exports = [
    check('pass')
        .isLength({min: 6})
        .withMessage('La contraseña debe tener mínimo 6 caracteres')
]
