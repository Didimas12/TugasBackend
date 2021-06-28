'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class alamat_asal extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ alamat_asal, User, Kota }) {
            // define association here
            alamat_asal.belongsTo(Kota, { foreignKey: "id_kota" });
            alamat_asal.belongsTo(User, { foreignKey: "id_user" });

        }
    };
    alamat_asal.init({
        id_alamat_asal: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
        },
        alamat: {
            type: DataTypes.STRING(40),
        },
    }, {
        sequelize,
        modelName: 'alamat_asal',
    });
    return alamat_asal;
};