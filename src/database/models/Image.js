module.exports = (sequelize, dataTypes) => {
    let alias = "Imagen";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nombre: {
            type: dataTypes.STRING,
            notNull: true
        },
        id_producto: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        estado: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'imagenes',
        timestamps: false,
        underscored: true
    }

    const Imagen = sequelize.define(alias, cols, config);

    Imagen.associate = function(modelos) {
        Imagen.belongsTo(modelos.Producto, {
            as: "producto",
            foreignKey: "id_producto"
        });
    }

    return Imagen;
}