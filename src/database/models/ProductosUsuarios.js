module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductosUsuarios';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        producto_id: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        cantidad: {
            type: dataTypes.INTEGER,
        },
        talle: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        imagen: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'productos_usuarios',
        timestamps: true,
        underscored: true
    }

    const ProductosUsuarios = sequelize.define(alias,cols,config);

    ProductosUsuarios.associate = function(modelos) {
        ProductosUsuarios.belongsTo(modelos.Producto, {
            as: "producto",
            foreignKey: "producto_id"
        });

        ProductosUsuarios.belongsTo(modelos.Usuario, {
            as: 'usuario',
            foreignKey: "usuario_id"
        });

    }

    return ProductosUsuarios;
}