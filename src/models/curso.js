const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
    static init(sequelize) {
        super.init({
            titulo: DataTypes.STRING,
            link: DataTypes.STRING,
            imagem: DataTypes.TEXT,
        }, {
            sequelize
        });
        return this;
    }
}

module.exports = Curso