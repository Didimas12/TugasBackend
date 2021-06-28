'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User, Role }) {
            // define association here
            Role.belongsToMany(User, { through: "user_role" });
        }
    };
    Role.init({
        id_role: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
        },
        role: {
            type: DataTypes.STRING(10),
        }
    }, {
        sequelize,
        modelName: 'Role',
    });
    return Role;
};