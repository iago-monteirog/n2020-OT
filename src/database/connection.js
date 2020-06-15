const Sequelize = require ('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/usuario')
const Curso = require('../models/curso')

const connection = new Sequelize(dbConfig.development);

Usuario.init(connection)
Curso.init(connection)

module.exports = connection;