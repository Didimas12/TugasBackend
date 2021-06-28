'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Social_media extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Social_media, User_sosmed }) {
            // define association here
            Social_media.hasOne(User_sosmed, { foreignKey: "id_sosmed" });
        }
    };
    Social_media.init({
        id_socmed: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        socmed: {
            type: DataTypes.STRING(15)
        },
    }, {
        sequelize,
        modelName: 'Social_media',
    });
    return Social_media;
};