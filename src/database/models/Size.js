module.exports = (sequelize, dataTypes) => {
    let alias = "Talle";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        talle: {
            type: dataTypes.INTEGER
        },
        estado: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'talles',
        timestamps: false,
        underscored: true
    }

    const Talle = sequelize.define(alias, cols, config);

    Talle.associate = function(modelos) {
        Talle.belongsToMany(modelos.Producto, {
            as: 'productos',
            through: 'producto_talle',
            foreignKey: 'id_talle',
            otherKey: 'id_producto',
            timestamps: false
        });
    }

    return Talle;
}