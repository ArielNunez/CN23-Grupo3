const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

let users = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf-8');
users = JSON.parse(users);

let lastId = 0;
for(i= 0; i < users.length; i++) {
    if(lastId < users[i].id) {
        lastId = users[i].id
    }
}

module.exports = {
    ingresar: function(req,res) {
        res.render('login');
    },
    registro: function(req,res) {
        res.render('register');
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
        }

        users.push(newUser);
        fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(users, null, 4));

        res.redirect('login')
    }
}