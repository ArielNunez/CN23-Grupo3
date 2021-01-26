let db = require('../database/models');

module.exports = {
    index: function(req,res) {
        let novedades = db.Producto.findAll({
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
                descuento: {[db.Sequelize.Op.ne]: null}
            },
            order: [
                ['descuento', 'DESC']
            ],
            limit: 4,
            include: [
                {association: "imagenes"}
            ]
        });
        Promise.all([novedades, ofertas]).then(function([novedades,ofertas]){
            res.render('index', {novedades: novedades, ofertas: ofertas});
        });
    }
}