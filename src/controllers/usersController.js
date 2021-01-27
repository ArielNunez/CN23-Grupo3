const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const db = require('../database/models');

var users= fs.readFileSync(path.join(__dirname, "../database/users.json"), "utf-8");
users = JSON.parse(users);

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
            res.send(errors)
            return res.render('users/register', {errors: errors.mapped(), user: user});
        } else {
            db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                fecha_nacimiento: req.body.nacimiento,
                dni: req.body.dni,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.pass, 10),
                id_categoria: 1,
                estado: 1
            })
            .then(function(usuario){
                return res.redirect('/usuarios/ingresar');
            })
            .catch(function (err) {
                res.send("Lo sentimos, no pudimos procesar tu solicitud. Por favor intentalo nuevamente.")
              });

            
        }
    },  
    ingresar: function(req,res) {
        res.render('users/login');
    },
    logueado: function(req, res) {
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

            if (usuarioALoguearse.category == "admin") {
                return res.redirect('/admin/productos/crear')
            } else {
                return res.redirect('/');
            }

        } else {
            return res.render('users/login', {errors: errors.mapped()});
        }      
    },
    ingresoAdmin: function(req, res) {
        return res.redirect('/usuarios/ingresar');
    },
    salir: function(req,res) {
        req.session.destroy();
        return res.redirect('/');
    },
    listado: function(req, res) {
        db.Usuario.findAll({
            where: {
                estado: 1
            }
        })
        .then(function(users){
            res.render('users/usersList', {users: users})
        })
    },
    editar: function(req, res) {
        db.Usuario.findByPk(req.params.id)
        .then(function(usuario) {
            res.render('users/editUser', {usuario: usuario})
        })
    },
    update: function(req, res) {
            db.Usuario.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                fecha_nacimiento: req.body.nacimiento,
                email: req.body.email
            }, {
               where: {
                   id: req.params.id
               }
            })
            .then(function(){
                res.redirect("/admin/usuarios/listado")
            })
       
       },
       delete: function(req, res) {
        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect("/admin/usuarios/listado")
        })
    }
    }
