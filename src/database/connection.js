const Sequelize = require ('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);


sequelize.authenticate().then(function() {
    console.log("Conectado ao banco de dados com sucesso")
}).cath(function(erro){
    console.log("Falha ao se conectar ao banco de dados: " + erro)
})

module.exports = connection;