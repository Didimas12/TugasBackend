'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({
            User,
            Tempat_lahir,
            Kota,
            Pendidikan,
            Pekerjaan,
            alamat_asal,
            User_sosmed,
            Role,
            Kelas,
            Kehadiran
        }) {
            // define association here
            User.belongsTo(Tempat_lahir, { foreignKey: "tempat_lahir" });
            User.belongsTo(Kota, { foreignKey: "Kota" });
            User.belongsTo(Pendidikan, { foreignKey: "pendidikan_akhir" });
            User.belongsTo(Pekerjaan, { foreignKey: "pekerjaan" });
            User.hasOne(alamat_asal, { foreignKey: "id_user" });
            User.belongsTo(User_sosmed, { foreignKey: "email" });
            User.belongsToMany(Role, { through: "user_role" });
            User.hasMany(Kelas, { foreignKey: "id_user" });
            User.hasMany(Kehadiran, { foreignKey: "id_user" });
        }
    };
    User.init({
        id_user: {

            type: DataTypes.INTEGER(5),
            primaryKey: true,
            autoIncrement: true,
        },
        nama: {
            type: DataTypes.STRING(40)
        },
        alamat_sekarang: {
            type: DataTypes.STRING(30),
        },
        deskripsi: {
            type: DataTypes.STRING(100)
        },
        no_hp: {
            type: DataTypes.INTEGER(16),
        },
        email: {
            type: DataTypes.STRING(25)
        },
        psword: {
            type: DataTypes.STRING(25)
        },
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};