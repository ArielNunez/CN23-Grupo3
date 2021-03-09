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

        // traer todos los productos
        let products = db.Producto.findAll({
            include: [
                {association: "categoriaProducto"}
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