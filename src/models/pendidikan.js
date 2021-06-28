'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pendidikan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Pendidikan, User }) {
            // define association here
            Pendidikan.hasOne(User, { foreignKey: "pendidikan_akhir" });
        }
    };
    Pendidikan.init({
        id_pend: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
        },
        jenjang_pend: {
            type: DataTypes.STRING(20),
        },
    }, {
        sequelize,
        modelName: 'Pendidikan',
    });
    return Pendidikan;
};