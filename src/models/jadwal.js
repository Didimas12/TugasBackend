'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Jadwal extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Jadwal, Materi, Kelas, Kehadiran }) {
            // define association here
            Jadwal.belongsToMany(Materi, { through: "jadwal_materi" });
            Jadwal.hasMany(Kelas, { foreignKey: "id_kelas" });
            Jadwal.hasMany(Kehadiran, { foreignKey: "id_jadwal" });
        }
    };
    Jadwal.init({
        id_jadwal: {
            type: DataTypes.INTEGER(4),
            autoIncrement: true,
            primaryKey: true,
        },
        nama_jadwal: {
            type: DataTypes.STRING(25)
        },
        waktu_mulai: {
            type: DataTypes.DATE
        },
        waktu_akhir: {
            type: DataTypes.DATE
        },
    }, {
        sequelize,
        modelName: 'Jadwal',
    });
    return Jadwal;
};