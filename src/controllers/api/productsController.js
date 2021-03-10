let db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    all: (req, res) => {
        // contar cantidad de productos por categoria mediante un GROUP BY
        let countByCategory = db.Producto.findAll({
            include: [
                {association: "categoriaProducto"}
            ],
            attributes: [[sequelize.fn('count', sequelize.col('producto')), 'cantidad']],
            group: ['id_categoria']
        });

        
        let condiciones = [];
        if(req.query.categoria) {
            for(let i=0; i<req.query.categoria.length; i++) {
                condiciones.push({id_categoria: parseInt(req.query.categoria[i])});
            }
        }
        if(req.query.marcas) {
            for(let i=0; i<req.query.marcas.length; i++) {
                condiciones.push({id_marca: parseInt(req.query.marcas[i])});
            }
        }
        if(condiciones.length>0) {
            condiciones = {
                [db.Sequelize.Op.or]: condiciones
            }
        }

        // traer todos los productos
        let products = db.Producto.findAll({
            where: condiciones,
            include: [
                {association: "categoriaProducto"}, {association: "imagenes"}
            ]
        });

        Promise.all([products, countByCategory])
        .then( function([products, countByCategory]) {
            products = products.map( (product) => {
                product = {
                    id: product.id,
                    producto: product.producto,
                    descripcion: product.descripcion,
                    categoria: product.categoriaProducto.categoria,
                    precio: product.precio,
                    descuento: product.descuento,
                    imagen: product.imagenes[0].nombre,
                    detalle: '/api/productos/' + product.id
                }
                return product;
            });
            countByCategory = countByCategory.map( (categoria) => {
                categoria = {
                    categoria: categoria.dataValues.categoriaProducto.categoria,
                    cantidad: categoria.dataValues.cantidad
                }
                return categoria;
            });
            return res.status(200).json({
                count: products.length,
                countByCategory: countByCategory,
                products: products
            });
        })
        .catch( (error) => {
            return res.json(error);
        });
    }
}