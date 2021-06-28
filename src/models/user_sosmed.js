'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User_sosmed extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Social_media, User_sosmed, User }) {
            // define association here
            User_sosmed.belongsTo(Social_media, { foreignKey: "id_sosmed" });
            User_sosmed.hasOne(User, { foreignKey: "email" });
        }
    };
    User_sosmed.init({
        email: {
            type: DataTypes.STRING(25),
            primaryKey: true,
        },
    }, {
        sequelize,
        modelName: 'User_sosmed',
    });
    return User_sosmed;
};