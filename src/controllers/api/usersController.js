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
}
}