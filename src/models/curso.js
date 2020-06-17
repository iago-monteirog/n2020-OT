const { Model, DataTypes } = require('sequelize');
const connection = require("../database/connection");

class Curso extends Model {
    static init(sequelize) {
        super.init({
            titulo: DataTypes.STRING,
            link: DataTypes.STRING,
            imagem: DataTypes.BLOB,
        }, {
            sequelize
        })
    }
}

module.exports = Curso