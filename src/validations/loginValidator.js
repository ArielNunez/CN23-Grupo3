const path = require('path');
const fs = require('fs');
const { check, body } = require('express-validator');

let users = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf-8');
users = JSON.parse(users);

module.exports = [
    //Quise hacer una validación en caso de que un usario no esté registrado pero cuando lo pongo a correr no importa si pongo un mail existente, o no, salta el error asi que por ahora lo dejo comentado para consultarlo en clase
    /*check('email')
        .custom(value => {
            users.forEach(user => {
            if (user.email != value) {
                throw new Error('Este usuario no existe')
            }
        })}),*/
    check('pass')
        .isLength({min: 6})
        .withMessage('La contraseña debe tener mínimo 6 caracteres')
]
