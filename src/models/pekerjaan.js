'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pekerjaan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Institusi, Pekerjaan, User }) {
            Pekerjaan.belongsTo(Institusi, { foreignKey: "id_institusi" });
            Pekerjaan.hasOne(User, { foreignKey: "pekerjaan" });
        }
    };
    Pekerjaan.init({
        id_pekerjaan: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
        },
        nama_pekerjaan: {
            type: DataTypes.STRING(20),
        },
    }, {
        sequelize,
        modelName: 'Pekerjaan',
    });
    return Pekerjaan;
};