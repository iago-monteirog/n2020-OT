const { Model, DataTypes } = require('sequelize');
const connection = require("../database/connection");

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Usuario