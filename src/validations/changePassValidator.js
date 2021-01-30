const {check} = require('express-validator');

module.exports = [
    check('pass')
        .notEmpty()
        .withMessage('* Este campo es obligatorio'),
    check('newPass')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
        .isLength({min:6, max:30})
        .withMessage('* La contraseña debe tener como mínimo 6 caracteres.'),
    check('confNewPass')
        .notEmpty()
        .withMessage('* Este campo es obligatorio')
]