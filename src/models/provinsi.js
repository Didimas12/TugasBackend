'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Provinsi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Provinsi, Kota }) {
            Provinsi.hasOne(Kota, { foreignKey: "id_provinsi" });
        }
    };
    Provinsi.init({
        id_prov: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
        },
        nama_prov: {
            type: DataTypes.STRING(25)
        },
    }, {
        sequelize,
        modelName: 'Provinsi',
    });
    return Provinsi;
};