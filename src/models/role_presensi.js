'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role_presensi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Role_presensi, Kehadiran }) {
            // define association here
            Role_presensi.hasOne(Kehadiran, { foreignKey: "id_presensi" });
        }
    };
    Role_presensi.init({
        id_presensi: {
            type: DataTypes.INTEGER(3),
            primaryKey: true,
        },
        presensi: {
            type: DataTypes.STRING(15)
        },
    }, {
        sequelize,
        modelName: 'Role_presensi',
    });
    return Role_presensi;
};