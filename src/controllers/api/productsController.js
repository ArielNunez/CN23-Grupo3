let db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    all: (req, res) => {
        let condicionesMarcas = [], condicionesCategoria = [], condiciones={}, orden=[];

        // contar cantidad de productos por categoria mediante un GROUP BY
        let countByCategory = db.Producto.findAll({
            include: [{association: "categoriaProducto"}],
            attributes: [[sequelize.fn('count', sequelize.col('producto')), 'cantidad']],
            group: ['id_categoria']
        });

        // generar condiciones de busqueda en base a la req.query
        if(req.query.categoria) {
            for(let i=0; i<req.query.categoria.length; i++) {
                condicionesCategoria.push({id_categoria: parseInt(req.query.categoria[i])});
            }
            condicionesCategoria = {[db.Sequelize.Op.or]: condicionesCategoria}
        }
        if(req.query.marcas) {
            if(typeof req.query.marcas == 'string') {
                condicionesMarcas.push({id_marca: parseInt(req.query.marcas)});
            } else {
                for(let i=0; i<req.query.marcas.length; i++) {
                    condicionesMarcas.push({id_marca: parseInt(req.query.marcas[i])});
                }
            }
            condicionesMarcas = {[db.Sequelize.Op.or]: condicionesMarcas}
        }
        switch(req.query.orden) {
            case 'novedades':
                orden = [['updated_at', 'DESC'],['created_at', 'DESC']];
                break;
            case 'menorPrecio':
                orden = [['precio', 'ASC']];
                break;
            case 'mayorPrecio':
                orden = [['precio', 'DESC']];
        }
        condiciones={[db.Sequelize.Op.and]: [condicionesCategoria, condicionesMarcas]}
        // traer todos los productos que cumplan las condiciones
        let products = db.Producto.findAll({
            where: condiciones,
            include: [{association: "categoriaProducto"}, {association: "imagenes"}, {association: 'talles'}],
            order: orden
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
                    talles: product.talles,
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
    },
    detail: (req, res) => {
        db.Producto.findByPk(req.params.id, {
            include: [{association: "categoriaProducto"}, {association: "imagenes"}, {association: 'talles'}]
        })
        .then(product => {
            return res.status(200).json({
                ...product.dataValues,
                url: `/img/uploads/productimage/${product.imagenes[0].nombre}`
            });
        })
        .catch(error => {
            return res.json(error);
        });
    }
}