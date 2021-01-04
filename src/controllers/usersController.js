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

        res.redirect('login')
    },    
    ingresar: function(req,res) {
        res.render('../views/users/login');
    },
    loggeado: function(req, res) {
        let errors = validationResult(req);
        let { email, pass} = req.body;
        if (errors.isEmpty()) {
            let usuarioALoguearse;

            usuarios.forEach(user => {
                if (user.email === email && bcrypt.compareSync(pass, user.pass)) {
                     usuarioALoguearse = user;
                }
            });

            if (usuarioALoguearse == undefined) {
                return res.render('login', {errors: 'Dirección de correo o contraeña inválidos'});
            } 

        } else {
            return res.render('login', {errors: errors.mapped()});        
    }
}