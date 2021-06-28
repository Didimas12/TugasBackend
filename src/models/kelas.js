'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Kelas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Kelas, User, Jadwal, Kehadiran }) {
            // define association here
            Kelas.belongsTo(User, { foreignKey: "id_user" });
            Kelas.hasMany(Kehadiran, { foreignKey: "id_kelas" });
            Kelas.belongsTo(Jadwal, { foreignKey: "id_jadwal" });

        }
    };
    Kelas.init({
        id_kelas: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
        },
        nama_kelas: {
            type: DataTypes.STRING(20)
        },
        waktu_mulai: {
            type: DataTypes.DATE
        },
        waktu_akhir: {
            type: DataTypes.DATE
        },
        deskripsi_kelas: {
            type: DataTypes.STRING(25)
        },
        foto: {
            type: DataTypes.STRING(50)
        }

    }, {
        sequelize,
        modelName: 'Kelas',
    });
    return Kelas;
};