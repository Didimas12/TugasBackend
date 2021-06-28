'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tempat_lahir extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Tempat_lahir, Kota, User }) {
            // define association here
            Tempat_lahir.belongsTo(Kota, { foreignKey: "id_kota" });
            Tempat_lahir.hasOne(User, { foreignKey: "tempat_lahir" });
        }
    };
    Tempat_lahir.init({
        id_tl: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
        },
    }, {
        sequelize,
        modelName: 'Tempat_lahir',
    });
    return Tempat_lahir;
};