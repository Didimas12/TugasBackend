'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Kota extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Provinsi, Kota, Tempat_lahir, alamat_asal }) {
            // define association here
            Kota.belongsTo(Provinsi, { foreignKey: "id_provinsi" });
            Kota.hasOne(Tempat_lahir, { foreignKey: "id_kota" });
            Kota.hasOne(alamat_asal, { foreignKey: "id_kota" })
        }
    };
    Kota.init({
        id_kota: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
        },
        nama_kota: {
            type: DataTypes.STRING(20),
        }
    }, {
        sequelize,
        modelName: 'Kota',
    });
    return Kota;
};