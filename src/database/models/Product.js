module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        producto: {
            type: dataTypes.STRING,
            notNull: true
        },
        descripcion: {
            type: dataTypes.STRING,
            notNull: true
        },
        id_categoria: {
            type: dataTypes.INTEGER
        },
        id_marca: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.FLOAT
        },
        descuento: {
            type: dataTypes.INTEGER
        },
        estado: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'productos',
        timestamps: false
    }

    const Producto = sequelize.define(alias,cols,config);

    Producto.associate = function(modelos) {
        Producto.belongsTo(modelos.CategoriaProducto, {
            as: "categoriaProducto",
            foreignKey: "id_categoria"
        });

        Producto.belongsToMany(modelos.Talle, {
            as: 'talles',
            through: 'producto_talle',
            foreignKey: 'id_producto',
            otherKey: 'id_talle',
            timestamps: false
        });

        Producto.belongsTo(modelos.Marca, {
            as: "marca",
            foreignKey: "id_marca"
        });

        Producto.hasMany(modelos.Imagen, {
            as: "imagenes",
            foreignKey: "id_producto"
        });
    }

    return Producto;
}