'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Kehadiran extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Role_presensi, Kehadiran, Jadwal, User, Kelas }) {
            // define association here
            Kehadiran.belongsTo(Role_presensi, { foreignKey: "id_presensi" });
            Kehadiran.belongsTo(Jadwal, { foreignKey: "id_jadwal" });
            Kehadiran.belongsTo(Kelas, { foreignKey: "id_kelas" });
            Kehadiran.belongsTo(User, { foreignKey: "id_user" });

        }
    };
    Kehadiran.init({
        id_kehadiran: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Kehadiran',
    });
    return Kehadiran;
};