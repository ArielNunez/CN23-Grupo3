module.exports = {
    ingresar: function(req,res) {
        res.render('../views/users/login');
    },
    registro: function(req,res) {
        res.render('../views/users/register');
    }
}