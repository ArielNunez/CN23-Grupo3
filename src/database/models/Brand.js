module.exports = (sequelize, dataTypes) => {
    let alias = "Marca";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        marca: {
            type: dataTypes.STRING
        },
        estado: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'marcas',
        timestamps: false
    }

    const Marca = sequelize.define(alias, cols, config);

    Marca.associate = function(modelos) {
        Marca.hasMany(modelos.Producto, {
            as: "productos",
            foreignKey: "id_marca"
        });
    }

    return Marca;
}