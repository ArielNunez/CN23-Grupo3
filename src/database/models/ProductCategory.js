module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoriaProducto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        categoria: {
            type: dataTypes.STRING,
            notNull: true
        },
        estado: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'categorias_productos',
        timestamps: false
    }

    const CategoriaProducto = sequelize.define(alias,cols,config);

    CategoriaProducto.associate = function(modelos) {
        CategoriaProducto.hasMany(modelos.Producto, {
            as: "productos",
            foreignKey: "id_categoria"
        });
    }

    return CategoriaProducto;
}