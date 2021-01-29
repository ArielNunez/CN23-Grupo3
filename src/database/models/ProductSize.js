module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductoTalle';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_producto: {
            type: dataTypes.INTEGER
        },
        id_talle: {
            type: dataTypes.INTEGER
        },
        estado: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'producto_talle',
        timestamps: false,
        underscored: true
    }

    const ProductoTalle = sequelize.define(alias, cols, config);

    return ProductoTalle;
}