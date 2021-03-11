let db = require('../database/models');

module.exports = {
    index: function(req,res) {
        let novedades = db.Producto.findAll({
            where: {
                estado: 1
            },
            order: [
                ['updated_at', 'DESC']
            ],
            limit: 4,
            include: [
                {association: "imagenes"}
            ]
        });
        let ofertas = db.Producto.findAll({
            where: {
                descuento: {[db.Sequelize.Op.ne]: null},
                estado: 1
            },
            order: [
                ['descuento', 'DESC']
            ],
            limit: 4,
            include: [
                {association: "imagenes"}
            ]
        });

        Promise.all([novedades, ofertas])
        .then(function([novedades,ofertas]){
            res.render('index', {novedades: novedades, ofertas: ofertas});
        })
        .catch(function (err) {
            res.send("Lo sentimos, no pudimos procesar tu solicitud. Por favor intentalo nuevamente.")
          });
    },

    dashboard: function(req, res) {
        res.redirect('http://localhost:3000')
    }
}