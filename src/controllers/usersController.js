const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

let users = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf-8');
users = JSON.parse(users);

let lastId = 0;
for(i= 0; i < users.length; i++) {
    if(lastId < users[i].id) {
        lastId = users[i].id
    }
}

module.exports = {
    registro: function(req,res) {
        res.render('../views/users/register');
    },
    guardar: function(req, res) {
        let errors = validationResult(req);
        if(!errors.isEmpty()) {
            let user = {
                name: req.body.nombre,
                lastName: req.body.apellido,
                birth: req.body.nacimiento,
                dni: req.body.dni,
                email: req.body.email,
                confEmail: req.body.confEmail
            }
            return res.render('../views/users/register', {errors: errors.mapped(), user: user});
        } else {
            let newUser = {   
                id: lastId + 1,
                name: req.body.nombre,
                lastName: req.body.apellido,
                birth: req.body.nacimiento,
                dni: req.body.dni,
                email: req.body.email,
                pass: bcrypt.hashSync(req.body.pass, 10),
                category: 'user'
            }

            users.push(newUser);
            fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(users, null, 4));

            res.redirect('/usuarios/ingresar');
        }
    },    
    ingresar: function(req,res) {
        res.render('../views/users/login');
    },
    conectado: function(req, res) {
        let errors = validationResult(req);
        let { email, pass, recordarme} = req.body;
        if (errors.isEmpty()) {
            let usuarioALoguearse;

            users.forEach(user => {
                if (user.email === email && bcrypt.compareSync(pass, user.pass)) {
                     usuarioALoguearse = user;
                }
            });

            if (usuarioALoguearse == undefined) {
                return res.render('../views/users/login', {errores: 'Dirección de correo o contraseña inválidos'});
            }

            req.session.user = usuarioALoguearse;

            if (recordarme != undefined) {
                res.cookie('recordarme', usuarioALoguearse.email, { maxAge: 60000 });
            }
            return res.redirect('/');

        } else {
            return res.render('../views/users/login', {errors: errors.mapped()});
        }      
    },
    salir: function(req,res) {
        req.session.destroy();
        return res.redirect('/');
    },
    listado: function(req, res) {
        res.render('../views/users/usersList', {users: users})
    }
}