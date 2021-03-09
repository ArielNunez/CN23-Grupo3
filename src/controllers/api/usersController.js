let db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    all: function(req, res){
    db.Usuario.findAll ()
.then(function(users){
    return res.status(200).json({
        users:users
    });
    
})
.catch( (error) => {
    res.json(error);
});
},
findById: function(req, res) {
    db.Usuario.findByPk(req.params.id)
    .then (function(usuario){
        return res.status(200).json({usuario: usuario})
    })
    .catch( (error) => {
        res.json(error);
    })
}
}
