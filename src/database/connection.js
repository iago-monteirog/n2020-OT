const Sequelize = require ('sequelize');

const sequelize = new Sequelize('n2020ot', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log("Conectado ao banco de dados com sucesso")
}).cath(function(erro){
    console.log("Falha ao se conectar ao banco de dados: " + erro)
})