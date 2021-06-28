'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Institusi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Institusi, Pekerjaan }) {
            Institusi.hasOne(Pekerjaan, { foreignKey: "id_institusi" });
        }
    };
    Institusi.init({
        id_institusi: {
            type: DataTypes.INTEGER(5),
            primaryKey: true,
            autoIncrement: true,
        },
        nama_institusi: {
            type: DataTypes.STRING(20)
        }
    }, {
        sequelize,
        modelName: 'Institusi',
    });
    return Institusi;
};