const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
let db = require('../database/models');

module.exports = {
    registro: function(req,res) {
        res.render('users/register');
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
            return res.render('users/register', {errors: errors.mapped(), user: user});
        } else {
            db.Usuario.create ({   
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                fecha_nacimiento: req.body.nacimiento,
                dni: req.body.dni,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.pass, 10),
            })
            .then(function(usuario){
                console.log(usuario)
                return res.redirect('/usuarios/ingresar');
            })
            .catch(function (err) {
                res.send("Lo sentimos, no pudimos procesar su solicitud, por favor intentelo nuevamente.")
              });

            
        }
    },    
    ingresar: function(req,res) {
        res.render('users/login');
    },
    loggeado: function(req, res) {
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
                return res.render('users/login', {errores: 'Dirección de correo o contraseña inválidos'});
            }

            req.session.user = usuarioALoguearse;

            if (recordarme != undefined) {
                res.cookie('recordarme', usuarioALoguearse.email, { maxAge: 60000 });
            }
            return res.redirect('/');

        } else {
            return res.render('users/login', {errors: errors.mapped()});
        }      
    },
    salir: function(req,res) {
        req.session.destroy();
        return res.redirect('/');
    },
    listado: function(req, res) {
        res.render('users/usersList', {users: users})
    }
}