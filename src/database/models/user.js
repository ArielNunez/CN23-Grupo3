module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        nombre: {
            type: dataTypes.STRING,
            notNull: true
            },
        apellido: {
            type: dataTypes.STRING,
            notNull: true
        },
        fecha_nacimiento: {
            type: dataTypes.DATEONLY,
            allowNull: true,
        },
        dni: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        email: {
            type: dataTypes.STRING,
            notNull: true
        },
        password: {
            type: dataTypes.STRING,
            notNull: true
        },
        estado: {
            type: dataTypes.INTEGER,
            allowNull: true
        }


        }
        

    let config = {
            tableName: 'usuarios',
            timestamps: true,
            underscored: true
            };

    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
    
    }